(() => {
  const MyPlugin = {}
  MyPlugin.install = (Vue, options) => {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = () => {
      // 逻辑...
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    })
  
    // 3. 注入组件选项
    Vue.mixin({
      created () {
        // 逻辑...
      }
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = methodOptions => {
      // 逻辑...
    }
  }
  window.MyPlugin = MyPlugin
}) ()
