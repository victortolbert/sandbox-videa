// removes each item in vue data satisfying predicate
// https://github.com/parzonka/vertx-examples/blob/master/src/main/frontend/src/util.js
export default (data, predicate) => {
  data.forEach((item) => {
    if (predicate(item)) {
      data.$remove(item)
    }
  })
}
