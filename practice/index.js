const fs = require('fs')

return new Promise((resolve, reject) => {
  fs.readFile('./data/content.txt', (error, data) => {
    if (error) {
      reject(error)
    }
    resolve(data)
  })
})