var path = require('path')
var jsonServer = require('json-server')
var server = jsonServer.create() // Returns an Express server

// Returns an Express router
var router = jsonServer.router(path.join(__dirname, 'src/data/db.json'))
var middlewares = jsonServer.defaults() // logger, static and cors middlewares

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// // Add custom routes before JSON Server router
// server.get('/echo', function (req, res) {
//   res.jsonp(req.query)
// })

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use(function (req, res, next) {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// // Add this before server.use(router)
// server.use(jsonServer.rewriter({
//   '/api/': '/',
//   '/blog/:resource/:id/show': '/:resource/:id'
// }))

// Use default router
server.use(router) // Mount router on '/'
// server.use('/api', router)

server.listen(3000, function () {
  console.log('JSON Server is running')
})
