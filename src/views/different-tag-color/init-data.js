export function initData () {
  let multiples = []
  for (let i = 0; i < Math.floor(Math.random() * 100000000); i++) {
    multiples[i] = {
      id: Math.floor(Math.random() * 100000000 + 1),
      text: '列表' + i
    }
  }
  return multiples
}