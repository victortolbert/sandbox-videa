export default {
  name: 'my-component',
  render (h) {
    return h(
      'div',
      { 'class': 'lolicon' },
      [h(
        'h1',
        null,
        ['Hello World!']
      )]
    )
  }
}
