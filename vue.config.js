const path = require('path')  // 引入path工具包

// 根据目录/文件夹名得到其对应的绝对路径
// __dirname 代表当前文件的绝对路径
const resolve = dir => path.join(__dirname, dir)  

module.exports = {
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
    // key、value自行定义，比如.set('@@', resolve('src/components'))
      .set('@', resolve('src'))  
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseURL要写为''
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      // '/api': {
      //   // 目标API地址
      //   target: 'https://autumnfish.cn/heimamm_server',
      //   // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8080/api'转接为http://localhost:8080/
      //   pathRewrite: { 
      //     '^/api': '' 
      //   },
      //   // 是否跨域，将主机标头的原点更改为目标URL
      //   changeOrigin: true
      // }

      // '/service': {
      //   target: 'http://his.aokaoyun.com',
      //   changeOrigin: true
      // }


    }
  }
}
