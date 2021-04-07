
// 浏览器中的JavaScript是没有文件操作的能力的
// 但是Node中的JavaScript具有文件操作的能力

// fs是filesystem的简写，是文件系统的意思
// 在Node中如果想要进行文件操作，首先必须引入fs这个核心模块
// 在fs这个核心模块中，提供了所有操作文件的API
// 例如: fs.readFile是用来读取文件的

// 1.使用require方法加载fs核心模块
const { response } = require('express')
const fs = require('fs')

// 2.读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数是一个回调函数，接收两个参数error和data
// error: 如果读取失败，error就是错误对象。如果读取成功，error就是null
// data: 如果读取成功，data就是读取到的数据。如果读取失败，error就是错误对象
// fs.readFile('./data/hello.txt', (error, data) => {
// <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
// 文件中存储的其实都是二进制数据 0 1
// 这里为什么看到的不是0和1呢？原因是二进制转为了十六进制了
// 但是无论二进制还是十六进制，人类都不认识
// 所以我们可以通过toString方法把其转为我们能认识的字符

// console.log(data)

// console.log(data.toString())
// })

const promise = new Promise((resolve, reject) => {
  fs.readFile('./data/content.txt', (error, data) => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
})

promise.then(response => {
  console.log(response.toString())
}, error => {
  console.log(error)
})
