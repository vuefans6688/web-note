const path = require('path')  // 引入path工具包

// 根据目录/文件夹名得到其对应的绝对路径
const resolve = dir => path.join(__dirname, dir)  // __dirname 代表当前文件的绝对路径

module.exports = {
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))  // key、value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseURL要写为''，即空字符串
  devServer: {}
}
