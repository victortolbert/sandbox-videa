var fs = require('fs')
const YAML = require('yamljs')
// var orders = fs.readFileSync('./src/data/orders.yaml', 'utf8')
var order = fs.readFileSync('./src/data/order.yaml', 'utf8')
var availsObject = require('../../src/data/avails.js')

// Dump YAML string into JavaScript Native Object
var nativeObject = YAML.parse(order)

// Dump native object into YAML string
var yamlString = YAML.stringify(nativeObject, 4)
var availsYamlString = YAML.stringify(availsObject, 4)

// Dump native object into JSON string
// var jsonString = JSON.stringify(availsObject, undefined, 2)
var availsString = JSON.stringify(availsObject, undefined, 2)


// // Load YAML file
// var nativeObject = YAML.load('file.yml')

// // Load YAML file
// YAML.load('file.yml', function (result) {
//     nativeObject = result
// })


// const projects = YAML.load('~static/shared/yaml/projects.yaml')

// console.log(nativeObject)
console.log(yamlString)

console.log(availsString)

// console.log(jsonString)


// // console.log(file)
// fs.writeFile('./src/data/order.js', jsonString, function (err) {
//   if (err) {
//     return console.log(err)
//   } else {
//     console.log('nativeObject data generated.')
//   }
// })
