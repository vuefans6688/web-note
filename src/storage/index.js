// 用storage封装全局数据key

const STORAGE_KEY = 'admin-token'

export default {
  /**
   * @param key 存储的对象属性名
   * @param value 存储的对象属性值
   * @param module 如果传这个值就存到那个模块
  */
  setSession (key, value, module) {
    if (module) {
      let object = this.getSession(module)
      object[key] = value
      this.setSession(module, object)
    } else {
      let object = this.getStorage()
      object[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(object))
    }
  },
  /**
   * 获取某个模块下面的属性
   * @param key 只传key就是取admin-token下面的对象
   * @param module 传入module
  */
  getSession (key, module) {
    if (module) {
      let value = this.getSession(module)
      if (value) {
        return value[key]
      }
    }
    return this.getStorage()[key]
  },
  /**
   * 获取所有值
  */
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  /**
   * @param key 删除模块的key
   * @param module 模块
   */
  clearSession (key, module) {
    let object = this.getStorage()
    if (module) {
      if (!object[module]) {
        return
      }
      delete object[module][key]
    } else {
      delete object[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(object))
  }
}

