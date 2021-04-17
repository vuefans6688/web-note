function getResult (a, b, operator) {
  switch (operator) {
    case '+':
      return a * 1 + b * 1
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    default:
      return '非预期的运算结果!'
  }
}
getResult(3, 4, '*')  //  12

function getScore (score) {
  switch (true) {
    case score < 60:
      return '不及格'
    case score <= 70:
      return '合格'
    case score <= 80:
      return '良好'
    case score >= 90:
      return '优秀'
    default:
      return '成绩有误!'
  }
}
getScore(80.5)  // 良好

function judgeSex (sex) {
  switch (sex) {
    case 1:
      return '女士'
    case 2:
      return '男士'
    default:
      return '请选择性别'
  }
}
judgeSex(3)  // 请选择性别

// 位运算符
console.log(5 & 1)  // 1
console.log(5 | 1)  // 5
console.log(5 ^ 1)  // 4
console.log(~5)  // -6
console.log(5 << 1)  // 10
console.log(5 >> 1)  // 2
console.log(-5 >> 1)  // -3
console.log(5 >>> 1)  // 2

// 闭包
function getList (data) {
  return function (id) {
    return data.list[id]
  }
}
const data = {
  list: [
    {
      id: '123'
    }
  ]
}
let closure = getList(data)
closure(data.list.map(item => console.log(item.id)))  // 123

function useClosure (i) {
  return function (j) {
    return i + j
  }
}
let c = useClosure(1)
c(2)  // 3  

// 实现一函数，判断输入的是不是回文字符串
function palindRome (code) {
  let strings = ''
  for (let i = code.length - 1; i >= 0; i--) {
    strings += code[i]
  }
  return strings === code
}
palindRome('abcba')  // true

// 实现一函数，判断输入的是不是回文字符串
function isPalindRome (strings) {
  for (let i = 0; i < strings.length; i++) {
    return strings.charAt(i) !== strings.charAt(strings.length - 1 - i) ? false : true
  }
}
isPalindRome('abcba')  // true

// 两种以上方式实现已知或者未知宽度的垂直水平居中
// .wrapper {  
//   position: relative;
//   .box {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 100px;
//     height: 100px;
//     margin: -50px 0 0 -50px;
//   }
// }

// .wrapper {  
//   position: relative;
//   .box {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }

// .wrapper {  
//   .box {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100px;
//   }
// }

// 实现一函数，判断输入的是不是回文字符串
function hasPalindRome (input) {
  if (typeof input !== 'string') {
    return false
  }
  return input.split('').reverse().join('') === input
}
hasPalindRome('hello')  // false
hasPalindRome('abcba')  // true

// 实现效果，点击容器内的图标，图标边框变成border: 1px solid red，点击空白处重置
const box = document.getElementById('box')
function isIcon (target) {
  return target.className.includes('icon')
}
box.onclick = function (e) {
  e.stopPropagation()
  const target = e.target
  if (isIcon(target)) {
    target.style.border = '1px solid red'
  }
}
document.onclick = function (e) {
  const children = box.children
  for (let i = 0; i < children.length; i++) {
    if (isIcon(children[i])) {
      children[i].style.border = 'none'
    }
  }
}

// 请简单实现双向数据绑定mvvm
// <input id="input"> 
const datas = {}
const input = document.getElementById('input')
Object.defineProperty(data, 'text', {
  set (value) {
    input.value = value
    this.value = value
  }
})
input.onchange = function (e) {
  datas.text = e.target.value
}

// 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key, value)和getItem(key)
const instance = null
class Storage {
  static getInstance () {
    if (!instance) {
      instance = new Storage()
    }
    return instance
  }
}
setItem = (key, value) => localStorage.setItem(key, value)
getItem = key => localStorage.getItem(key)

// JSX做表达式判断时候，需要强转为boolean类型，如:
function render () {
  const bool = 0
  // 如果不使用!!b进行强转数据类型，会在页面里面输出0
  return <div>{!!bool && <div>这是一段文本</div>}</div>
}

function Person (name, age) {
  this.name = name
  this.age = age
  this.run = function () {
    return this.name + '在运行'
  }
}
Person.prototype.work = function () {
  return this.name + '在工作'
}
function Web (name, age) {
  // this指代web对象，只接收2个参数，arguments为隐式类数组对象，用来接收传入的参数
  // Person.apply(this, arguments)
  // this指代Web对象，可以接收任意多个参数
  Person.call(this, name, age)
}
Web.prototype = new Person()
const web = new Web('小米', 20)
web.run()  // "小米在运行"
web.work()  // "小米在工作"

// 给Sting加一个用正则表达式求出字符串中有多少个数字的方法
String.prototype.getCount = function (strings) {
  let regular = /\d/
  let count = 0
  while (regular.test(strings)) {
    strings = strings.replace(regular, '')
    count++
  }
}
String.prototype.getLength = function () {
  const regular = /\d/g
  return this.match(regular).length
}
const values = prompt('请输入字符串: ')
const temp = values.getLength()
console.log('输入的字符串有' + temp + '个数字')

// break是立即结束语句，并跳出语句，进行下个语句执行
function breakStatement (numbers) {
  let arrays = []
  for (let i = 1; i <= numbers; i++) {
    if (i === 6) {
      break
    }
    arrays.push(i)
  }
  return arrays
}
breakStatement(10)  // [1, 2, 3, 4, 5]

// continue是停止当前语句，并从头执行该语句
function continueStatement (numbers) {
  let arrays = []
  for (let i = 1; i <= numbers; i++) {
    if (i === 6) {
      continue
    }
    arrays.push(i)
  }
  return arrays
}
continueStatement(10)  // [1, 2, 3, 4, 5, 7, 8, 9, 10]

// 求整数1-100的累加值，但要求跳过所有个位为3的数
function continueStatement (start, end) {
  let sum = 0
  for (let i = start; i <= end; i++) {
    if (i % 10 === 3) {
      continue
    }
    sum += i
  }
  return sum
}
continueStatement(1, 100)  // 4570

// while循环
function whileLoop (numbers) {
  let i = 1
  let arrays = []
  while (true) {
    if (i === numbers) {
      break
    }
    arrays.push(i)
    i++
  }
  return arrays
}
whileLoop(10)  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// return 停止函数
function format (data) {
  return data < 10 ? `0${data}` : data
}
format(3)  // "03"

function distance (data) {
  return data < 1000 ? `${data}米` : (data / 1000).toFixed(2) + '公里'
}
distance(32)  // "32米"
distance(320)  // "320米"
distance(3200)  // "3.20公里"

// 递归：在函数体内调用自身
// 实现递归的方法: 
// 1、首先去找临界值，即无需计算，获得的值
// 2、找这一次和上一次的关系
// 3、假设当前函数已经可以使用，调用自身计算上一次

// 斐波那契数列
function fib (number) {
  if (number === 1 || number === 2) {
    return 1
  }
  return fib(number - 1) + fib(number - 2)
}
fib(4)  // 3

// 斐波那契数列
function fib (a = 1, b = 1, series) {
  let temp
  if (series > 2) {
    for (let i = 0; i < series - 2; i++) {
      temp = a + b
      a = b
      b = temp
    }
    return temp
  } else {
    return 1
  }
}
fib(1)  // 1
fib(2)  // 1
fib(3)  // 2
fib(4)  // 3
fib(5)  // 5

// 递归获取数据中的id
function getWaresId (data, id) {
  let commodity = {}
  data.forEach(item => {
    if (item.id === id) {
      // commodity是外层的数据
      commodity = item
      // 把item返回给getWaresId()
      return item
      // 判断是否有goods并且goods的长度不能为0
    } else if (item.goods && item.goods.length > 0) {
      // commodity是里层的数据
      commodity = getWaresId(item.goods, id)
    }
  })
  return commodity
}
const list = [
  {
    id: 1,
    name: '家电',
    goods: [
      { id: 11, name: '冰箱' },
      { id: 12, name: '洗衣机' }
    ]
  },
  {
    id: 2,
    name: '服饰'
  }
]
getWaresId(list, 1)  // {id: 1, name: "家电", goods: Array(2)}
getWaresId(list, 11)  // {id: 11, name: "冰箱"}

// 用递归求1-100的和
function recursion (start, end) {
  if (start === end) {
    return start
  }
  return start + recursion(start + 1, end)
}
recursion(1, 100)  // 5050

// 递归求和
function recursion (number) {
  if (number === 1) {
    return 1
  }
  // recursion(100) = recursion(99) + 100
  // recursion(number) = recursion(number - 1) + number
  return recursion(number - 1) + number
}
recursion(100)  // 5050

function recursion (item, props) {
  // 当数组长度等于1的时候，拿出数组的元素作为对象的属性名，再取出对象的属性值
  if (props.length === 1) {
    return item[props[0]]
  } else {
    // item[props[0]] 取出对象中的嵌套对象，props.slice(1)删除数组的第一个元素
    return recursion(item[props[0]], props.slice(1))
  }
}
const value = recursion({
  a: {
    b: {
      name: 'Mary'
    }
  }
}, ['a', 'b', 'name'])
console.log(value)

// 有一堆桃子不知道数目，猴子第一天吃掉一半，觉得不过瘾，又多吃了一只，
// 第二天照此办法，吃掉桃子的一半加一只，天天如此，到第num(num <= 10)天早上，
// 猴子发现只剩一只桃子了，问这堆桃子原来有多少只？(思路: n为还剩n天吃完的桃子数)
function peache (number) {
  if (number === 1) {
    return 1
  }
  // peach(10) / 2 - 1 = peach(9)
  // peach(10) = (peach(9) + 1) * 2
  // peach(number) = (peach(number - 1) + 1) * 2
  return (peache(number - 1) + 1) * 2
}
peache(4)  // 22

// 用递归方式求1-100的和
function add (start, end) {
  if (end + 1 > 100) {
    return start + end
  }
  return add(start + end, end + 1)
}
add(0, 0)  // 5050

// 求 2,4,6,8,10… 第n项与前n项之和
function recursion (number) {
  if (number === 0) {
    return 2
  }
  return recursion(number - 1) + 2
}
function sum (number) {
  if (number === 0) {
    return 2
  }
  return recursion(number) + sum(number - 1)
}
sum(100)

// 用递归方式求1-100的和
function sum (number, count) {
  number += count
  count++
  return count > 100 ? number : sum(number, count)
}
sum(0, 1)  // 5050

// 用递归求多个参数相加的和
function sum (...args) {
  if (args.length === 0) {
    return 0
  }
  return args.pop() + sum(...args)
}
sum(1, 2, 4, 6, 5, 8)  // 26

// 用递归求数组的和
function recursion (arrays) {
  if (arrays.length === 0) {
    return 0
  }
  return arrays[0] + recursion(arrays.slice(1))
}
recursion([1, 2, 3, 4])  // 10

// 用递归打印倒三角
function star (numbers) {
  if (numbers === 0) {
    return ''
  }
  // document.write('*'.repeat(numbers) + '<br/>') || star(--numbers)
  document.write('*'.repeat(numbers) + '<br/>')
  star(numbers - 1)
}
star(5)

// 首先确定如何求最大公约数，例如 24,78，算法如下：
// 78 % 24 = 6 大数对小数取余
// 24 % 6 = 0 小数对上次的余数再取余，重复这个过程，直到余数为0
// 余数为0时，此时用来取余的小数（这里是6）就是最大公约数
// 使用递归求最大公约数
function commonDivisor (min, max) {
  // 如果能整除，小数就是最大公约数
  return max % min === 0 ? min : commonDivisor(min, max % min)
}
commonDivisor(24, 78)  // 6

// 使用递归求最小公倍数
function commonMultiple (a, b) {
  return (a * b) / commonDivisor(a, b)
}
commonMultiple(2, 4)  // 4

// 返回公约数的数组集合
function recursion (a, number = 1, b = []) {
  if (a % number === 0) {
    b.push(number)
  }
  number++
  if (number > a) {
    return b
  }
  return recursion(a, number, b)
}
recursion(1)  // [1]
recursion(2)  // [1, 2]
recursion(3)  // [1, 3]
recursion(4)  // [1, 2, 4]

function recursion (number, total = 1) {
  if (number === 0) {
    return total
  }
  return recursion(number - 1, number * total)
}
recursion(0, 1)  // 1
recursion(1, 1)  // 1
recursion(2, 1)  // 1
recursion(3, 1)  // 6

// 递归求阶乘
const objects = {
  factorial (number) {
    return number === 1 ? 1 : number * objects.factorial(number - 1)
  }
}
objects.factorial(5)  // 120

function factorial (number) {
  if (number === 1) {
    return 1
  }
  return number % 2 === 0 ? number * factorial(number - 1) : factorial(number - 1)
}
factorial(1)  // 1
factorial(2)  // 2
factorial(3)  // 2
factorial(4)  // 8
factorial(5)  // 8

// 用递归找出多维数组中元素的个数
function elementCount (arrays) {
  // 计算元素个数的和
  let sum = 0
  for (let i = 0; i < arrays.length; i++) {
    // 判断arr[i]是不是数组
    if (arrays[i] instanceof Array) {
      // 多维数组元素个数
      sum += elementCount(arrays[i])
    } else {
      // 一维数组元素个数
      sum += 1
    }
  }
  return sum
}
elementCount([1, 2, 3, 4, [56, 45, [37]]])  // 7

// 用递归找出多维数组中元素的个数
function moreCount (array) {
  let sum = 0
  array.forEach(item => Array.isArray(item) ? sum += moreCount(item) : sum += 1)
  return sum
}
moreCount([1, 2, 3, 4, [56, 45]])  // 6

// 已知千锋邮箱的用户名只能由数字、字母、下划线组成，域名为@1000phone.com，
// 判断一个字符串是否是千锋邮箱，是返回true，不是返回false
// mail@1000phone.com  是
// $mail@1000phone.com  不是
// mail@1000phone.comp  不是
function isQianFengEmail (email) {
  // 查找@符号的位置
  const index = email.indexOf('@')
  // 如果字符串中没有@符号，说明是个错误的邮箱，直接返回假
  if (index === -1) {
    return false
    // 否则就是有@符号
  } else {
    // 通过substring()方法查找@符号结束的位置
    const endString = email.substring(index)
    if (endString !== '@1000phone.com') {
      return false
      // 判断用户名是否符合数字、字母、下划线
    } else {
      // 从0开始提取，@符号往前的位置，但不包括@符号
      const username = email.substring(0, index)
      const isAccordWith = true  // 假设都符合
      for (let i = 0; i < username.length; i++) {
        // 如果其中有一个singleLetter为假的话，说明就有非数字、字母、下划线，直接设置isAccordWith为假
        // 如果在整个for循环过程中，其中if语句一次都没执行，说明其中没有任何一个字符它是非数字、字母、下划线
        if (!singleLetter(username[i])) {
          isAccordWith = false
          break
        }
      }
      return isAccordWith
    }
  }
}
isQianFengEmail('mail@1000phone.com')  // true
isQianFengEmail('$mail@1000phone.com')  // false
isQianFengEmail('mail@1000phone.comp')  // false
// 判断单个字符是否符合数字、字母、下划线
function singleLetter (char) {
  if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char >= '0' && char <= '9' || char === '_') {
    return true
  } else {
    return false
  }
}

// 按指定长度切割，返回一个新的数组集合，比如按照3的倍数切割，返回结果为每三个一组
function divisionArray (proport, data) {
  let count = 0
  let newArray = []
  for (let i = 0; i < data.length; i++) {
    // 如果按指定的比例切分，并且i不等于0  
    if (i % proport === 0 && i !== 0) {
      newArray.push(data.slice(count, i))
      count = i
    }
    // 如果i + 1等于数组的长度
    if (i + 1 === data.length) {
      newArray.push(data.slice(count, i + 1))
    }
  }
  return newArray
}
let lists = [
  { name: '小赵', value: '12' },
  { name: '小钱', value: '12' },
  { name: '小孙', value: '12' },
  { name: '小李', value: '12' },
  { name: '小周', value: '12' },
  { name: '小吴', value: '12' },
  { name: '小郑', value: '12' },
  { name: '小王', value: '12' },
  { name: '小付', value: '12' },
  { name: '小张', value: '12' }
]
divisionArray(3, lists)

const china = {
  nation: '中国',
  birthPlaces: {
    name: '湖北'
  }
}
// 深拷贝，要想达到深拷贝就需要用递归
function deepCopy (origin, target) {
  for (let key in origin) {
    if (typeof origin[key] === 'object') {
      target[key] = origin[key]
      deepCopy(origin[key], target[key])
    } else {
      target[key] = origin[key]
    }
  }
}
let newChina = {}
deepCopy(china, newChina)
console.log(newChina)

// 对象浅拷贝
function shallowCopy (original) {
  let target = {}
  for (let key in original) {
    target[key] = original[key]
  }
  return target
}
let objects = {
  a: {
    b: 10
  }
}
shallowCopy(objects)

Math.max.apply(Math, [5, 10, 50])  // 最大数50
Math.max(...[5, 10, 50])  // 最大数50

// 数组合并
function mergeArray (first, second) {
  first = first.concat(second)
  let arrays = []
  for (let i = 0; i < first.length; i++) {
    // indexOf找出数组中某一元素的下标，没找到就返回-1
    if (arrays.indexOf(first[i]) < 0) {
      arrays.push(first[i])
    }
  }
  return arrays.sort((a, b) => a - b)
}
mergeArray([1, 1, 2, 3, 6, 9, 5, 5, 4], [1, 2, 5, 4, 9, 7, 7, 8, 8])  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 数组合并
function uniqueArray (first, second) {
  first.push(...second)
  let arrays = Array.from(new Set(first))
  return arrays.sort((a, b) => a - b)
}
uniqueArray([1, 1, 2, 3, 6, 9, 5, 5, 4], [1, 2, 5, 4, 9, 7, 7, 8, 8])  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 数组合并
let a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A', 'B', 'C', 'D'].map(item => item + 3)
console.log(a2)  // ["A3", "B3", "C3", "D3"]
let a3 = [...a1, ...a2].sort().map((item) => {
  if (item.includes('3')) {
    return item.split('')[0]
  }
  return item
})
console.log(a3)  // ["A1", "A2", "A", "B1", "B2", "B", "C1", "C2", "C", "D1", "D2", "D"]

// 使用迭代的方式实现 flatten 函数
const flatten = function (arrays) {
  while (arrays.some(item => Array.isArray(item))) {
    arrays = [].concat(...arrays)
  }
  return arrays
}
let list = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
flatten(list)  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// 实现一个函数clone
Object.prototype.clone = function () {
  let data = this.constructor === Array ? [] : {}
  for (let key in this) {
    data[key] = typeof this[key] === 'object' ? this[key].clone() : this[key]
  }
  return data
}

// 求1-100的和
function getResult (start, end) {
  let sum = 0
  if (start > end) {
    return false
  }
  for (let i = start; i <= end; i++) {
    sum += i
  }
  return sum
}
getResult(1, 100)  // 5050

// 使用原型属性给数组排序
function arraySort () {
  return Array.prototype.slice.call(arguments).sort((a, b) => a - b)
}
arraySort(10, -2, 101, -4, 50)  // [-4, -2, 10, 50, 101]

// 数组排序
function arraysSort (...list) {
  return list.sort((a, b) => a - b)
}
arraysSort(10, -2, 101, -4, 50)  // [-4, -2, 10, 50, 101]

// 数组快速排序
function quickSort (array) {
  // 找基准数，并且将比基准数小的全部放到左边(左数组)
  // 大于等于基准数的全部放到右边(右数组)
  let baseNumber = array[0]  // 基准数
  let leftArray = []  // 左数组
  let rightArray = []  // 右数组
  for (let i = 1; i < array.length; i++) {
    // 比基准数小的放在左数组，否则放在右数组
    if (array[i] < baseNumber) {
      leftArray.push(array[i])
    } else {
      rightArray.push(array[i])
    }
  }
  // 对左右数组分别进行快速排序，返回排序好的左右数组
  // 条件：就是数组中的元素大于等于2个
  if (leftArray.length >= 2) {
    leftArray = quickSort(leftArray)
  }
  if (rightArray.length >= 2) {
    rightArray = quickSort(rightArray)
  }
  // 合并排序好之后的左数组、基准数、右数组，并且返回
  return leftArray.concat(baseNumber, rightArray)
}
quickSort([33, 12, 44, 6, 36])  // [6, 12, 33, 36, 44]

// 一维数组转换成多维数组
function arrayTransform (arrays, numbers) {
  const newArrays = []
  arrays.forEach((item, index) => {
    // 计算多维数组的下标
    const page = Math.floor(index / numbers)
    // 如果数组中有元素，就把数组清空 
    if (!newArrays[page]) {
      newArrays[page] = []
    }
    newArrays[page].push(item)
  })
  return newArrays
}
arrayTransform([1, 2, 3, 4, 5, 6, 7, 8], 3)  // [[1, 2, 3], [4, 5, 6], [7, 8]]

// 一维数组转换成多维数组
function changeArray (number, array) {
  let newArray = []
  // 每行显示的数组个数
  let count = array.length % number === 0 ? array.length / number : Math.ceil(array.length / number)
  for (let i = 0; i < count; i++) {
    // slice()方法返回一个从开始到结束（不包括结束）
    // 选择数组的一部分浅拷贝到一个新数组对象且原数组不会被修改
    newArray.push(array.slice(i * number, i * number + number))
  }
  return newArray
}
changeArray(3, [1, 2, 3, 4, 5, 6, 7, 8])  // 假设每行显示3个 [[1, 2, 3], [4, 5, 6], [7, 8]]

// 将数组中大于10的数存进数组里
function moreThanTen (array) {
  let newArray = []
  let j = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      // 新数组索引应该从0开始，依次递增
      newArray[j] = array[i]
      j++
    }
  }
  return newArray
}
moreThanTen([2, 0, 6, 1, 77, 0, 52, 0, 25, 7])  // [77, 52, 25]

// 将数组中大于10的数存进数组里
function moreThanTen (array) {
  const newArray = []
  // 刚开始newArray.length就是0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      // 新数组索引应该从0开始，依次递增
      newArray[newArray.length] = array[i]
    }
  }
  return newArray
}
moreThanTen([2, 0, 6, 1, 77, 0, 52, 0, 25, 7])  // [77, 52, 25]

// 去除数组中为0的数
function removeZero (array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      // 数组名+数组索引
      newArray[newArray.length] = array[i]
    }
  }
  return newArray
}
removeZero([2, 0, 6, 1, 77, 0, 52, 0, 25, 7])  // [2, 6, 1, 77, 52, 25, 7]

function getResult () {
  let arrays = Array.from(arguments)
  let sum = 0
  arrays.forEach(value => sum += value)
  return sum
}
getResult(1, 2, 3, 4, 5, 6, 7, 8, 9)  // 45

function rectangle (row, col) {
  let string = ''
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      string += '☆'
    }
    string += '\n'
  }
  return string
}
rectangle(8, 9)

function rightTriangle (row, col) {
  let string = ''
  for (let i = 1; i <= row; i++) {
    for (let j = i; j <= col; j++) {
      string += '☆'
    }
    string += '\n'
  }
  return string
}
rightTriangle(9, 9)

function rightTriangle (row) {
  let string = ''
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      string += '☆'
    }
    string += '\n'
  }
  return string
}
rightTriangle(9)

// 用while打印直角三角形
function triangle (num) {
  let outer = 0
  while (outer < num) {
    outer++
    let inner = 0
    while (inner < outer) {
      inner++
      document.write('*')
    }
    document.write('<br/>')
  }
}
triangle(5)

// 用do...while打印直角三角形
function triangles (num) {
  let start = 0
  do {
    let i = 0
    do {
      i++
      document.write('*')
    } while (i < start)
    start++
    document.write('<br/>')
  } while (start < num)
}
triangles(5)

// 第一象限直角三角形
function firstQuadrant (numbers) {
  let star = ''
  for (let i = 0; i < numbers; i++) {
    for (let j = 0; j < i; j++) {
      star += ' '
    }
    for (let j = i; j < numbers; j++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
firstQuadrant(10)

// 第二象限直角三角形 
function betaQuadrant (numbers) {
  let star = ''
  for (let i = 0; i < numbers; i++) {
    for (let j = i; j < numbers; j++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
betaQuadrant(10)

// 第三象限直角三角形 
function thirdQuadrant (numbers) {
  let star = ''
  for (let i = 0; i < numbers; i++) {
    for (let j = 0; j < i; j++) {
      star += '*'
    }
    for (let j = i; j < numbers; j++) {
      star += ' '
    }
    star += '\n'
  }
  return star
}
thirdQuadrant(10)

// 第四象限直角三角形 
function deltaQuadrant (numbers) {
  let star = ''
  for (let i = 0; i < numbers; i++) {
    for (let j = 0; j < numbers - i; j++) {
      star += ' '
    }
    for (let j = numbers - i - 1; j < numbers; j++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
deltaQuadrant(10)

// 等腰三角形(正)
function inverted (numbers) {
  let star = ''
  for (let i = 1; i <= numbers; i++) {
    // 输出空格
    for (let j = i; j <= numbers; j++) {
      star += ' '
    }
    // 输出星号
    for (let k = 1; k <= i; k++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
inverted(9)

// 等腰三角形(倒)
function isosceles (numbers) {
  let star = ''
  for (let i = 1; i <= numbers; i++) {
    for (let j = 1; j <= i; j++) {
      star += ' '
    }
    for (let k = i; k <= numbers; k++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
isosceles(9)

// 金字塔
function pyramid (numbers) {
  let star = ''
  for (let i = 1; i <= numbers; i++) {
    // 判断是不是奇数
    if (i % 2) {
      // 输出空格
      for (let k = i; k <= numbers; k++) {
        star += ' '
      }
      // 输出星号
      for (let j = 1; j <= i; j++) {
        star += '*'
      }
      star += '\n'
    }
  }
  return star
}
pyramid(9)

// 正的等腰三角形
function triangle (numbers) {
  let star = ''
  // i控制行数
  for (let i = 1; i <= numbers; i++) {
    // j控制前面空格数，空格数等于总行数减当前行数
    for (let j = 1; j <= numbers - i; j++) {
      star += ' '
    }
    // k控制每行星星个数，星星个数等于两倍当前行数减一，也就是2 * i - 1
    for (let k = 1; k <= 2 * i - 1; k++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
triangle(9)

// 倒的等腰三角形
function invertedTriangle (numbers) {
  let star = ''
  for (let i = numbers; i > 0; i--) {
    for (let k = 1; k <= numbers - i; k++) {
      star += ' '
    }
    for (let j = 0; j < i * 2 - 1; j++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
invertedTriangle(9)

// 梯形
function trapezoid (numbers) {
  let star = ''
  for (let i = 1; i <= numbers; i++) {
    for (let j = numbers - 1; j >= i; j--) {
      star += ' '
    }
    for (let k = 1; k <= 2 * i; k++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
trapezoid(5)

// 实心菱形
function solidDiamond (numbers) {
  let star = ''
  for (let i = 0; i < numbers; i++) {
    for (let j = numbers; j > i; j--) {
      star += ' '
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      star += '*'
    }
    star += '\n'
  }
  for (let i = numbers - 1; i > 0; i--) {
    for (let j = numbers; j >= i; j--) {
      star += ' '
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      star += '*'
    }
    star += '\n'
  }
  return star
}
solidDiamond(6)

// 空心菱形
function hollowDiamond (numbers) {
  let star = ''
  for (let i = 0; i < numbers; i++) {
    for (let j = numbers; j > i; j--) {
      star += ' '
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        star += '*'
      } else {
        star += ' '
      }
    }
    star += '\n'
  }
  for (let i = numbers - 2; i > 0; i--) {
    for (let j = numbers - 1; j >= i; j--) {
      star += ' '
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        star += '*'
      } else {
        star += ' '
      }
    }
    star += '\n'
  }
  return star
}
hollowDiamond(6)

// 实心菱形
function blackDiamond (row) {
  for (let i = 1; i <= 2 * row - 1; i++) {
    // 空格的个数
    let blanks = Math.abs(row - i)
    // 星号个数，2乘以row减1是一个矩形，减去两边空格的个数，剩下中间的就是一个菱形  
    let stars = 2 * row - 1 - 2 * blanks
    for (let j = 1; j <= blanks; j++) {
      document.write("&ensp;")
    }
    for (let k = 1; k <= stars; k++) {
      document.write("*")
    }
    document.write("<br/>")
  }
}
blackDiamond(6)

function mixedStatement (start, end) {
  let sum = 0
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      continue
    }
    sum += i
    if (sum > 2000) {
      break
    }
  }
  return sum
}
mixedStatement(1, 100)  // 2028

function getScore (data) {
  let i = 0
  let label = ''
  while (i < data.length) {
    if (data[i] < 60) {
      label = `成绩${data[i]}不及格，不用循环了`
      break
    }
    label = `成绩：${data[i]}及格了，继续循环`
    count++
  }
  return label
}
getScore([70, 80, 66, 90, 50, 100, 89])  // "成绩50不及格，不用循环了"
getScore([70, 80, 66, 90, 60, 100, 89])  // "成绩89及格了，继续循环"

// 输入年、月、日计算某一天是该年的第几天(周)
function computeWhatWeekDay (year, month, day) {
  let sum = 0  // 记录总天数
  switch (month) {
    case 12:
      sum += 30
    case 11:
      sum += 31
    case 10:
      sum += 30
    case 9:
      sum += 31
    case 8:
      sum += 31
    case 7:
      sum += 30
    case 6:
      sum += 31
    case 5:
      sum += 30
    case 4:
      sum += 31
    case 3:
      sum += 28
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        sum += 1
      }
    case 2:
      sum += 31
    case 1:
      sum += day
    default:
      break
  }
  // const week = parseInt(sum / 7) + 1
  const week = Math.ceil(sum / 7)
  return `这是第${sum}天，这是第${week}周`
}
computeWhatWeekDay(2010, 11, 21)  // 这是第325天，这是第47周

const arrays = ['呵呵', '啦啦', '哒哒', '哈哈', '哈哈', '嘻嘻']
arrays.indexOf('哈哈')  // 3
arrays.lastIndexOf('哈哈')  // 4

const strings = 'Hello Tony'
strings.substr(1, 4)  // ello
strings.substring(1, 4)  // ell

const arrays = ['张三', '李四', '王五', '赵六']
console.log(arrays.slice(0, 2))  // ["张三", "李四"]
arrays.splice(1, 1, '韩梅梅')
console.log(arrays)  // ["张三", "韩梅梅", "王五", "赵六"]
arrays.splice(1, 0, '韩梅梅')
console.log(arrays)  // ["张三", "韩梅梅", "李四", "王五", "赵六"]

const arrays = [1, 4, 3, 9]
arrays.includes(4)  // true
arrays.includes(4, 2)  // false 从2的位置开始查找, 所以没有找到4
arrays.includes(5)  // false

const objects = {
  name: '韩梅梅',
  age: 20
}
this.$set(objects, 'sex', '女')
console.log(objects)  // { name: "韩梅梅", age: 20, sex: "女" }
const person = {
  sex: '女'
}
console.log(Object.assign(objects, person))  // { name: "韩梅梅", age: 20, sex: "女" }
const human = {
  gender: '女'
}
console.log({ ...objects, ...human })

function mergeObject (oldObject, newObject) {
  // 使用for...in循环遍历对象的属性时，原型链上的所有属性都将被访问会避免原型对象扩展带来的干扰
  for (const key in newObject) {
    // 此处hasOwnProperty是判断自有属性
    if (newObject.hasOwnProperty(key)) {
      oldObject[key] = newObject[key]
    }
  }
  return oldObject
}
mergeObject({ a: 1 }, { b: 2, c: 3 })  // {a: 1, b: 2, c: 3}

let students = [
  { name: '小梅', gender: '女', age: 20 },
  { name: '小红', gender: '女', age: 22 }
]
function findControl () {
  return students.find(item => item.name === '小梅')  // { name: "小梅", gender: "女", age: 20 }
  // return students.findIndex(item => item.name === '小梅')  // 0
}
findControl()

const computers = [
  { name: "Apple", ram: 8 },
  { name: "IBM", ram: 4 },
  { name: "Acer", ram: 32 }
]
const bool1 = computers.every(value => value.ram > 16)
console.log(bool1)  // false
const bool2 = computers.some(value => value.ram > 16)
console.log(bool2)  // true

// 数组转换
function arrayTrans (arrays) {
  return arrays.reduce((previou, current) => previou.concat(current))
}
arrayTrans([[1, 2], [3, 4], [5, 6]])  // [1, 2, 3, 4, 5, 6]

// 实现函数查找子字符串出现的次数
function countOfString (sup, sub) {
  let array = sup.split(sub)
  return array.length - 1
}
countOfString('abcabcabc', 'abc')  // 3

// 计算数组中每个元素出现的次数
function appearCount (arrays) {
  let objects = {}
  arrays.forEach(item => objects[item] ? objects[item] += 1 : objects[item] = 1)
  return objects
}
appearCount(['tom', 'jim', 'jack', 'tom', 'jack'])  // {tom: 2, jim: 1, jack: 2}

// 计算数组中每个元素出现的次数
function findElement (names) {
  return names.reduce((value, index) => {
    if (index in value) {
      value[index] += 1
    } else {
      value[index] = 1
    }
    return value
  }, {})
}
findElement(['tom', 'jim', 'jack', 'tom', 'jack'])  // {tom: 2, jim: 1, jack: 2}

// 统计元素出现的次数
function elementCount (list, item) {
  return list.reduce((total, current) => {
    // 判断1是否等于当前的值，如果等于就让它增加1，否则就等于0
    total += item === current ? 1 : 0
    // 最后再把总计返回出去
    return total
  })
}
elementCount([1, 2, 3, 1, 1], 1)  // 3

// 取出3个奇数
function takeOutThreeOdd (n) {
  let count = 0
  let array = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      if (count === 3) {
        break
      }
      array.push(i)
      count++
    }
  }
  return array
}
takeOutThreeOdd(10)  // [1, 3, 5]

// 使用arguments求和
function multipleParams () {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    let item = Number(arguments[i])
    isNaN(item) ? null : sum += item
  }
  return sum
}
multipleParams(10, 20, 30)  // 60

function multiples () {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    let item = Number(arguments[i])
    if (isNaN(item)) {
      continue
    }
    sum += item
  }
  return sum
}
multiples(10, 20, 30)  // 60

// 函数多参数求和
const multiparam = (...list) => list.reduce((item, current) => {
  current = Number(current)
  isNaN(current) ? current = 0 : null
  return item + current
})
multiparam(10, 20, 30, '40', 'a')  // 100

// 求1-100能被3和5整除的所有数的和
function divisible (start, end) {
  let total = 0
  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      total += i
    }
  }
  return total
}
divisible(1, 100)  // 315

// 使用arguments对象查找数组最大数和最小数
function findMinMax () {
  let min = arguments[0]  // 将传入的第一个参数赋值给min
  let max = arguments[0]  // 将传入的第一个参数赋值给max
  if (arguments.length < 2) {  // 如果传入两个参数时，该参数就是最大值和最小值
    return min && max
  }
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {  // 取数组中的最小值并赋值给min
      min = arguments[i]
    }
    if (arguments[i] > max) {  // 取数组中的最大值并赋值给max
      max = arguments[i]
    }
  }
  return `最小数: ${min} 最大数: ${max}`
}
findMinMax(1, 123, -500, -1150, 440, 88)  // 最小数: -1150 最大数: 440

function foundMinMax (arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return `最小数是: ${min} 最大数是: ${max}`
}
foundMinMax([10, 123, 500, -115, 44, 88])  // 最小数是: -115 最大数是: 500

// 将一个数位置颠倒，并将每一位取出相加求和
function fullFourDigits (digits) {
  let d1 = digits % 10
  let d2 = digits % 100
  let d3 = digits % 1000
  d2 = parseInt(d2 / 10)
  d3 = parseInt(d3 / 100)
  let d4 = parseInt(digits / 1000)
  return `得到的数是: ${d1}${d2}${d3}${d4}，总和为: ${d1 + d2 + d3 + d4}`
}
fullFourDigits(1539)  // "得到的数是: 9351，总和为: 18"

// 0x10 十六进制数字  070 八进制数字  0b10 二进制数字
// parseInt(a, 10) 可以传递第二个参数，来指定数字的进制
// 将其他的数据类型转换为Boolean
// 除了0和NaN，其余都是true(数字转布尔)
// 除了空字符串，其余都是true(字符串转布尔)
// null和undefined都会转换为false
// 对象也会转换为true
// a++或a--的值等于原变量的值(自增前的值)
// ++a或--a的值等于原变量的新值(自增后的值)

// 从1000到5000元需要存多少年(年利率1.05)
function rate (principal, deposit) {
  let count = 0
  while (principal < deposit) {
    principal *= 1.05
    count++
  }
  return `一共需要${count}年`
}
rate(1000, 5000)  // 一共需要33年

// 打印1-100之间所有7的倍数的数字个数以及总和
function sevenMultipleSum (start, end) {
  let sum = 0
  let count = 0
  for (let i = start; i <= end; i++) {
    // 判断i是不是7的倍数
    if (i % 7 === 0) {
      sum += i
      // 计数器累加
      count++
    }
  }
  return `总和${sum}，7的倍数的个数有${count}个`
}
sevenMultipleSum(1, 100)  // 总和735，7的倍数的数有14个

// 打印1-100之间所有7的倍数的数字个数以及总和
function sevenMultiple (n) {
  let i = 1
  let count = 0
  let sum = 0
  while (i <= n) {
    if (i % 7 === 0) {
      sum += i
      count++
    }
    i++
  }
  return `总和${sum}，7的倍数的个数有${count}个`
}
sevenMultiple(100)  // "总和735，7的倍数的数有14个"

// 在页面中接受一个用户输入的数字，并判断该数是否是质数
// 质数：只能被1和它自身整除的数，1不是质数也不是合数，质数必须大于1的自然数
function isPrimer (numbers) {
  if (numbers <= 1) {
    return '该值不合法!'
  } else {
    // 创建一个变量来保存当前数的状态
    let flag = true
    // 获取2到numbers之间的数
    for (let i = 2; i < numbers; i++) {
      // 判断numbers是否能被i整除
      if (numbers % i === 0) {
        // 如果numbers能被i整除，则numbers不是质数
        flag = false
      }
    }
    return flag ? `${numbers}是质数` : '不是质数'
  }
}
isPrimer(4)  // 不是质数
isPrimer(5)  // 是质数

// 输出100以内的所有质数
function allPrimeNumber (start, end) {
  let array = []
  for (let i = start; i <= end; i++) {
    // 创建一个布尔值，用来保存结果，默认i是质数
    let flag = true
    // 获取到2-i之间的所有的数
    for (let j = start; j <= Math.sqrt(i); j++) {
      // 判断i是否能被j整除
      if (i % j === 0) {
        // 如果进入判断则证明i不是质数，修改flag值为false
        flag = false
        break
      }
    }
    // 如果是质数，就把i的值存进数组中
    if (flag) {
      array.push(i)
    }
  }
  // 将新数组返回出去
  return array
}
allPrimeNumber(2, 100)  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// 输出100以内的所有质数
function allPrime (start, end) {
  let array = []
  for (let i = start; i <= end; i++) {
    // 创建一个布尔值，用来保存结果，默认i是质数
    let flag = true
    for (let j = start; j < i; j++) {
      // 判断i是否能被j整除
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag) {
      array[array.length] = i
    }
  }
  return array
}
allPrime(2, 100)  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// 鸡兔同笼，参数chicken表示鸡的只数，参数rabbit表示兔的只数
function chickenAndRabbitSameCage (chicken, rabbit) {
  for (let i = 0; i <= chicken; i++) {
    for (let j = 0; j <= rabbit; j++) {
      if (i + j === chicken && 2 * i + 4 * j === rabbit) {
        return `鸡有${i}只，兔有${j}只`
      }
    }
  }
}
chickenAndRabbitSameCage(35, 94)  // "鸡有23只，兔有12只"

// 鸡兔同笼，参数chicken表示鸡的只数，参数rabbit表示兔的只数
function chickenAndRabbit (chicken, rabbit) {
  for (let i = 0; i < chicken; i++) {
    let j = chicken - i
    if (2 * i + 4 * j === rabbit) {
      return `鸡有${i}只，兔有${j}只`
    }
  }
}
chickenAndRabbit(35, 94)  // "鸡有23只，兔有12只"

function getArrayThreeRandom (array, count) {
  let newArray = []
  for (let i = 0; i < count; i++) {
    // 随机选择一项的下标，数组的下标为0~array.length - 1
    const index = Math.floor(Math.random() * array.length)
    // 把这项推入newArray数组
    newArray.push(array[index])
    // 删除这项，防止重复被随机到
    array.splice(index, 1)
  }
  return newArray
}
getArrayThreeRandom([3, 6, 10, 5, 8, 9], 3)  // 随机输出一个三个元素的数组

// 求圆的面积
function getCircularArea (r) {
  return 3.14 * r * r
}
getCircularArea(10)  // 314

// 求圆的周长
function getCircularGirth (r) {
  r = r || 0
  return 2 * Math.PI * r
}
getCircularGirth(5)  // 31.41592653589793

// 求两个数中的最大值
function getTwoNumberMax (x, y) {
  x = x || 0
  y = y || 0
  return x > y ? x : y
}
getTwoNumberMax(18, 9)  // 18

// 数组去重排序  
function arrayRemoveRepeat (array) {
  // 定义一个临时数组
  let temp = []
  for (let i = 0; i < array.length; i++) {
    // 如果当前数组的array[i]已经保存到临时数组中，那么就跳过
    if (temp.indexOf(array[i]) < 0) {
      temp.push(array[i])
    }
  }
  return temp.sort((a, b) => a - b)
}
arrayRemoveRepeat([1, 2, 2, 2, 2, 5, 3, 2, 9, 5, 6, 3])  // [1, 2, 3, 5, 6, 9]

// 数组去重排序  
function arrayRemove (array) {
  let newArray = []
  array.forEach((item, index, list) => list.indexOf(item) === index ? newArray.push(item) : null)
  return newArray.sort((a, b) => a - b)
}
arrayRemove([1, 2, 2, 2, 2, 5, 3, 2, 9, 5, 6, 3])  // [1, 2, 3, 5, 6, 9]

// 获取数组当前元素的下标
function findElementIndex (arrays, numbers) {
  let i
  arrays.forEach((item, index) => {
    if (item === numbers) {
      i = index
    }
  })
  return i
}
findElementIndex([1, 2, 3, 4], 3)  // 2

// 截取字符串中的数字
function interceptNumbers (strings) {
  let numbers = [...strings].filter(item => !Number.isNaN(parseInt(item)))
  return numbers.join('')
}
interceptNumbers('houdunren2200hdcms9988')  // "22009988"

// 用正则表达式匹配所有字母
function matchLetter (strings) {
  return strings.match(/[a-z]/gi)
}
matchLetter('1a2b3c4d5e6f7G8H')  // ["a", "b", "c", "d", "e", "f", "G", "H"]

// 用正则表达式验证手机号的合法性
function verifyMobile (strings) {
  return /^1[3-9][0-9]{9}$/.test(strings)
}
verifyMobile('13067890123')  // true

// 用正则表达式验证座机号
function verifyLandLine (strings) {
  return /^\d{3,4}-\d{7,8}/.test(strings)
}
verifyLandLine('010-12345678')  // true
verifyLandLine('0530-1234567')  // true

// 用正则表达式验证电子邮件的合法性
function verifyEmail (strings) {
  return /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/.test(strings)
}
verifyEmail('abc@abc.com.123')    // false
verifyEmail('abc.hello@163.com')  // true

// 交换两个数的位置
function changePosition (x, y) {
  x = x + y
  y = x - y
  x = x - y
  return x + ' ' + y
}
changePosition(1, 2)  // 2 1

// 基本数据类型的判断
console.log(typeof (null))  // object
console.log(typeof (undefined))  // undefined
console.log(typeof (a))  // undefined
console.log(Number(undefined))  // NaN
console.log(Number(null))  // 0
console.log(isNaN(null))  // false
console.log(isNaN(undefined))  // true
console.log(isNaN('100'))  // false
console.log(undefined == null)  // true
console.log(undefined === null)  // false
console.log(Number([1]))  // 1
console.log(parseInt('hello 123 world'))  // NaN
console.log(Boolean(Number('')))  // false
console.log(!isNaN(Number(null)))  // true
console.log(Boolean('parseInt([])'))  // true
console.log(typeof !(null))  // boolean
console.log(typeof parseInt(null))  // number
console.log(!typeof parseFloat('0'))  // false

// 计算2的numbers次幂，numbers为自然数
function cube (numbers) {
  let product = 1
  for (let i = 0; i < numbers; i++) {
    product *= 2
  }
  return product
}
cube(2)  // 4

// 获取字符串的字节长度
function getByteLength (target) {
  let count = target.length
  for (let i = 0; i < count; i++) {
    if (target.charCodeAt(i) > 255) {
      count++
    }
  }
  return count
}
getByteLength('皮卡丘abc')  // 9

// 获取字符串的unicode编码长度
function getUnicodeLength (strings) {
  let count = 0
  for (let i = 0; i < strings.length; i++) {
    strings.charCodeAt(i) > 255 ? count += 2 : count++
  }
  return count
}
getUnicodeLength('abcd皮')  // 6

// 求100-200之间所有奇数的和
function getOddSum (start, end) {
  let sum = 0
  while (start <= end) {
    if (start % 2 === 0) {
      // start++防止程序发生死循环
      start++
      continue
    }
    sum += start
    start++
  }
  return sum
}
getOddSum(100, 200)  // 7500

// 求100-200之间所有奇数的和
function oddSum (start, end) {
  let sum = 0
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      continue
    }
    sum += i
  }
  return sum
}
oddSum(100, 200)  // 7500

// 求100-200之间所有素数的和
function primeNumber (start, end) {
  let sum = 0
  // 第一次循环
  for (let i = start; i <= end; i++) {
    // 设置一个标记
    let flag = true
    // 第二次循环
    for (let j = 2; j < i; j++) {
      // 不满足条件改变标记
      if (i % j === 0) {
        flag = false
        // 跳出循环
        break
      }
    }
    // 满足条件，也就是flag为true时
    if (flag) {
      sum += i
    }
  }
  return sum
}
primeNumber(100, 200)  // 3167

// 求100-200之间所有素数的和
function primeNumber (start, end) {
  let sum = 0
  // 第一次循环
  for (let i = start; i <= end; i++) {
    // 初始值为0
    let count = 0
    // 第二次循环
    for (j = 2; j < i; j++) {
      // 不满足条件加1
      if (i % j === 0) {
        count++
      }
    }
    if (count === 0) {
      sum += i
    }
  }
  return sum
}
primeNumber(100, 200)  // 3167

function findMaxNumber (array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    max = max < array[i] ? array[i] : max
  }
  return max
}
findMaxNumber([1, 2, 5, 3, 7, 4])  // 7

function getCaption (url, parameter) {
  const index = url.lastIndexOf(parameter)
  // 索引加1这时它会截取问号后面的数字，不加1它会从问号开始截取（包括问号）
  return url.substring(index + 1, url.length)
}
getCaption('http://www.baidu.com?123', '?')  // 123

// async返回的是一个promise对象
// await右侧表达式为promise，得到的结果就是promise成功的value
// await右侧表达式不是promise，得到的结果就是它本身
// await必须写在async函数中，但async函数中可以没有await
// 如果await的promise失败了，就会抛出异常，需要通过try...catch来捕获处理

// 封装axios
import axios from 'axios'
const ERROR_OK = 0
function request (url) {
  return function (params) {
    return axios.get(url, { params }).then(response => {
      const { status, data } = response.data
      if (status === ERROR_OK) {
        return data
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

// porps: {
//   size: {
//     type: Number
//   },
//   score: {
//     type: Number
//   },
//   type: {
//     type: Number
//   }
// }

const LENGTH = 5
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
function itemClass () {
  // 创建一个数组存储
  let result = []
  let score = Math.floor(this.score * 2) / 2
  // 是否会出现半颗的情况
  let hasDecimal = score % 1 !== 0
  // 判断整数的情况(如果3.6颗则向下取整为3)
  let integer = Math.floor(score)
  // 根据整数先往数组里推三个满星
  for (let i = 0; i < integer; i++) {
    result.push(CLASS_ON)
  }
  // 判断是否有半颗星
  if (hasDecimal) {
    result.push(CLASS_HALF)
  }
  // 剩余星星用空心填满
  while (result.length < LENGTH) {
    result.push(CLASS_OFF)
  }
}
itemClass()

function starType () {
  return 'star-' + this.size
}
starType()

function iconClass () {
  const classMap = ['decrease', 'discount', 'specical', 'invoice', 'guarantee']
  return `icon-${this.size} ${classMap[this.type]}`
}
iconClass()

function stringRemoveRepeat (data) {
  // 声明一个空对象用来存放统计后的字符
  let objects = {}
  // 循环查找
  for (let i = 0; i < data.length; i++) {
    // 数组里的i个元素
    let value = data[i]
    // 将数组的i个元素作为objects对象的属性查询其属性值
    // 如果objects对象没有该属性，则设置该属性的值为1，有的话在其基础上再+1
    objects[value] ? objects[value] += 1 : objects[value] = 1
  }
  return objects
}
stringRemoveRepeat(['b', 'a', 'c', 'a', 'b', 'b', 'b', 'c', 'c', 'a', 'c', 'a', 'a', 'a', 'b', 'c'])  // {b: 5, a: 6, c: 5}

function stringRemoveRepeat (data) {
  // 声明一个空对象用来存放统计后的字符
  let objects = {}
  // 循环查找
  for (let value of data) {
    // 将数组的value个元素作为objects对象的属性查询其属性值
    // 如果objects对象没有该属性，则设置该属性的值为1，有的话在其基础上再+1
    objects[value] ? objects[value] += 1 : objects[value] = 1
  }
  return objects
}
stringRemoveRepeat(['b', 'a', 'c', 'a', 'b', 'b', 'b', 'c', 'c', 'a', 'c', 'a', 'a', 'a', 'b', 'c'])  // {b: 5, a: 6, c: 5}

function fraction (numbers) {
  let i = 1
  let sum = 0
  while (i <= numbers) {
    // 判断分母是奇数还是偶数
    if (i % 2 === 0) {
      sum -= 1 / i
    } else {
      sum += 1 / i
    }
    i++
  }
  return sum
}
fraction(100)  // 0.688172179310195

function numberLeapYear (start, end) {
  // 统计闰年的总数
  let count = 0
  let label = ''
  while (start <= end) {
    // 判断是不是闰年
    if (start % 4 === 0 && start % 100 !== 0 || start % 400 === 0) {
      label += start + ' '
      count++
      // 每行输出4个闰年
      if (count % 4 === 0) {
        label += '\n'
      }
    }
    start++
  }
  return label
}
numberLeapYear(1000, 2000)

// 定义一个函数，输入数字，逆转并输出汉字形式
function outPutChinese (values) {
  let strings = ""
  if (typeof values !== 'string' || values === '0' || values === '' || /[^\d]/g.test(values)) {
    return '请输入合法的值!'
  }
  for (let i = values.length - 1; i >= 0; i--) {
    strings += transfer(values[i])
  }
  return strings
}
function transfer (target) {
  switch (target) {
    case "1":
      return "壹"
    case "2":
      return "贰"
    case "3":
      return "弎"
    case "4":
      return "四"
    case "5":
      return "伍"
    case "6":
      return "陆"
    case "7":
      return "七"
    case "8":
      return "八"
    case "9":
      return "玖"
  }
}
outPutChinese('1')  // "壹"

// 字符串去重
function duplicateRemove (codes) {
  let strings = ''
  for (let i = 0; i < codes.length; i++) {
    if (strings.search(codes[i]) < 0) {
      strings += codes[i]
    }
  }
  return strings.replace(/\W+/gi, '')
}
duplicateRemove('a, a, ss, aa, f, g, e, r, t, y, y')  // "asfgerty"

let lessons = [
  { title: '后盾人媒体查询响应式布局', author: '小红' },
  { title: 'FLEX弹性盒模型', author: '小丽' },
  { title: 'GRID栅格系统后盾人教程', author: '小梅' }
]
function templates () {
  return `<ul>${lessons.map(item => links`<li>作者: ${item.author}, 课程: ${item.title}</li>`).join('')}</ul>`
}
function links (strings, ...multiples) {
  return strings.map((item, key) => item + (multiples[key] ? multiples[key].replace('后盾人', `<a href="https://www.houdunren.com">后盾人</a>`) : '')).join('')
}
templates()  // 作者: 小红 课程: 后盾人媒体查询响应式布局 ...

function phone (mobile, len = 3) {
  return String(mobile).slice(0, len * -1) + '*'.repeat(len)
}
phone(13744560918, 8)  // 137********

while (true) {
  const year = prompt('后盾人哪年成立的?').trim()
  if (!year) {
    continue
  } else {
    year === '2010' ? '回答正确' : '输入错误'
    break
  }
}

function Ticker (config) {
  this.getNumber = function () {
    return config.start
  }
  this.getTick = function () {
    return config.start += config.step
  }
}
Ticker.prototype.times = function (numbers) {
  while (numbers > 0) {
    this.getTick()
    numbers--
  }
}
const ticker1 = new Ticker({ start: 100, step: 2 })
ticker1.getTick()
ticker1.getNumber()  // 102
const ticker2 = new Ticker({ start: 20, step: 3 })
ticker2.times(2)
ticker2.getNumber()  // 26

// 创建一个Human类
class Human {
  constructor(firstName, lastName, age, eye) {
    // 构造器中的this指的是类的实例对象
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.eye = eye
  }
}
Human.prototype.fullName = function () {
  return '我叫' + this.firstName + '·' + this.lastName + "，"
}
Human.prototype.trueAge = function () {
  return '今年' + this.age + "岁，"
}
Human.prototype.eyeColor = function () {
  return '眼睛是' + this.eye
}
const friend = new Human("比尔", "盖茨", 62, "蓝色")
friend.fullName() + friend.trueAge() + friend.eyeColor()

function People (firstName, lastName, age, eye) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.eye = eye
}
People.prototype = {
  constructor: People,
  fullName () {
    return this.firstName + '·' + this.lastName
  },
  trueAge () {
    return this.age
  },
  eyeColor () {
    return this.eye
  }
}
const people = new People("比尔", "盖茨", 62, "蓝色")
people.fullName() + "，" + people.trueAge() + "岁，" + "眼睛" + people.eyeColor()

const students = ['张三', '李四', '王五', '赵六', '小红']
const index1 = Math.floor(Math.random() * students.length)
console.log(students[index1])  // 张三
const index2 = 2 + Math.floor(Math.random() * (students.length - 2))
console.log(students[index2])  // 王五
const index3 = 2 + Math.floor(Math.random() * (4 - 2))
console.log(students[index3])  // 赵六

const surnames = ['张三', '李四', '王五', '赵六', '小红']
function arrayRandomValue (array, start = 1, end) {
  // 随机传一个值，从start开始，到end结束
  start--
  // 定义end，如果传了就取end，没有传就取数组的长度
  end = end ? end : array.length
  // 因为添加end的时候是从1开始的，而不是从0开始
  const index = start + Math.floor(Math.random() * (end - start))
  return array[index]
}
arrayRandomValue(surnames, 3, 4)  // 王五或赵六

// 倒计时秒杀
function countDown (time1, time2) {
  let strings = ''
  const time = parseInt(Math.abs(time1.getTime() - time2.getTime()) / 1000)
  const day = parseInt(time / (60 * 60 * 24))
  const subDay = time - (day * 60 * 60 * 24)
  const hours = parseInt(subDay / (60 * 60))
  const subMinute = subDay - (hours * 60 * 60)
  const minutes = parseInt(subMinute / 60)
  const seconds = time % 60
  return strings += day + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒'
}
const date1 = new Date()
const date2 = new Date(2020, 10, 7, 18, 10, 10)
countDown(date1, date2)

function getDaysInMonth (year, month) {
  month = parseInt(month, 10)
  year = year % 2 === 0 && year % 100 !== 0 || year % 400 === 0 ? 28 : 29
  return new Date(year, month, 0).getDate()
}
getDaysInMonth(2017, 2)  // 28
getDaysInMonth(2018, 2)  // 29

function getCurrentMonthDays (month, year) {
  let transDays = 30
  let largeMonth = [1, 3, 5, 7, 8, 10, 12]
  if (largeMonth.includes(month)) {
    transDays = 31
  } else if (month === 2) {
    transDays = year % 2 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28
  }
  return transDays
}
getCurrentMonthDays(2, 2017)  // 28
getCurrentMonthDays(2, 2018)  // 29

const getMonthWeek = function (a, b, c) {
  /**
  * a = day = 当前日期
  * b = 6 - week = 当前周的还有几天过完(不算今天)
  * a + b 的和再除以7就是当天是当前月份的第几周
  */
  let date = new Date(a, parseInt(b) - 1, c)
  let week = date.getDay()
  let day = date.getDate()
  if (week === 0) {
    week = 7
  }
  const config = {
    getYear: date.getFullYear(),
    getMonth: date.getMonth() + 1,
    getWeek: Math.ceil((day + 6 - week) / 7)
  }
  return `今天是${config.getYear}年的第${config.getMonth}月的第${config.getWeek}周`
}
getMonthWeek(2020, 11, 3)  // 今天是2020年的第11月的第1周"

const params = [1992, 2, 22, 13, 22, 19]
const dates = new Date(...params)
console.log(dates)
const date3 = new Date('1996-07-12 08:22:12')
const timestamp = date3.valueOf()
console.log(timestamp)
// 转化日期格式
function dateFormat (date, format = 'YYYY-MM-DD HH:mm:ss') {
  date = new Date(date)
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  }
  for (const key in config) {
    // key是需要替换的字符串，config[key]是新的字符串
    format = format.replace(key, config[key])  // 将替换后的字符重新赋值给原来的变量format
  }
  return format
}
dateFormat('1992-02-12 10:22:18', 'YYYY年MM月DD日 HH时mm分ss秒')  // 1992年02月12日 10时22分18秒

// 计算两个日期之间相差的天数
function yearToYearOfDay (start, end) {
  const date1 = new Date(start)
  const date2 = new Date(end)
  const time1 = date1.getTime()
  const time2 = date2.getTime()
  const timestamp = Math.abs(time1 - time2)
  return parseInt(timestamp / 1000 / 3600 / 24) + '天'
}
yearToYearOfDay('2010-06-12', '2020-11-22')  // 3816天

// 获取前后n天的时间
function handleMonth (month) {
  if (month.toString().length === 1) {
    month = "0" + month
  }
  return month
}
function getDay (day) {
  let today = new Date()
  let milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
  today.setTime(milliseconds)
  let year = today.getFullYear()
  let month = today.getMonth()
  let date = today.getDate()
  month = handleMonth(month + 1)
  date = handleMonth(date)
  return year + "-" + month + "-" + date
}
getDay(5)  // "2020-11-27"
getDay(-5)  // "2020-11-17"

function dataFormat (date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  month = month >= 10 ? month : '0' + month
  day = day >= 10 ? day : '0' + day
  hour = hour >= 10 ? hour : '0' + hour
  minute = minute >= 10 ? minute : '0' + minute
  second = second >= 10 ? second : '0' + second
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
dataFormat(new Date())

function interceptDate (date) {
  const year = date.substr(0, 4)
  const month = date.substr(5, 2)
  const day = date.substr(8, 2)
  return year + '年' + month + '月' + day + '日'
}
interceptDate('2020-12-11')  // 2020年12月11日

function interceptDates (date) {
  const dateArray = date.split('-')
  // 使用parseInt()将日期字符串转化为数值参与运算
  const year = parseInt(dateArray[0], 10)
  const month = parseInt(dateArray[1], 10)
  const day = parseInt(dateArray[2], 10)
  return year + '年' + month + '月' + day + '日'
}
interceptDates('2020-12-11')  // "2020年12月11日"

function formatTime (time, template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
  const validates = time.match(/\d+/g)
  return template.replace(/\{(\d+)\}/g, (...[, $1]) => {
    time = validates[$1] || '00'
    return time.length < 2 ? '0' + time : time
  })
}
const date = '2020/12/29 14:20:00'
formatTime(date, '{0}年{1}月{2}日')

// 全局挂载时间格式化
function formatTimes (template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
  const validates = this.match(/\d+/g)
  return template.replace(/\{(\d+)\}/g, (_, n) => {
    const item = validates[n] || '0' + item
    item.length < 2 ? item : null
    return item
  })
}
String.prototype.formatTime = formatTimes
let time = '2020/12/30 11:03:00'
time.formatTimes('{0}年{1}月{2}日 {3}时{4}分{5}秒')

  // 闭包实现时间格式化
  (proto => {
    function formatTime (template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
      const validates = this.match(/\d+/g)
      return template.replace(/\{(\d+)\}/g, (_, n) => {
        const item = validates[n] || '0' + item
        item.length < 2 ? item : null
        return item
      })
    }
    proto.formatTime = formatTime
  })(String.prototype)
let times = '2020/12/30 11:03:00'
times.formatTime('{0}年{1}月{2}日 {3}时{4}分{5}秒')

function calculateAge (birth) {
  let age = ''
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  if (month < 10) {
    month += '0'
  }
  if (day < 10) {
    day += '0'
  }
  const now = year + '-' + month + '-' + day
  if (now.substring(0, 4) >= birth.substring(0, 4)
    && now.substring(5, 7) >= birth.substring(5, 7)
    && now.substring(8, 10) >= birth.substring(8, 10)) {
    age = year - parseInt(birth.substring(0, 4))
  } else {
    age = year - parseInt(birth.substring(0, 4)) - 1
  }
  return age
}
calculateAge('2000-10-18')  // 20

function getAge (birthDate) {
  const birthArray = birthDate.split('-')
  const birthYear = birthArray[0]
  const birthMonth = birthArray[1]
  const birthDay = birthArray[2]
  const currentDate = new Date()
  const nowYear = currentDate.getFullYear()
  const nowMonth = currentDate.getMonth() + 1
  const nowDay = currentDate.getDate()
  let age = null
  if (birthArray === null) {
    return false
  }
  if (nowYear === birthYear) {
    age = 0
  } else {
    const diffYear = nowYear - birthYear
    if (diffYear > 0) {
      if (nowMonth === birthMonth) {
        const diffDay = nowDay - birthDay
        age = diffDay < 0 ? diffYear - 1 : diffYear
      } else {
        const diffMonth = nowMonth - birthMonth
        age = diffMonth < 0 ? diffYear - 1 : diffYear
      }
    } else {
      return '出生日期晚于今天，数据有误'  // 返回-1，表示出生日期输入错误，晚于今天
    }
  }
  return age
}
getAge('1991-09-18')  // 29

// 统计1-n整数中出现1的次数
function countOne (n) {
  let factor = 1
  let count = 0
  let next = parseInt(n / factor)
  while (next !== 0) {
    let lower = n - next * factor
    let current = next % 10
    let high = parseInt(n / (10 * factor))
    if (current === 0) {
      count += high * factor
    } else if (current === 1) {
      count += high * factor + lower + 1
    } else {
      count += (high + 1) * factor
    }
    factor *= 10
    next = parseInt(n / factor)
  }
  return count
}
countOne(1)  // 1

function get () {
  return ['后盾人', 2010]
}
let [name, year] = get()
console.log(name, year)

console.log(Array.of(6).length)  // 1

function rangeArray (begin, end) {
  const array = []
  for (let i = begin; i <= end; i++) {
    array.push(i)
  }
  return array
}
rangeArray(1, 6)  // [1, 2, 3, 4, 5, 6]

console.log(Array(5).fill('后盾人'))  // ["后盾人", "后盾人", "后盾人", "后盾人", "后盾人"]
console.log([1, 2, 3, 4].fill('后盾人', 1, 3))  // [1, "后盾人", "后盾人", 4]

function move (array, from, to) {
  if (from < 0 || to >= array.length) {
    console.error('参数错误')
    return
  }
  const newArray = [...array]
  // 取出原数组
  let item = newArray.splice(from, 1)
  // 使用展开运算符防止增加新数组
  newArray.splice(to, 0, ...item)
  return newArray
}
move([1, 2, 3, 4], 1, 3)  // [1, 3, 4, 2]
move([1, 2, 3, 4], -1, 3)  // 参数错误

// 清空数组
// 方法一
const array = [1, 2, 3]
while (array.pop()) { }
console.log(array)
// 方法二
array.length = 0
// 方法三
array = []

let array = ['祝绪丹']
let values = array.values()
while (({ value, done } = values.next()) && done === false) {
  console.log(value)  // 祝绪丹
}

let array = ['祝绪丹']
for (const value of array.values()) {
  console.log(value)  // 祝绪丹
}

let array = ['祝绪丹']
for (const [key, value] of array.entries()) {
  console.log(value)  // 祝绪丹
}

function find (array, callback) {
  for (const value of array) {
    if (callback(value)) {
      return value
    }
  }
  return undefined
}
let lists = [1, 2, 3, 4, 5]
find(lists, item => item === 2)   // 2
find(lists, item => item === 22)  // undefined

Array.prototype.find = function (callback) {
  for (const value of this) {
    if (callback(value)) {
      return value
    }
  }
  return undefined
}
let arrays = [1, 2, 3, 4, 5]
arrays.find(item => item === 2)   // 2
arrays.find(item => item === 22)  // undefined

function sort (array, callback) {
  for (const n in array) {
    for (const m in array) {
      if (callback(array[n], array[m]) < 0) {
        const temp = array[n]
        array[n] = array[m]
        array[m] = temp
      }
    }
  }
  return array
}
let arrays = [1, 5, 3, 9, 7]
sort(arrays, ((a, b) => a - b))  // [1, 3, 5, 7, 9]

// 求数组最大元素
function getMax (array) {
  let result = array[0]
  for (let i = 0; i < array.length; i++) {
    result = Math.max(result, array[i])
  }
  return result
}
getMax([1, 2, 3, 4, 5, 6, 7])  // 7

// 求数组最大元素
function getMaxed (array) {
  return Math.max.apply(null, array)
}
getMaxed([1, 2, 3, 4, 5, 6, 7])  // 7

let arrays = ['后盾网', '后盾人']
let keys = arrays.keys()
let { value, done } = keys.next()
let values1 = arrays.values()
let { value, done } = values1.next()
console.log(value, done)  // 后盾网 false
let entries = arrays.entries()
let { value, done } = entries.next()
console.log(value, done)  // [0, '后盾网']

function filter (array, callback) {
  let newArray = []
  for (let value of array) {
    if (callback(value)) {
      newArray.push(value)
    }
  }
  return newArray
}
let list1 = [1, 2, 3, 4]
filter(list1, value => value > 2)  // [3, 4]

// 获取数组中最大的价格
let cart = [
  { name: 'iphone', price: 12000 },
  { name: 'imac', price: 25000 },
  { name: 'ipad', price: 3600 }
]
function maxPrice (goods) {
  return goods.reduce((pre, cur) => pre.price > cur.price ? pre : cur)
}
maxPrice(cart)  // { name: "imac", price: 25000 }

let cart1 = [
  { name: 'iphone', price: 12000 },
  { name: 'imac', price: 25000 },
  { name: 'ipad', price: 3600 }
]
function sum1 (goods) {
  return goods.reduce((total, current) => total += current.price, 0)
}
sum1(cart1)  // 40600

let cart2 = [
  { name: 'iphone', price: 12000 },
  { name: 'imac', price: 25000 },
  { name: 'ipad', price: 3600 }
]
function getNameByPrice (goods, price) {
  return goods.reduce((array, current) => {
    if (current.price > price) {
      array.push(current)
    }
    return array
  }, []).map(item => item.name)
}
getNameByPrice(cart2, 10000)  // ["iphone", "imac"]

// 数组去重排序
function removeRepeat (array) {
  return [...array].reduce((item, current) => {
    if (!(item.includes(current))) {
      item.push(current)
    }
    return item
  }, [])
}
removeRepeat([1, 2, 3, 3, 1, 4, 2])  // [1, 2, 3, 4]

// 将数组去重，然后再转换成树形结构的数组
const removeRepeates = array => {
  const newArray = []
  const map = array.reduce((value, item) => ((value[item.id] = item), value), {})
  for (const item of Object.values(map)) {
    if (!item.parentId) {
      newArray.push(item)
    } else {
      const parent = map[item.parentId]
      parent.child = parent.child || []
      parent.child.push(item)
    }
  }
  return newArray
}
const list2 = [
  { id: 1 },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 2 },
  { id: 4 },
  { id: 3, parentId: 2 },
  { id: 5, parentId: 4 }
]
removeRepeates(list2)

// 防抖函数
function debounce (func) {
  // 创建一个标记用来存放定时器的返回值
  let timeout = null
  return function () {
    // 每当用户输入的时候把前一个定时器清除掉
    clearTimeout(timeout)
    // 然后又创建一个新的定时器, 这样就能保证输入字符后的间隔 
    // 间隔内如果还有字符输入的话，就不会执行func函数
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, 500)
  }
}
function useDebounce () {
  return '防抖成功'
}
/* <input id="text"> */
const text = document.getElementById('text')
text.addEventListener('input', debounce(useDebounce))

// 节流函数
function throttle (func) {
  let isRun = true  // 通过闭包保存一个标记
  return function () {
    if (!isRun) return  // 在函数开头判断标记是否为true，不为true则return
    isRun = false  // 立即设置为false
    setTimeout(() => {  // 将外部传入的函数的执行放在setTimeout中
      func.apply(this, arguments)
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      isRun = true
    }, 500)
  }
}
function useThrottle (e) {
  return e.target.innerWidth, e.target.innerHeight
}
window.addEventListener('resize', throttle(useThrottle))

let cart = [
  { name: 'iphone', price: 12000 },
  { name: 'imac', price: 25000 },
  { name: 'imac', price: 25000 },
  { name: 'ipad', price: 3600 },
  { name: 'ipad', price: 3600 }
]
function filterGoods (goods) {
  return goods.reduce((array, current) => {
    let isFind = array.find(value => value.name === current.name)
    if (!isFind) {
      array.push(current)
    }
    return array
  }, [])
}
filterGoods(cart)  // { name: 'iphone', price: 12000 } { name: 'imac', price: 25000 } { name: 'ipad', price: 3600 }

function sum (total, discount, discountAgain) {
  return total * (1 - discount) * (1 - discountAgain)
}
sum(1000, 0.1, 0.2)  // 720

function shows (arrays) {
  return arrays <= 3
}
[1, 2, 3, 4, 5, 6, 7].filter(shows)  // [1, 2, 3]

function sum () {
  return [...arguments].reduce((a, b) => a + b)
}
sum(1, 23, 3, 43, 45, 53)  // 168

function sum (...list) {
  return list.reduce((a, b) => a + b)
}
sum(1, 23, 3, 43, 45, 53)  //  168

let lessons = [
  { title: 'flex弹性布局', click: 19 },
  { title: 'vue实战教程', click: 20 },
  { title: 'js入门课程', click: 31 },
  { title: 'h5和css3案例', click: 35 }
]
function change (lessons, numbers = 100, i = 0) {
  // 退出条件，当i等于所有课程数量的时候，表示全部操作完成，然后把lessons返回出去
  if (i === lessons.length) {
    return lessons
  }
  lessons[i].click += numbers
  // 前加加i是为了防止出现死循环
  return change(lessons, numbers, ++i)
}
change(lessons, 20)  // 原数组对象中的click属性值都加上20，title属性值不变

let hd = Symbol('后盾人在线教程')
let edu = Symbol('网址是houdunren.com')
console.log(hd === edu)  // false
console.log(hd.description)  // 后盾人在线教程

let cms1 = Symbol.for('hdcms')
let edu1 = Symbol.for('hdcms')
console.log(cms1 === edu1)  // true

let cms2 = Symbol.for('hdcms')
let edu2 = Symbol.for('hdcms123')
console.log(cms2 === edu2)  // false

let cms = Symbol.for('hdcms')
let houdunren = Symbol('houdunren')
console.log(Symbol.keyFor(houdunren))  // undefined
console.log(Symbol.keyFor(cms))  // hdcms

let user1 = {
  name: '李四',
  key: Symbol()
}
let user2 = {
  name: '李四',
  key: Symbol()
}
let grade = {
  [user1.key]: { js: 100, css: 89 },
  [user2.key]: { js: 35, css: 55 }
}
console.log(grade)
console.log(grade[user1.key])  // {js: 100, css: 89}
console.log(grade[user2.key])  // {js: 35, css: 55}

class Cache {
  static data = {}
  static set (key, value) {
    return this.data[key] = value
  }
  static get (key) {
    return this.data[key]
  }
}
let user = {
  name: 'apple',
  desc: '用户资料',
  key: Symbol('会员资料')
}
let cart = {
  name: 'apple',
  desc: '购物车',
  key: Symbol('购物车数据')
}
Cache.set(user.key, user)
Cache.set(cart.key, cart)
console.log(Cache.get(user.key))  // {name: "apple", desc: "用户资料", key: Symbol(会员资料)}
console.log(Cache.get(cart.key))  // {name: "apple", desc: "购物车", key: Symbol(购物车数据)}

let symbol = Symbol('这是一个Symbol类型')
let objects = {
  name: '皮卡丘',
  [symbol]: '我会放十万伏特的电'
}
// 遍历Symbol私有属性
for (const key of Object.getOwnPropertySymbols(objects)) {
  console.log(key)  // Symbol(这是一个Symbol类型)
}
// 遍历Symbol所有属性
for (const key of Reflect.ownKeys(objects)) {
  console.log(key)  // name Symbol(这是一个Symbol类型)
}

let site = Symbol('这是一个Symbol')
class User {
  constructor(name) {
    // 构造器中的this是谁? 类的实例对象
    this.name = name
    this[site] = '后盾人'
  }
  // 一般方法
  getName () {
    // getName方法放在了哪里？ 类的原型对象上，供实例使用
    // 通过User实例调用getName时，getName中this就是User实例
    return `${this[site]}-${this.name}`
  }
}
// 创建一个User的实例对象
let users = new User('皮卡丘')
users.getName()  // "后盾人-皮卡丘"

let set = new Set()
set.add(1)
set.add('1')
console.log(set)  // Set(2) {1, "1"}

let set1 = new Set([1, 2, 3, 4, 5])
console.log(set1)  // Set(5) {1, 2, 3, 4, 5}

let set2 = new Set('123456789')
set2 = new Set([...set2].filter(item => item < 5))
console.log(set2)  // Set(4) {"1", "2", "3", "4"}

let array = [1, 2, 3, 4, 5, 2, 3, 1]
array = [...new Set(array)]
console.log(array)  // (5) [1, 2, 3, 4, 5]

let set3 = new Set(['hdcms', 'houdunren'])
set3.forEach(value => {
  console.log(value)  // hdcms houdunren
})
for (const value of set3) {
  console.log(value)  // hdcms houdunren
}

let a = new Set([1, 2, 3, 4])
let b = new Set([4, 5, 2, 9])
// 并集
// console.log(new Set([...a, ...b]))  // Set(6) {1, 2, 3, 4, 5, 9}
// console.log(new Set([...a].filter(item => !b.has(item))))  // Set(2) {1, 3}
// 交集
console.log(new Set([...a].filter(item => b.has(item))))  // Set(2) {2, 4}

let objects = {
  1: 'hdcms',
  '1': 'houdunren'
}
let houdun = {
  [objects]: '后盾人'
}
console.log(houdun[objects.toString()])  // 后盾人

function User (name) {
  this.name = name
}
let user = new User('小红')
console.log(user)  // {name: "小红"}
let objects = {
  url: 'hdcms.com'
}
User.call(objects, '开源系统')
console.log(objects)  // {url: "hdcms.com", name: "开源系统"}
User.apply(objects, ['免费教程'])
console.log(objects)  // {url: "hdcms.com", name: "免费教程"}

let lisi = { name: '李四' }
function User (web, url) {
  return web + url + this.name
}
User.call(lisi, '后盾人', 'houdunren.com')  // "后盾人houdunren.com李四"
User.apply(lisi, ['后盾人', 'houdunren.com'])  // "后盾人houdunren.com李四"

function Request () {
  this.get = function (params) {
    let strings = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    return `https://api.houdunren.com?${this.url}/${strings}`
  }
}
function Article () {
  this.url = 'article/lists'
  Request.apply(this)
}
let article = new Article()
article.get({ id: 1, cat: 'js' })  // https://api.houdunren.com?article/lists/id=1&cat=js

function Request () {
  this.get = function (params) {
    let strings = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    return `https://api.houdunren.com?${this.url}/${strings}`
  }
}
function User () {
  this.url = 'user/lists'
  // this指代user对象，可以接受任意多个参数
  Request.call(this)
}
let user = new User()
user.get({ id: 2, role: 'admin' })  // https://api.houdunren.com?user/lists/id=2&role=admin

function between (a, b) {
  return function (value) {
    return value >= a && value <= b
  }
}
let arrays = [1, 23, 4, 5, 6, 7, 8, 9, 21, 10]
arrays.filter(between(3, 9))  // [4, 5, 6, 7, 8, 9]

// 封装排序函数
let goods = [
  { name: 'iphone12', price: 7500 },
  { name: '华为p40', price: 4860 },
  { name: 'oppo20', price: 4100 },
  { name: '小米12', price: 4250 }
]
function order (field, type = 'asc') {
  return function (a, b) {
    if (type === 'asc') {
      return a[field] > b[field] ? 1 : -1
    } else {
      return a[field] > b[field] ? -1 : 1
    }
  }
}
goods.sort(order('price', 'desc'))
goods.sort(order('price'))

const context = {
  name: 'Mary',
  getName () {
    return this.name
  }
}
const bound = context.getName.bind(context)
bound()  // "Mary"

let user = {
  name: '皮卡丘',
  grade: [
    { lang: 'js', score: 80 },
    { lang: 'vue', score: 98 }
  ],
  average () {
    let total = this.grade.reduce((item, current) => item + current.score, 0)
    return `${this.name}的平均成绩是: ${total / this.grade.length}`
  }
}
user.average()  // "皮卡丘的平均成绩是: 89"

function upload (params) {
  let options = { size: 2000 }
  options = Object.assign(options, params)
  return JSON.stringify(options, null, 2)
}
upload({ size: 999, type: 'png' })

let obj = { name: 'vue', click: 99 }
for (const iterator of Object.keys(obj)) {
  console.log(iterator)  // key: name key: click
}
for (const iterator of Object.values(obj)) {
  console.log(iterator)  // value: vue value: 99
}
for (const iterator of Object.entries(obj)) {
  console.log(iterator)  // ['name', 'vue'] ['click', 99]
}
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value)  // name vue click 99
}

const user = {
  data: {
    name: '皮卡丘',
    age: 20
  },
  set age (value) {
    if (typeof value !== 'number' || value < 10 || value > 100) {
      throw new Error('年龄格式错误')
    }
    this.data.age = value
  },
  get age () {
    return this.data.age + '岁'
  }
}
user.age = 10
console.log(user.age)

let web = {
  name: '后盾人',
  url: 'houdunren.com',
  get site () {
    return `${this.name}的网址是${this.url}`
  },
  set site (value) {
    [this.name, this.url] = value.split(',')
  }
}
web.site = '开源产品,www.hdcms.com'
console.log(web.site)

const objects = {
  name: '后盾人'
}
const proxy = new Proxy(objects, {
  get (item, property) {
    return item[property]
  },
  set (item, property, value) {
    item[property] = value
    return true
  }
})
proxy.name = '皮卡丘'
console.log(proxy.name)  // 皮卡丘

function factorial (numbers) {
  return numbers === 1 ? 1 : numbers * factorial(numbers - 1)
}
let proxy = new Proxy(factorial, {
  apply (func, obj, args) {
    // console.log(func)
    // ƒ factorial(num) {
    //   return num === 1 ? 1 : num * factorial(num - 1)
    // }
    console.log(obj)
    // console.log(args)
    // [5]
  }
})
// proxy(5)
proxy.apply(this, [5])

let lessons = [
  { title: 'flex弹性布局', category: 'css' },
  { title: 'vue实战教程', category: 'vue' },
  { title: 'js入门课程', category: 'js' },
  { title: 'h5和css3案例', category: 'h5和css3' }
]
let proxy = new Proxy(lessons, {
  get (array, key) {
    const title = array[key].title
    const len = 10
    array[key].title = title.length > len ? title.substr(0, len) + '.'.repeat(3) : title
    return array[key]
  }
})
console.log(proxy[0])  // {title: "flex弹性布局", category: "css"} 

let objects = {
  name: '面向对象'
}
let parent = {
  name: '父类',
  show () {
    return '父类方法: ' + this.name
  }
}
Object.setPrototypeOf(objects, parent)
objects.show()  // "父类方法: 面向对象"
parent.show()
Object.getPrototypeOf(objects)  // {name: "父类", show: ƒ}

function User (name) {
  this.name = name
}
User.prototype = {
  constructor: User,
  show () {
    return this.name
  }
}
User.prototype.show = function () {
  return this.name
}
let user = new User.prototype.constructor('李四')
user.show()

function User (name) {
  this.name = name
}
User.prototype = {
  constructor: User,
  show () {
    return this.name
  }
}
let user = new User('后盾人')
function createNewObject (obj, ...args) {
  const constructor = Object.getPrototypeOf(obj).constructor
  return new constructor(...args)
}
let lisi = createNewObject(user, '李四')
lisi.show()

let objects = {
  data: [1, 2, 3, 34, 5, 7]
}
Object.setPrototypeOf(objects, {
  max (data) {
    return data.sort((a, b) => b - a)[0]
  }
})
objects.max(objects.data)  // 34
let gather = {
  lessons: { js: 87, css: 66, html: 99, node: 70 },
  get data () {
    return Object.values(this.lessons)
  }
}
objects.max.apply(gather)  // 99
objects.max.call(null, Object.values(gather.lessons))  // 99

function User (name, age) {
  this.name = name
  this.age = age
}
User.prototype.show = function () {
  return `${this.name}，${this.age}`
}
function Admin (...args) {
  User.apply(this, args)
}
Admin.prototype = Object.create(User.prototype)
let admin = new Admin('皮皮', 18)
admin.show()  // 皮皮 18
function Member (...args) {
  User.apply(this, args)
}
Member.prototype = Object.create(User.prototype)
let admin = new Admin('李四', 19)
admin.show()  // 李四 19

// 封装原型继承的函数
function extend (sub, sup) {
  sub.prototype = Object.create(sup.prototype)
  Object.defineProperty(sub.prototype, 'constructor', {
    value: sub,
    enumerable: false
  })
}
function User (name, age) {
  this.name = name
  this.age = age
}
User.prototype.show = function () {
  return `${this.name}，${this.age}`
}
function Admin (...args) {
  User.apply(this, args)
}
extend(Admin, User)
let admin = new Admin('皮皮', 18)
admin.show()  // 皮皮 18

class Member {  // 定义了一个名字为Member的类
  constructor(name, age, sex) {  // constructor是一个构造方法，用来接收参数
    this.name = name  // this代表的是实例对象
    this.age = age
    this.sex = sex
  }
  static create (...args) {  // 定义一个静态类方法
    return new this(...args)
  }
}
Member.create('皮卡丘', 20, '男')  // Member {name: "皮卡丘", age: 20, sex: "男"}

class Request {
  constructor(url) {
    this.host = url
  }
  setUrl (url) {
    if (!/^https?:\/\//i.test(url)) {
      throw new Error('地址错误')
    }
    this.host = url
  }
}
let request = new Request('https://www.houdunren.com')
request.setUrl('https://hdcms.com')
console.log(request)

function List (...args) {
  args.forEach(item => this.push(item))
  this.first = function () {
    return this[0]
  }
  this.max = function () {
    return this.sort((a, b) => b - a)[0]
  }
}
List.prototype = Object.create(Array.prototype)
let list = new List(99, 1, 2, 3, 56, 160)
list.max()  // 160
class List extends Array {
  constructor(...args) {
    super(...args)
  }
  first () {
    return this[0]
  }
  max () {
    return this.sort((a, b) => b - a)[0]
  }
  add () {
    this.push(item)
  }
  remove (value) {
    let index = this.findIndex(item => item === value)
    this.splice(index, 1)
  }
}
let list = new List(1, 2, 3)
list.max()  // 160
list.add('皮卡丘')
console.log(list)
list.remove(2)
console.log(list)

// 常规方法提取字符串中的数字
function extractNumber (strings) {
  return [...strings].filter(value => !Number.isNaN(parseInt(value))).join('')
}
extractNumber('houdunren2200hdcms9988')  // 22009988

// 正则方法提取字符串中的数字
function extractNumber (strings) {
  return strings.match(/\d/g).join('')
}
extractNumber('houdunren2200hdcms9988')  // 22009988

// 找出数组中大于10的元素
function greaterThanTen (list, numbers) {
  let arrays = []
  let count = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] >= numbers) {
      // 新数组下标应该从0开始 依次递增
      arrays[count] = list[i]
      count++
    }
  }
  return arrays
}
greaterThanTen([2, 0, 6, 1, 77, 0, 52, 0, 265, 7], 10)  // [77, 52, 265]

function numberRemoveRepeat (list) {
  let arrays = []
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      arrays[arrays.length] = list[i]
    }
  }
  return arrays.sort((a, b) => a - b)
}
numberRemoveRepeat([2, 0, 6, 1, 77, 0, 52, 0, 25, 7])  // [1, 2, 6, 7, 25, 52, 77]

function reverseFruits (fruit) {
  let arrays = []
  for (let i = fruit.length - 1; i >= 0; i--) {
    arrays[arrays.length] = fruit[i]
  }
  return arrays
}
reverseFruits(['red', 'green', 'blue', 'pink', 'purple'])  // ['purple', 'pink', 'blue', 'green', 'red']

// 对称数组
function symmetricArray (arrays) {
  const newArray = arrays.concat()
  for (let i = arrays.length - 1; i >= 0; i--) {
    newArray.push(arrays[i])
  }
  return newArray
}
symmetricArray(['one', 'two', 'three'])  // ["one", "two", "three", "three", "two", "one"]

// 已知一个字符串对象中，英语单词用各种非字母字符分割，统计单词个数
// 传入: 'Yes, she*is%my@love.'
// 规律: 当前面一个字符是字母，后面一个字符是非字母的时候，这就是一个单词
function countOfWord (strings) {
  let count = 0
  for (let i = 0; i < strings.length; i++) {
    if (isLetter(strings[i]) && !isLetter(strings[i + 1])) {
      count++
    }
  }
  return count
}
countOfWord('Yes, she*is%my@love.')  // 5
function isLetter (char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') ? true : false
}

function sumUp (start, end) {
  let total = 0
  if (start > end) {
    return false
  }
  for (let i = start; i <= end; i++) {
    total += i
  }
  return total
}
sumUp(1, 100)  // 5050

function changePosition (x, y) {
  let temp = x
  x = y
  y = temp
  return x + ' ' + y
}
changePosition(10, 20)  //  20 10

// 数组冒泡排序
function bubbleSort (arrays) {
  // 外层循环控制趟数
  for (let i = 0; i < arrays.length - 1; i++) {
    // 内层循环控制每趟的交换次数
    for (let j = 0; j < arrays.length - i - 1; j++) {
      // 交换两个变量的值，前一个和后一个数组元素相比较
      if (arrays[j] > arrays[j + 1]) {
        let temp = arrays[j]
        arrays[j] = arrays[j + 1]
        arrays[j + 1] = temp
      }
    }
  }
  return arrays
}
bubbleSort([1, 3, 8, 2, 5])  // [1, 2, 3, 5, 8]

// 数组快速排序
function quickSort (array) {
  if (array.length <= 1) {
    return array
  }
  let centerValue = array[0]
  array.shift()
  let leftArray = []
  let rightArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= centerValue) {
      leftArray.push(array[i])
    } else {
      rightArray.push(array[i])
    }
  }
  let leftResult = quickSort(leftArray)
  let rightResult = quickSort(rightArray)
  return leftResult.concat(centerValue, rightResult)
}
quickSort([57, 68, 59, 52, 72, 28, 96, 33, 24])

// 数组归并排序
function merge (left, right) {
  const result = []
  // 两个子序列进行比较，从小到大放入新的序列result中
  while (left.length > 0 && right.length > 0) {
    // 将较小的放入result，并改变left或者right的长度
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}
function mergeSort (array) {
  // 数组长度为1时退出
  if (array.length < 2) {
    return array
  }
  // 将数组分为两个子数组
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  // 递归
  return merge(mergeSort(left), mergeSort(right))
}
// 测试
mergeSort([45, 56, 12, 78, 23, 89])

// 判断是否是闰年
function isLeapYear (year) {
  let flag = false
  // 如果是闰年就返回true，否则返回false
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    flag = true
  }
  return flag
}
function backDay (year) {
  return isLeapYear(year) ? '当前年份是闰年，2月份有29天' : '当前年份为平年，2月份有28天'
}
backDay(1999)  // "当前年份为平年，2月份有28天"
backDay(2000)  // "当前年份是闰年，2月份有29天"

// 数组翻转
function arrayReverse (array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i]
    // 如果不减i，那么永远是第一个元素和最后一个元素进行交换
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
  return array
}
arrayReverse([1, 2, 3, 4, 5])  // [5, 4, 3, 2, 1]

// 数组翻转
function arrayReverse (array) {
  if (array instanceof Array) {
    let newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
      newArray[newArray.length] = array[i]
    }
    return newArray
  } else {
    return new Error('参数要求必须是数组格式')
  }
}
arrayReverse([1, 2, 3])  // [3, 2, 1]
arrayReverse(1, 2, 3)  // 参数要求必须是数组格式

// 截取地址栏中的字段，并将其存入对象
function getData (url) {
  let index = url.indexOf('?')
  let params = url.substr(index + 1)
  let arrays = params.split('&')
  let objects = {}
  for (let i = 0; i < arrays.length; i++) {
    let result = arrays[i].split('=')
    let key = result[0]
    let value = result[1]
    objects[key] = value
  }
  return objects
}
getData('https://www.bilibili.com/video/BV1G4411V7tb?name=pibo&age=20')  // {name: "pibo", age: "20"}

function fetchData (url) {
  // 获取问号和井号所在的位置
  let questionIndex = url.indexOf('?')
  let poundIndex = url.lastIndexOf('#')
  // 获取问号和井号后面的值
  let questionText = url.substring(questionIndex + 1, poundIndex)
  let poundText = url.substring(poundIndex + 1)
  // 将获取到的结果进行解析，然后拼成一个对象返回
  let objects = {}
  // 处理哈希值(井号后面的值)
  poundText.length > 0 ? objects['hash'] = poundText : null
  // 问号参数的处理
  if (questionText) {
    // item 遍历数组的每一项
    questionText.split('&').forEach(items => {
      let arrays = items.split('=')
      let key = arrays[0]
      let value = arrays[1]
      objects[key] = value
    })
  }
  return objects
}
fetchData('https://www.bilibili.com/video/BV1G4411V7tb?name=bilibili&age=10#video')  // {hash: "video", name: "bilibili", age: "10"}

function fetchData (url) {
  let questionIndex = url.indexOf('?')
  let poundIndex = url.lastIndexOf('#')
  // 如果井号不存在
  if (poundIndex === -1) {
    poundIndex = url.length
  }
  let questionText = url.substring(questionIndex + 1, poundIndex)
  let poundText = url.substring(poundIndex + 1)
  let objects = {}
  poundText.length > 0 ? objects['hash'] = poundText : null
  if (questionText) {
    questionText.split('&').forEach(items => {
      let arrays = items.split('=')
      objects[arrays[0]] = arrays[1]
    })
  }
  return objects
}
fetchData('http://www.zhufengpeixun.cn/?id=123&name=js&from=baidu')  // {id: "123", name: "js", from: "baidu"}

function fetchData (url) {
  let questionIndex = url.indexOf('?')
  let poundIndex = url.lastIndexOf('#')
  let questionText = ''
  let poundText = ''
  // 如果井号不存在
  if (poundIndex === -1) {
    poundIndex = url.length
  }
  poundText = url.substring(poundIndex + 1)
  // 如果问号不存在
  if (questionIndex === -1) {
    questionText = url.substring(questionIndex + 1, poundIndex)
  }
  let objects = {}
  poundText.length > 0 ? objects['hash'] = poundText : null
  if (questionText) {
    questionText.split('&').forEach(items => {
      let arrays = items.split('=')
      objects[arrays[0]] = arrays[1]
    })
  }
  return objects
}
fetchData('http://www.zhufengpeixun.cn/id=123&name=js&from=baidu')

function queryUrlParams (url) {
  let objects = {}
  url.replace(/([^?=&#]+)=([^?=&#]+)/g, (_, key, value) => objects[key] = value)
  url.replace(/#([^?=&#]+)/g, (_, hash) => objects['HASH'] = hash)
  return objects
}
queryUrlParams('http://www.zhufengpeixun.cn/?id=123&name=js&from=baidu#video')

function queryUrlParams () {
  let objects = {}
  this.replace(/([^?=&#]+)=([^?=&#]+)/g, (_, key, value) => objects[key] = value)
  this.replace(/#([^?=&#]+)/g, (_, hash) => objects['HASH'] = hash)
  return objects
}
String.prototype.queryUrlParams = queryUrlParams
let url = 'http://www.zhufengpeixun.cn/?id=123&name=js&from=baidu#video'
url.queryUrlParams()

// 找出字符串中出现次数最多的字符
function appearMostChars (chars, code) {
  let array = chars.split(' ')
  let newArray = []
  array.forEach(item => {
    if (item.includes(code)) {
      newArray.push(item)
    }
  })
  return newArray
}
appearMostChars('I am from runoob, welcome to runoob site.', 'runoob')  // ["runoob,", "runoob"]

function swapper (codes, chinese) {
  let strings = ''
  for (let i = 0; i < codes.length; i++) {
    strings += chinese.charAt(codes.charAt(i))
  }
  return strings
}
swapper('1112223337789999', '零壹贰叁肆伍陆柒捌玖')  // "壹壹壹贰贰贰叁叁叁柒柒捌玖玖玖玖"

function charAtTest (strings, numbers) {
  // 从索引为n – 1的位置，获取正确的字符，并返回
  return strings.charAt(numbers - 1)
}
charAtTest('ABCDEFGHIJKLMNOPQRSTUVWXYZ')  // "A"

function stringPosition (codes) {
  let objects = {}
  // 把每个字符都保存在对象里面，如果对象中有该属性，就+1，如果对象中没有该属性，就为1
  for (let i = 0; i < codes.length; i++) {
    let chars = codes[i]
    // objects[chars]得到的是属性值
    objects[chars] ? objects[chars] += 1 : objects[chars] = 1
  }
  let strings = ''
  let count = 0
  for (const key in objects) {
    if (objects[key] > count) {
      count = objects[key]
      strings = key
    }
  }
  return `出现最多的字符是${strings}, 一共出现了${count}次`
}
stringPosition('abcoefoxyozzopp')  // "出现最多的字符是o, 一共出现了4次"

// 将字符串的字符全部转换为小写字符
function lowerCase (strings) {
  let arrays = strings.split('')
  let codes = ''
  // 用for遍历数组
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] >= 'A' && arrays[i] <= 'Z') {
      codes += arrays[i].toLowerCase()
    } else {
      codes += arrays[i]
    }
  }
  return codes
}
lowerCase('Hello World!')  // "hello world!"

// 将字符串的字符全部转换为大写字符
function upperCase (strings) {
  let arrays = strings.split('')
  let codes = ''
  // 用forEach遍历数组
  arrays.forEach(value => {
    if (value >= 'a' && value <= 'z') {
      codes += value.toUpperCase()
    } else {
      codes += value
    }
  })
  return codes
}
upperCase('Hello World!')  // "HELLO WORLD!"

function firstUppercase (strings) {
  let arrays = strings.toLowerCase().split(' ')
  for (let i = 0; i < arrays.length; i++) {
    // 截取字符串的首字母并转换成大写，再拼接剩下的字符
    arrays[i] = arrays[i].charAt(0).toUpperCase() + arrays[i].substr(1)
  }
  return arrays.join(' ')
}
firstUppercase('hOw aRe yOu')  // How Are You

// 找出第一个months小于7的猫
function minMonth (pets) {
  let min = pets[0]
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].months < min.months) {
      min = pets[i]
    }
  }
  return min
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Pickles', months: 6 },
  { name: 'Waffles', months: 4 }
]
minMonth(cats)  // { name: 'Waffles', months: 4 }

function minMonth (pets) {
  let min = pets[0]
  for (const item of pets) {
    if (item.months < min.months) {
      min = item
    }
  }
  return min
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Pickles', months: 6 },
  { name: 'Waffles', months: 4 }
]
minMonth(cats)  // { name: 'Waffles', months: 4 }

function minMonth (pets) {
  let min = pets[0]
  for (const key in pets) {
    if (pets[key].months < min.months) {
      min = pets[key]
    }
  }
  return min
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Pickles', months: 6 },
  { name: 'Waffles', months: 4 }
]
minMonth(cats)  // { name: 'Waffles', months: 4 }

function minMonth (pets) {
  let min = pets[0]
  for (const [key] of Object.entries(pets)) {
    if (pets[key].months < min.months) {
      min = pets[key]
    }
  }
  return min
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Pickles', months: 6 },
  { name: 'Waffles', months: 4 }
]
minMonth(cats)  // { name: 'Waffles', months: 4 }

function getCatsMinMonth (pets) {
  return pets.sort((a, b) => a.months - b.months)[0]
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Pickles', months: 6 },
  { name: 'Waffles', months: 4 }
]
getCatsMinMonth(cats)  // { name: 'Waffles', months: 4 }

function minMonth (pets) {
  return pets.reduce((pre, cur) => pre.months < cur.months ? pre : cur)
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Pickles', months: 6 },
  { name: 'Waffles', months: 4 }
]
minMonth(cats)  // { name: 'Waffles', months: 4 }

function monthSum (pets) {
  return pets.reduce((total, cur) => total += cur.months, 0)
}
let cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Waffles', months: 4 },
  { name: 'Pickles', months: 6 }
]
monthSum(cats)  // 128

class Father {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  summation () {
    return this.x + this.y
  }
}
class Son extends Father {  // 子类继承父类
  constructor(x, y) {
    super(x, y)  // 调用父类的构造函数 super必须在子类this之前调用
    // this.x = x
    // this.y = y
  }
  subtract () {
    return this.x - this.y
  }
}
let son = new Son(1, 2)
son.summation()  // 3
let son = new Son(2, 1)
son.subtract()  // 1

Array.prototype.summation = function () {
  return this.reduce((item, current) => item += current, 0)
}
let arrays = [1, 2, 3]
arrays.summation()  // 6

// call()可以调用函数，同时还可以改变this的指向
function changeThis (x, y) {
  return x + y
}
const objects = {
  name: 'Jakie'
}
changeThis.call(objects, 1, 2)  // 3

let objects = {
  id: 1,
  name: '小米',
  price: 1999
}
Object.defineProperty(objects, 'count', {  // 添加或修改属性
  value: 100
})
console.log(objects)  // { id: 1, name: "小米", price: 1999, count: 100 }
Object.defineProperty(objects, 'id', {
  writable: false  // 不允许修改属性值，默认false
})
console.log(objects)
Object.defineProperty(objects, 'count', {
  enumerable: false  // 不允许遍历对象属性，默认false
})
Object.defineProperty(objects, 'count', {
  configurable: false  // 不允许删除对象属性和修改特性，默认false
})

let books = {}
let name = ''
Object.defineProperty(books, 'name', {
  set (value) {
    name = value
    console.log('你取了一个书名叫做' + value)  // 你取了一个书名叫做vue权威指南
  },
  get () {
    return `《${name}》`
  }
})
books.name = 'vue权威指南'
console.log(books.name)  // 《vue权威指南》

// 1.不会调用原来的函数，可以改变原来函数内部的this指向
// 2.返回的是原函数改变this之后产生的新函数
let objects = {
  name: 'Jakie'
}
function invoking (a, b) {
  return a + b
}
const invoke = invoking.bind(objects, 1, 2)
invoke()  // 3                     

// <button>点击</button>
// const button = document.querySelector('button')
// button.onclick = function () {
//   this.disabled = true
//   setTimeout(function () {
//     this.disabled = false
//     // 如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向，此时用bind
//   }.bind(this), 3000)
// }

for (let i = 0; i < li.length; i++) {
  li[i].index = i
  li[i].onclick = function () {
    console.log(this.index)
  }
}

// 立即执行函数就是只会执行一次函数
// 立即执行函数也称为小闭包，因为立即执行函数里面的任何一个函数都可以使用它的i变量
for (let i = 0; i < li.length; i++) {
  // 利用for循环穿件4个立即执行函数
  (function (i) {
    li[i].onclick = function () {
      console.log(i)
    }
  })(i)
}

// 闭包应用-计算打车价格
// 打车起步价13(3公里内)，之后每多一公里增加5元钱，用户输入公里数就可以计算打车价格
// 如果有拥堵情况，总价格多收取10元钱拥堵费
let car = (() => {
  let start = 13  // 起步价
  let total = 0   // 总价
  return {
    // 正常的总价
    price (kilometre) {
      if (kilometre <= 3) {
        total = start
      } else {
        total = start + (kilometre - 3) * 5
      }
      return total
    },
    // 拥堵之后的费用  
    trafficJam (flag) {
      return flag ? total + 10 : total
    }
  }
})()
car.price(12)   // 58
car.trafficJam(true)   // 10
car.trafficJam(false)  // 0

const name = '我是外部变量'
const objects = {
  name: '我是内部变量',
  getName () {
    return () => {
      return this.name
    }
  }
}
const internalName = objects.getName()
internalName()  // "我是内部变量"  

// 对象深拷贝
function deepCopy (newObject, oldObject) {
  for (const key in oldObject) {
    const item = oldObject[key]  // 获取属性值
    if (item instanceof Array) {  // 判断是否是数组
      newObject[key] = []
      deepCopy(newObject[key], item)
    } else if (item instanceof Object) {  // 判断是否是对象
      newObject[key] = {}
      deepCopy(newObject[key], item)
    } else {  // 否则就是基本数据类型
      newObject[key] = item
    }
  }
}
deepCopy(newObject, oldObject)

let person = { name: '张三', age: 20 }
let { name: userName, age: userAge } = person
console.log(`姓名: ${userName}, 年龄: ${userAge}`)  // 姓名: 张三 年龄: 20

// 判断字符串是否以某个字符开头和结尾，返回值为布尔类型
let strings = 'Hello ECMAScript 2020'
let bools = strings.startsWith('Hello')
console.log(bools)  // true
let bools = strings.endsWith('2020')
console.log(bools)  // true

const arrays = ['a', 'b', 'c']
const sets = new Set(arrays)
console.log(sets.size)  // 3 数组元素个数

const oldArray = [1, 2, 3, 3, 2, 4, 1]
const newArray = [...oldArray]
console.log(new Set(newArray))  // Set(4) {1, 2, 3, 4}

const strings = new Set()
strings.add('皮').add('啊')  // 向set结构添加值
console.log(strings.size)  // 2
strings.delete('啊')  // 从set结构删除值
console.log(strings.size)  // 1
const isSet = strings.has('皮')  // 判断一个值是否是set结构的成员
console.log(isSet)  // true
strings.clear()
console.log(strings.size)  // 0

// 找出所有三次自幂数
function selfIdempotent (numbers) {
  let arrays = []
  for (let i = 100; i < numbers; i++) {
    const a = parseInt(i / 100)
    const b = parseInt(i % 100 / 10)
    const c = i % 10
    if (a * a * a + b * b * b + c * c * c === i) {
      arrays[arrays.length] = i + '是自幂数'
    }
  }
  return arrays
}
selfIdempotent(1000)  // ["153是自幂数", "370是自幂数", "371是自幂数", "407是自幂数"]

function narcissistic (start, end) {
  let arrays = []
  for (let i = start; i <= end; i++) {
    // 对i进行拆分，拿到每位上的数
    let bai = parseInt(i / 100)
    let shi = parseInt(i / 10 % 10)
    let ge = i % 10
    // 判断i是不是和每位上的数相等
    if (Math.pow(bai, 3) + Math.pow(shi, 3) + Math.pow(ge, 3) === i) {
      arrays[arrays.length] = i + '是水仙花数'
    }
  }
  return arrays
}
narcissistic(100, 999)  // ["153是水仙花数", "370是水仙花数", "371是水仙花数", "407是水仙花数"]

function isLegal (numbers, start = 100, end = 999) {
  // 当用户输入的数字时合法的
  if (!isNaN(numbers) && start <= numbers && numbers <= end) {
    // 百位
    const bai = Math.floor(numbers / 100)
    // 十位
    const shi = Math.floor(numbers / 10) % 10
    // 个位
    const ge = numbers % 10
    if (Math.pow(bai, 3) + Math.pow(shi, 3) + Math.pow(ge, 3) === numbers) {
      return '这个数字是水仙花数'
    } else {
      return '这个数字不是水仙花数'
    }
  } else {
    return '你输入的数字不合法'
  }
}
isLegal(153)  // 这个数字是水仙花数

function isNarcissu (numbers, start = 100, end = 999) {
  if (!isNaN(numbers) && start <= numbers && numbers <= end) {
    const str = numbers.toString()
    // 百位
    const bai = Number(str.charAt(0))
    // 十位
    const shi = Number(str.charAt(1))
    // 个位
    const ge = Number(str.charAt(2))
    const result = Math.pow(bai, 3) + Math.pow(shi, 3) + Math.pow(ge, 3)
    return result === numbers ? '这个数字是水仙花数' : '这个数字不是水仙花数'
  } else {
    return '你输入的数字不合法'
  }
}
isNarcissu(153)  // 这个数字是水仙花数

// 平日：年龄大于等于10岁，门票是300. 年龄小于10岁，门票是140
// 周末：年龄大于等于10岁，门票是500. 年龄小于10岁，门票是210
function ticketByAgeAndWeek (week, age) {
  // 让星期几作为前提条件
  if (week === 0 || week === 6) {
    // 周末
    return age >= 10 ? '门票为500' : '门票为210'
  } else {
    // 平日
    return age >= 10 ? '门票为300' : '门票为140'
  }
}
ticketByAgeAndWeek(6, 12)  // 门票为500
ticketByAgeAndWeek(3, 9)  // 门票为140

// 输出一个数的所有公倍数
function commonMultiple (numbers) {
  let arrays = []
  for (let i = 1; i <= numbers; i++) {
    if (numbers % i === 0) {
      arrays[arrays.length] = i
    }
  }
  return arrays
}
commonMultiple(10)  // [1, 2, 5, 10]

function getFactSum (start, end) {
  let sum = 0
  for (let i = start; i <= end; i++) {
    start *= i
    sum += start
  }
  return sum
}
getFactSum(1, 5)  // 153

// 求1 - 1 / 2 + 1 / 3 - 1 / 4 + 1 / 5 + ... 1 / 100 1 / n的和
function getFractSum (start, end) {
  let sum = 0
  for (let i = start; i <= end; i++) {
    sum += start / i
    start = -start
  }
  return sum
}
getFractSum(1, 100)  // 0.688172179310195

// 找出100-300之间能被6和9整除的数的个数
function betweenTwoNumbers (start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      count++
    }
  }
  return count + '个'
}

betweenTwoNumbers(100, 300)  // 11个

// 求1 + 2 + ... + 100的和
function oneToHundredSum (numbers) {
  // sum是和的累加器，初始值是0
  let sum = 0
  for (let i = 1; i <= numbers; i++) {
    sum += i
  }
  return sum
}
oneToHundredSum(100)  // 5050

// 小兔子拔萝卜，第1天拔1个，第2天拔2个，第3天拔3个...
// 问：第几天能拔光500个萝卜？
function pullOutRadish (numbers) {
  // 和的累加器
  let sum = 0
  // 天的序号，也就是这一天拔的萝卜数
  let i = 1
  while (sum < numbers) {
    sum += i
    i++
  }
  // 一定要注意这里有个"出一错误"
  return i - 1
}
pullOutRadish(500)  // 32

// 有用户输入数字n，计算3 / 2 + 4 / 3 + 5 / 4 + ... + (n + 1) / n的结果
function fraction (numbers) {
  // 和的累加器
  let sum = 0
  // 遍历分母就可以了， 因为分母就是分子加1
  for (let i = 2; i <= numbers; i++) {
    sum += (i + 1) / i
  }
  return sum
}
fraction(2)  // 1.5
fraction(3)  // 2.833333333333333

// 用莱布尼茨级数估算圆周率
// π = 2 * (1 + 1 / 3 + (1 * 2) / (3 * 5) + (1 * 2 * 3) / (3 * 5 * 7) + (1 * 2 * 3 * 4) / (3 * 5 * 7 * 9) + (1 * ...n) / (3 * 5 * ...2n + 1))
function leibniz (numbers) {
  // 累加器，就是最后答案
  let sum = 0
  // 累乘器，用来制作每一项，然后往累加器中累加
  let item = 1
  for (let i = 1; i <= numbers; i++) {
    // item就是小车厢
    item *= i / (2 * i + 1)
    // 把小车厢往累加器中累加
    sum += item
  }
  return (sum + 1) * 2
}
leibniz(3)  // 3.0476190476190474
leibniz(30)  // 3.14159265330116

// 计算数组中所有奇数和偶数之和
function getSum (arrays) {
  let odd = 0, even = 0
  arrays.forEach(numbers => numbers % 2 ? odd += numbers : even += numbers)
  return `奇数和: ${odd}，偶数和: ${even}`
}
getSum([12, 34, 11, 56])  // "奇数和: 11 偶数和: 102"

// 求数组中素数个数
function isPrimer (numbers) {
  let flag = true
  for (let i = 2; i <= numbers - 1; i++) {
    if (numbers % i === 0) {
      flag = false
    }
  }
  return flag
}
function getPrimerCount (array) {
  let count = 0
  array.forEach(item => {
    if (isPrimer(item)) {
      count++
    }
  })
  return count
}
getPrimerCount([11, 4, 6, 23, 34, 17])  // 3

// 编写函数map，把数组中每一个元素增加20%
function mapArray (array) {
  return array.map(item => (item * 1.2).toFixed(2))
}
mapArray([2, 4, 6])  // ["2.40", "4.80", "7.20"]

// 编写函数has，判断num是否在数组中，返回布尔值
function has (array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true
    }
  }
  return false
}
has([1, 3, 5], 7)  // false
has([1, 3, 5], 5)  // true

// 编写函数noRepeat，将数组的重复元素去掉，并返回新的数组
function arrayRemoveRepeat (arrays) {
  let newArrays = []
  arrays.forEach(items => {
    if (!has(newArrays, items)) {
      newArrays.push(items)
    }
  })
  return newArrays
}
arrayRemoveRepeat([2, 6, 12, 6, 19, 12])  // [2, 6, 12, 19]

// 有一个升序的数组，现在输入一个数，这个数按原来规律插入到数组中
function insertToArray (arrays, numbers) {
  let index = arrays.length
  for (let i = 0; i < index; i++) {
    if (arrays[i] > numbers) {
      index = i
      break
    }
  }
  arrays.splice(index, 0, numbers)
  return arrays
}
insertToArray([10, 20, 28, 32], 29)  // [10, 20, 28, 29, 32]

// 定义函数，求数组为偶数的元素的平均值
function evenAverage (arrays) {
  let sum = 0
  let even = 0
  for (let i = 1; i < arrays.length; i++) {
    if (i % 2 === 0) {
      sum += arrays[i]
      even++
    }
  }
  return sum / even
}
evenAverage([1, 2, 3, 4, 5, 6])  // 4

// 某个公司采用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如
// 每位数字都加上5，然后用除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换
// 请编写一个函数，传入原文，输出密文
function getPassword (numbers, digit) {
  let arrays = []
  for (let i = 0; i < digit; i++) {
    arrays[i] = (numbers % 10 + 5) % 10
    numbers = parseInt(numbers / 10)
  }
  return arrays.join('')
}
getPassword(1456, 4)  // "1096"

Array.prototype.summation = function () {
  let sum = 0
  for (let i = 0; i < this.length; i++) {
    sum += this[i]
  }
  return sum
}
const arrays = [1, 2, 3, 4, 5]
arrays.summation()  // 15

// 类数组
const objects = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  length: 4
}
Array.prototype.summation.call(objects)  // 100
Array.prototype.splice.call(objects, 0, 4)
arrays.summation()  // 100
Array.from(objects).summation()  // 100

// 求1-100之间所有偶数与奇数的和
function getResult (start, end) {
  let even = 0, odd = 0
  while (start <= end) {
    start % 2 === 0 ? even += start : odd += start
    start++
  }
  return `偶数和是：${even} 奇数和是：${odd}`
}
getResult(1, 100) // "偶数和是：2550 奇数和是：2500"

function principalAndInterest (money, year) {
  // 存款利率
  let rate = 0.003
  for (let i = 0; i < year; i++) {
    money += money * rate
  }
  return money
}
principalAndInterest(10000, 5)  // 10150.90270405243

function exchangeVariables (x, y) {
  let a = 1
  let b = 1
  let sum = 0
  for (let i = x; i <= y; i++) {
    sum = a + b
    a = b
    b = sum
  }
  return sum
}
exchangeVariables(3, 12)  // 144

function even (start, end) {
  let sum = 0
  while (start <= end) {
    // 如果是偶数，就跳过这个数字
    if (start % 2 === 0) {
      start++
      continue
    }
    sum += start
    start++
  }
  return sum
}
even(100, 200)  // 7500

// 求100-200之间所有偶数的和
function even (start, end) {
  let sum = 0
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      continue
    }
    sum += i
  }
  return sum
}
even(100, 200)  // 7500

// 求10以内所有奇数的和
function odd (numbers) {
  let sum = 0
  for (let i = 1; i <= numbers; i++) {
    // 如果个位数是3，就跳过
    if (i % numbers === 3) {
      continue
    }
    sum += i
  }
  return sum
}
odd(10)  // 52

// 多维数组转化为一维数组
Array.prototype.flatten = function () {
  return this.reduce((previou, item) => {
    return previou.concat(Array.isArray(item) ? item.flatten() : item)
  }, [])
}
const list = [1, [2, [3, 4]]]
list.flatten()  // [1, 2, 3, 4]

// 多维数组转化为一维数组
Array.prototype.flatten = function () {
  let array = [].concat(...this)
  while (array.some(item => Array.isArray(item))) {
    array = [].concat(...array)
  }
  return array
}
let list = [1, [2, [3, 4]]]
list.flatten()  // [1, 2, 3, 4]

function paddingEndZero (value, length) {
  // 避免出现.00的情况
  value = value.toString() || 0
  if (value.indexOf('.')) {
    value += '.'
  }
  for (let i = 0; i < length; i++) {
    value += '0'
  }
  let index = value.indexOf('.')
  return value.substr(0, index + length + 1)
}
paddingEndZero(9, 1)  // 9.0
paddingEndZero(9, 2)  // 9.00
paddingEndZero(9, 3)  // 9.000

// 求100以内所有奇数的和
function odd (numbers) {
  let sum = 0
  for (let i = 1; i < numbers; i++) {
    if (i % 2 === 0) {
      continue
    }
    sum += i
  }
  return sum
}
odd(100) // 2500

// 求100以内所有奇数的和
function odd (numbers) {
  let sum = 0, i = 1
  while (i < numbers) {
    sum += i
    i += 2
  }
  return sum
}
odd(100)  // 2500

// 求100以内所有奇数的和
function odd (numbers) {
  let sum = 0, i = 1
  while (i < numbers) {
    if (i % 2 === 1) {
      sum += i
    }
    i++
  }
  return sum
}
odd(100)  // 2500

// 求100以内所有奇数的和
function odd (numbers) {
  let sum = 0
  while (numbers > 0) {
    sum += numbers
    numbers -= 2
  }
  return sum
}
odd(99)  // 2500

// 找出1-10中能被3整除的数
// 当i = 1时不满足条件if (i % 3 === 0)，所以不在控制台输出                   
// 当满足条件时(i >= 1 && n <= 10)，所以继续执行下面代码n++由此循环
function divideByThree (start, end) {
  let array = []
  while (start < end) {
    if (start % 3 === 0) {
      array.push(start)
    }
    start++
  }
  return array
}
divideByThree(1, 10)  // [3, 6, 9]

function ArrayRemoveRepeat (arr) {
  return arr.reduce((item, cur) => {
    // item初始状态为空数组，cur为当前数组中的每一项元素
    if (!item.includes(cur)) {
      item.push(cur)
    }
    return item
  }, [])
}
ArrayRemoveRepeat([1, 2, 3, 3, 1, 4, 2])  // [1, 2, 3, 4]

// 求100以内所有奇数与偶数的和
function getOddEvenSum (n) {
  let odd = 0  // 奇数的和累加，初始值为0
  let even = 0  // 偶数的和累加，初始值为0
  for (let i = 1; i <= n; i++) {
    // 判断i是不是奇偶数
    i % 2 === 0 ? even += i : odd += i
  }
  return `偶数和${even}，奇数和${odd}`
}
getOddEvenSum(100)  // "偶数和2550，奇数和2500"

// 入职薪水10K，每年涨幅5%，50年后工资多少
function wages (year, salary) {
  let i = 1
  while (i <= year) {
    salary += salary * 0.05  // 计算每年上涨薪水
    i++  // 得出salary之后+1
  }
  return salary
}
wages(50, 10)  // 114.67399785753673

// 入职薪水10K，每年涨幅5%，50年后工资多少
function wages (year, salary) {
  for (let i = 1; i <= year; i++) {
    salary += salary * 0.05
  }
  return salary
}
wages(50, 10)  // 114.67399785753673

// 随机生成一个颜色
function randomValue (max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}
function randomColor () {
  const r = randomValue(0, 256), g = randomValue(0, 256), b = randomValue(0, 256)
  return `rgb(${r}, ${g}, ${b})`
}
randomColor()  // "rgb(120, 192, 73)"

// 随机生成一个验证码
function randomValue (max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}
function createCode (codeLength) {
  let strings = ''
  let codeList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'
  ]
  for (let i = 0; i < codeLength; i++) {
    let index = randomValue(62, 0)
    strings += codeList[index]
  }
  return strings
}
createCode(4)  // 输出一个4位的随机验证码

// 判断一个数是不是质数
function isPrimeNumber (n) {
  let flag = true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = false
    }
  }
  return flag ? '是质数' : '不是质数'
}
isPrimeNumber(20)  // 不是质数
isPrimeNumber(13)  // 是质数

// 求出1 - 1/2 + 1/3 - 1/4 ... 1/100的和，已知let i = 1
function fraction (numbers) {
  let sum = 0
  for (let i = 1; i <= numbers; i++) {
    // i 就是1-100的所有数字
    // 1/i 从1分之1到100分之1
    i % 2 === 0 ? sum -= 1 / i : sum += 1 / i
  }
  return sum
}
fraction(100)  // 0.688172179310195

class Father {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  sum () {
    return this.x + this.y
  }
}
// extends关键字是子类继承父类
class Son extends Father {
  constructor(x, y) {
    // super关键字调用了父类的构造函数
    super(x, y)
  }
}
const son = new Son(1, 2)
son.sum()

class Father {
  say () {
    return '我是爸爸'
  }
}
// 继承中的属性或方法的查找原则: 就近原则
class Son extends Father {
  say () {
    return super.say() + '的儿子'
  }
}
const son = new Son()
son.say()

class Father {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  summation () {
    return this.x + this.y
  }
}
const son = new Son(5, 3)
son.summation()  // 8
// 子类继承父类的方法，同时扩展减法方法
class Son extends Father {
  constructor(x, y) {
    // 利用super调用父类的构造函数
    // super必须在子类this之前调用
    super(x, y)
    this.x = x
    this.y = y
  }
  subtract () {
    return this.x - this.y
  }
}
const son = new Son(5, 3)
son.subtract()  // 2
son.summation()  // 8

class Animal {
  constructor(age) {
    this.age = age
  }
  getAge () {
    return this.age + '岁'
  }
}
class Cat extends Animal {
  constructor(name, age) {
    super(name)
    this.name = name
    this.age = age
  }
  getCatInfo () {
    // super在普通方法中表示的是Animal.prototype
    // super.color相当于Animal.prototype.color
    // return super.color // 黑色
    // super.getAge()相当于Animal.prototype.getAge()
    return this.name + '' + super.getAge()
  }
}
const cat = new Cat('小黑', 6)
cat.getCatInfo()

// 数组去重
function arrayRemoveRepeat (arrays) {
  let objects = {}
  for (let i = 0; i < arrays.length; i++) {
    const items = arrays[i]
    if (typeof objects[items] !== 'undefined') {
      arrays.splice(i, 1)
      // 防止数组塌陷
      i--
      continue
    }
    // 把这一项作为对象的属性名和属性值存储进去
    objects[items] = items
  }
  return arrays
}
arrayRemoveRepeat([1, 2, 3, 3, 4, 3, 2, 5, 6, 5])  // [1, 2, 3, 4, 5, 6]

// 数组去重
function arrayRemoveRepeat (arrays) {
  let objects = {}
  for (let i = 0; i < arrays.length; i++) {
    const items = arrays[i]
    if (typeof objects[items] !== 'undefined') {
      // 我们把数组最后一项获取到，替换当前项
      // 再把数组最后一项删除
      arrays[i] = arrays[arrays.length - 1]
      arrays.length--
      i--
      continue
    }
    // 把这一项作为对象的属性名和属性值存储进去
    objects[items] = items
  }
  return arrays
}
arrayRemoveRepeat([1, 2, 3, 3, 4, 3, 2, 5, 6, 5])  // [1, 2, 3, 4, 5, 6]

// 数组去重
function arrayRemoveRepeat (arrays) {
  // 将数组排序
  let newArrays = arrays.sort((a, b) => a - b)
  for (let i = 0; i < newArrays.length; i++) {
    // 判断数组的前一项元素和后一项元素是否相等
    if (newArrays[i] === newArrays[i + 1]) {
      newArrays.splice(i, 1)
      // i--是为了防止数组塌陷
      i--
    }
  }
  return newArrays
}
arrayRemoveRepeat([1, 2, 3, 4, 4, 2, 5])  // [1, 2, 3, 4, 5]

// 数组去重
function arrayRemoveRepeat (arrays) {
  let newArrays = arrays.sort((a, b) => a - b)
  newArrays.forEach((item, index) => {
    if (item === index) {
      newArrays.splice(index, 1)
      index--
    }
  })
  return newArrays
}
arrayRemoveRepeat([1, 2, 3, 4, 4, 2, 5])  // [1, 2, 3, 4, 5]

// es6数组去重
function arrayRemoveRepeat (arrays) {
  return Array.from(new Set(arrays))
}
arrayRemoveRepeat([1, 2, 2, 3])  // [1, 2, 3]

// 字符串去重
function stringRemoveRepeat (strings) {
  let objects = {}
  for (let i = 0; i < strings.length; i++) {
    let value = strings[i]
    // 如果是true，证明对象中有这个成员，否则对象中没有这个成员
    objects[value] ? objects[value] += 1 : objects[value] = 1
  }
  let codes = ''
  for (const key in objects) {
    codes += key
  }
  return codes
}
stringRemoveRepeat('abcabcefgefh')  // abcefgh

// 字符串去重
function duplicateRemove (strings) {
  let arrays = strings.split('').sort().join('')
  let list = arrays.match(/(.)\1+/g)
  for (let i = 0; i < list.length; i++) {
    arrays = arrays.replace(list[i], list[i].substring(0, 1))
  }
  return arrays
}
duplicateRemove('1234321abaccc')  // "1234abc"

// 输入两个数，求两个数的最大公约数
function commonDisior (x, y) {
  // 声明一个变量当作最大公约数
  let max = 1
  for (let i = x; i > 1; i--) {
    // i就是两个数字的最大公约数
    if (x % i === 0 && y % i === 0) {
      // 因为是倒着循环，那么找到了一个就是最大的  
      max = i
      // 直接结束循环  
      break
    }
  }
  return max
}
commonDisior(8, 5)  // 1
commonDisior(8, 4)  // 4

// 输入两个数，求两个数的最大公约数(辗转相除法)
function getDivisor (m, n) {
  let a = +m, b = +n
  while (a !== 0 && b !== 0) {
    let temp = a % b
    a = b
    b = temp
  }
  return a
}
getDivisor(3, 4)  // 1
getDivisor(8, 4)  // 4

// 输入两个数，求两个数的最大公约数
function maxDivisor (x, y) {
  let max = x > y ? y : x
  while (max !== 0) {
    if (x % max === 0 && y % max === 0) {
      break
    }
    max--
  }
  return max
}
maxDivisor(3, 4)  // 1
maxDivisor(12, 4)  // 4

// 输入两个数，求两个数的最大公约数
function commonMultiple (x, y) {
  let max = Math.max(x, y)
  for (let i = max; i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      max = i
      break
    }
  }
  return max
}
commonMultiple(12, 8)  // 4

function continueKeyword (numbers) {
  let sum = 0
  let strings = '1～20之间的偶数有：'
  // 把1～20之间的偶数进行累加
  for (let i = 1; i < numbers; i++) {
    // 判断i是否为偶数，如果模不等于0，为奇数，结束当前循环，进入下一次循环
    if (i % 2 !== 0) {
      continue
    }
    // 如果执行continue语句，循环体内的该行以及后面的代码都不会被执行
    sum += i
    strings += i + ' '
  }
  return strings += '\n这些偶数的和为：' + sum
}
continueKeyword(20)  // "1～20之间的偶数有：2 4 6 8 10 12 14 16 18 这些偶数的和为：90"   

function breakKeyword (numbers) {
  let sum = 0
  let strings = '1～20之间的被累加的偶数有：'
  // 把1～20之间的偶数进行累加
  for (let i = 2; i < numbers; i += 2) {
    if (sum > 60) {
      // 执行break语句后，整个循环立刻停止结束执行
      break
    }
    sum += i
    strings += i + ' '
  }
  return strings += '\n这些偶数的和为：' + sum
}
breakKeyword(20)  // "1～20之间的被累加的偶数有：2 4 6 8 10 12 14 16 这些偶数的和为：72"

// 输入两个数n和a，如果n === 3，a === 2，输出2 + 22 + 222的值（不用输出式子）
// 如果n === 4，a === 3，输出3 + 33 + 3333的值
function getAccumulation (numbers, a) {
  // temp是每一次累加的数
  let temp = a
  let sum = 0
  for (let i = 0; i < numbers; i++) {
    sum += temp
    temp = temp * 10 + a
  }
  return sum
}
getAccumulation(3, 2)  // 246

// 五位数中，对称的数称为回文数，找出所有的回文数。如12321
function palindromeNumber (min, max) {
  let arrays = []
  for (let i = min; i < max; i++) {
    const a = 1 % 10  // 个位
    const b = parseInt(i / 10) % 10  // 十位
    const c = parseInt(i / 1000) % 10  // 千位
    const d = parseInt(i / 10000)  // 万位
    if (a === d && b === c) {
      arrays[arrays.length] = i
    }
  }
  return arrays
}
palindromeNumber(10000, 100000)

// 将一维数组拆分为指定长度的二维数组
function group (array, count) {
  let index = 0
  let newArray = []
  while (index < array.length) {
    newArray.push(array.slice(index, index += count))
  }
  return newArray
}
group([1, 2, 3, 4, 5, 6], 3)  // [1, 2, 3] [4, 5, 6]

const pathList = ['/my', '/find', '/user']
const pathObject = {
  redirect: '/video'
}
const { redirect } = pathObject
if (redirect) {
  const isExist = pathList.some(item => redirect.indexOf(item) === 0)
  if (isExist) {
    return this.$router.push(redirect)
  }
}

// 它的优秀之处并非原创，它的原创之处并不优秀

function mapArray (datas) {
  let emptys = []
  let arrays = datas.map(item => {
    item.age += 10
    return item
  })
  emptys.push(...arrays)
  return emptys
}
mapArray([{ name: 'Lily', age: 10 }])  // [{ name: 'Lily', age: 20 }]

function mapGetter (list) {
  return list.map(item => {
    item.name = '街霸' + item.name
    return item
  })
}
let list = [
  { name: '肯', age: 20, sex: '男' },
  { name: '隆', age: 20, sex: '男' },
  { name: '春丽', age: 19, sex: '女' }
]
mapGetter(list)

function handleMap (data) {
  return data.map(item => {
    return {
      name: '街霸' + item.name,
      age: item.age,
      sex: item.sex
    }
  })
}
let list = [
  { name: '肯', age: 20, sex: '男' },
  { name: '隆', age: 20, sex: '男' },
  { name: '春丽', age: 19, sex: '女' }
]
handleMap(list)

// this.$nextTick()将回调延迟到下次DOM更新循环之后执行
// promise.all是数组里面所有的promise对象执行结束之后，会返回一个存储所有promise对象的结果 
// promise.race顾名思义race就是比赛的意思，只会返回一个执行速度最快的那个promise对象返回的结果 

// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2, 0, "Lemon")
console.log(fruits)  // ["Banana", "Orange", "Lemon", "Apple", "Mango"]

// 参数说明:
// start： 开始取的位置，如果是负数则会从末尾开始算
// end: 结束的位置，不填则会从开始位置取到末尾
const arrays = [1, 2, 3, 4, 5, 6, 7]
console.log(arrays.slice(2, 5))  // [3, 4, 5]，注意arrays不变

const arrays = [1, 2, 3, 4, 5, 6, 7]
console.log(arrays.slice(-2, -1))  // [6]

const arrays = [1, 2, 3, 4, 5, 6, 7]
console.log(arrays.slice(3))  // [4, 5, 6, 7]

const arrays = [1, 2, 3, 4, 5]
arrays.forEach((item, index) => arrays[index] = item * 4)
console.log(arrays)  // [4, 8, 12, 16, 20]

// 回调函数: 因为函数实际上是一种对象，它可以存储在变量中，通过参数传递给另一个函数，在函数内部创建，
// 从函数中返回结果值，因为函数是内置对象，我们可以将它作为参数传递给另一个函数，到函数中执行，
// 甚至执行后将它返回，它一直被“专业的程序员”看作是一种难懂的技术。
function a (callback) {
  return callback && callback(1, 3)
}
function b (m, n) {
  return m + n
}
a(b)  // 4

// 使用class类封装axios
import axios from 'axios'
import { merge } from 'lodash'
class HttpRequest {
  constructor(options) {
    this.defaults = {
      baseURL: ''
    }
    this.defaults = Object.assign(this.defaults, options)
  }
  interceptor (install) {
    // 拦截请求，给请求的数据或者头信息添加一些数据
    install.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token')
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (token) {
          config.headers.authorization = `Bearer ${token}`
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 拦截响应，给响应的数据添加一些数据
    install.interceptors.response.use(
      response => {
        const { data, status } = response
        return data
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
  request (options) {
    options = Object.assign(this.defaults, options)
    // 请求的子实例
    const instance = axios.create(options)
    this.interceptor(instance)
    return instance
  }
}
// 创建axios实例
const instance = new HttpRequest({
  baseURL: '/api'
})
// 请求的axios实例
const http = instance.request()
// 使用http
export function getUserInfo () {
  return http.get('/user')
}