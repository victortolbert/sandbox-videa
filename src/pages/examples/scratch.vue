<script>
  // const YAML = require('yamljs')
  // const projects = YAML.load('~static/shared/yaml/projects.yaml')

  const myObj = { name: 'Skip', age: 2, favoriteFood: 'Steak' }
  const myObjStr = JSON.stringify(myObj)
  console.log(myObjStr)

  // "{"name":"Skip","age":2,"favoriteFood":"Steak"}"
  console.log(JSON.parse(myObjStr))
  // Object {name:"Skip",age:2,favoriteFood:"Steak"}"

  const myArr = ['bacon', 'letuce', 'tomatoes']
  const myArrStr = JSON.stringify(myArr)
  console.log(myArrStr)

  // "["bacon","letuce","tomatoes"]"
  console.log(JSON.parse(myArrStr))

  // ["bacon","letuce","tomatoes"]

  const user = { id: 229, name: 'John', email: 'john@awesome.com', plan: 'Pro' }
  const userStr = JSON.stringify(user)
  const reviver = JSON.parse(userStr, (key, value) => {
    if (typeof value === 'string') {
      return value.toUpperCase()
    }
    return value;
  })
  console.log(reviver)

  function replacer(key, value) {
    console.log(typeof value)
    if (key === 'email') {
      return undefined;
    }
    return value;
  }
  const userStr1 = JSON.stringify(user, replacer)
  console.log(userStr1)

  // "{"id": 229,"name": "John"}"
  const userStr2 = JSON.stringify(user, null, '...')
  console.log(userStr2)

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sandbox'
    }
  }
</script>
