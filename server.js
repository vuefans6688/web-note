const express = require('express')
const cors = require('cors')
const app = express()

// 使用cors跨域
app.use(cors())

// 能解析urlencoded格式的post请求体参数
app.use(express.urlencoded())

// 能解析json格式的请求体参数
app.use(express.json())

app.get('/product1', (req, res) => {
  setTimeout(() => {
    res.send([
      { id: 1, name: '商品1' },
      { id: 2, name: '商品2' },
      { id: 3, name: '商品3' }
    ])
  }, 1000 + Math.random() * 2000)
})

app.get('/product2', (req, res) => {
  setTimeout(() => {
    res.send([
      { id: 1, name: '商品2.1' },
      { id: 2, name: '商品2.2' },
      { id: 3, name: '商品2.3' }
    ])
  }, 1000 + Math.random() * 2000)
})

app.listen(4000, () => {
  console.log('server app start on port 4000')
})