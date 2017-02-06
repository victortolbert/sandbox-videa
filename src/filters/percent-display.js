module.exports = {
  // model -> view
  // formats the value when updating the input element.
  read (val) {
    return (val * 100) + '%'
  },
  // view -> model
  // formats the value when writing to the data.
  write (val, oldVal) {
    // return val
    var number = +val.replace(/[^\d.]/g, '')
    return isNaN(number)
      ? 0
      : parseFloat(number.toFixed(2) / 100)
  }
}
