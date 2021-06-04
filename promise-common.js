// 手写Promise
(window => {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  // excutor执行器函数(同步执行) 
  function Promise (excutor) {
    // 将当前promise对象保存起来
    const self = this
    // 给promise对象指定status属性，初始值为PENDING
    self.status = PENDING
    // 给promise对象指定一个用于存储结果数据的属性
    self.data = undefined
    // 每个元素的结构: { onResolved () {}, onRejected () {} }
    self.callbacks = []

    function resolve (value) {
      // 如果当前状态不是PENDING，直接结束
      if (self.status !== PENDING) {
        return
      }
      // 将状态修改为RESOLVED
      self.status = RESOLVED
      // 保存value数据
      self.data = value
      // 如果有待执行callback函数，立即异步执行回调函数onResolved
      if (self.callbacks.length > 0) {
        // 放入队列中执行所有成功的回调
        setTimeout(() => {
          self.callbacks.forEach(callback => {
            callback.onResolved(value)
          })
        })
      }
    }

    function reject (reason) {
      // 如果当前状态不是PENDING，直接结束
      if (self.status !== PENDING) {
        return
      }
      // 将状态修改为REJECTED
      self.status = REJECTED
      // 保存value数据
      self.data = reason
      // 如果有待执行callback函数，立即异步执行回调函数onRejected
      if (self.callbacks.length > 0) {
        // 放入队列中执行所有成功的回调
        setTimeout(() => {
          self.callbacks.forEach(callback => {
            callback.onRejected(reason)
          })
        })
      }
    }

    try {
      // 立即同步执行excutor
      excutor(resolve, reject)
      // 如果执行器抛出异常，promise对象变为rejected状态
    } catch (error) {
      reject(error)
    }

  }

  // Promise原型对象的then()，指定成功和失败的回调函数，返回一个新的promise对象
  Promise.prototype.then = function (onResolved, onRejected) {
    // 向后传递成功的value
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    // 向后传递失败的reason
    // 指定默认的失败回调(实现错误/异常穿透的关键点)
    // throw的左边不能有return
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
    const self = this
    // 返回一个新的promise对象
    return new Promise((resolve, reject) => {
      // 调用回调函数的处理，根据执行结果，改变return的promise状态
      function handle (callback) {
        try {
          const result = callback(self.data)
          // 如果回调函数返回的是promise，return的promise结果就是这个promise结果
          if (result instanceof Promise) {
            result.then(
              // 当result成功时，让return的promise也成功
              value => resolve(value),
              // 当result失败时，让return的promise也失败
              reason => reject(reason)
            )
            // 简洁写法
            // result.then(resolve, reject)
          } else {
            // 如果回调函数返回的不是promise，return的promise就会成功，value就是返回的值
            resolve(result)
          }
        } catch (error) {
          // 如果抛出异常，return的promise就会失败，reason就是error
          reject(error)
        }
      }
      // 当前状态还是PENDING状态，将回调函数保存起来
      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved () {
            handle(onResolved)
          },
          onRejected () {
            handle(onRejected)
          }
        })
        // 如果当前是RESOLVED状态，异步执行onResolved并改变return的promise状态
      } else if (self.status === RESOLVED) {
        setTimeout(() => {
          handle(onResolved)
        })
        // 如果当前是REJECTED状态，异步执行onRejected并改变return的promise状态  
      } else {
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }

  // Promise原型对象的catch()，指定失败的回调函数，返回一个新的promise对象
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  // Promise函数对象的resolve方法，返回一个指定结果的成功的promise
  Promise.resolve = function (value) {
    // 返回一个成功/失败的promise
    return new Promise((resolve, reject) => {
      // value是promise，使用value的结果作为promise的结果
      if (value instanceof Promise) {
        value.then(resolve, reject)
        // value不是promise，promise变为成功，数据是value
      } else {
        resolve(value)
      }
    })
  }

  // Promise函数对象的reject方法，返回一个指定reason的失败的promise
  Promise.reject = function (reason) {
    // 返回一个失败的promise
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  // Promise函数对象的all方法，返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败的就失败
  Promise.all = function (promises) {
    // 用来保存所有成功value的数组
    const values = new Array(promises.length)
    // 用来保存成功promise的数量
    let resolvedCount = 0
    // 返回一个新的promise
    return new Promise((resolve, reject) => {
      // 遍历promises并获取每个promise
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
          value => {
            // 成功的数量加1
            resolvedCount++
            // 将成功的value保存到values中
            values[index] = value
            // 如果全部成功了，将return的promise改为成功
            if (resolvedCount === promises.length) {
              resolve(values)
            }
          },
          // 只要失败了，return的promise就失败
          reason => reject(reason)
        )
      })
    })
  }

  // Promise函数对象的race方法，返回一个promise，其结果由第一个完成的promise决定
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      // 遍历promises获取每个promise
      promises.forEach((promise) => {
        Promise.resolve(promise).then(
          // 一旦有成功的，就将return的promise变为成功
          value => resolve(value),
          // 一旦有失败的，就将return的promise变为失败
          reason => reject(reason)
        )
      })
    })
  }

  // 返回一个promise对象，它在指定的时间后才确定结果
  Promise.resolveDelay = function (value, time) {
    // 返回一个成功/失败的promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // value是promise，使用value的结果作为promise的结果
        if (value instanceof Promise) {
          value.then(resolve, reject)
          // value不是promise，promise变为成功，数据是value
        } else {
          resolve(value)
        }
      }, time)
    })
  }

  // 返回一个promise对象，它在指定的时间后才失败
  Promise.rejectDelay = function (reason, time) {
    // 返回一个失败的promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(reason)
      }, time)
    })
  }

  // 向外暴露Promise函数
  window.Promise = Promise

})(window)