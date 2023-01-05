console.log('Proxy example')

const data = {
  title: 'Vue 3',
  message: 'Title is: Vue3',
}

const proxy = new Proxy(data, {
  set(target, key, value) {
    if (key === 'title') {
      target.message = 'Title is: ' + value
    }
    target[key] = value
  },
  get(target, key) {
    return target[key]
  },
})

console.log(proxy.message)
proxy.title = 'React'
console.log(proxy.message)
