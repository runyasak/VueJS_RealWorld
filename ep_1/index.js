function createReactiveObject (obj) {
  const keys = Object.keys(obj)
  obj.$data = Object.assign({}, obj)
  keys.forEach((key) => {
    Object.defineProperty(obj, key, {
      get: reactiveGetter.bind
    })
  })
}

function reactiveSetter (property, value) {
  this.$data[property] = value
  console.log('${property} change to ${value}')
}

function reactiveGetter (property, value) {
  console.log('get ${property}')
  return this.$data[property]
}

let user = {
  name: '',
  score: 0
}

createReactiveObject(user)

user.name = 'acoshift'
console.log(user.score)

user.abc = 10
