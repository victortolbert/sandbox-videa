module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // do not allow console.logs etc...
    'no-console': 0, // change back to 2 when below has been fixed

    // --fix and remove the following
    'brace-style': 0,
    'comma-dangle': 0,
    'eqeqeq': 0,
    'func-call-spacing': 0,
    'indent': 0,
    'key-spacing': 0,
    'keyword-spacing': 0,
    'no-cond-assign': 0,
    'no-dupe-keys': 0,
    'no-extend-native': 0,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': 0,
    'no-return-assign': 0,
    'no-undef': 0,
    'no-unexpected-multiline': 0,
    'no-unneeded-ternary': 0,
    'no-unreachable': 0,
    'no-unused-vars': 0,
    'no-useless-computed-key': 0,
    'no-useless-escape': 0,
    'one-var': 0,
    'padded-blocks': 0,
    'quotes': 0,
    'semi': 0,
    'space-before-blocks': 0,
    'space-before-function-paren': 0,
    'space-in-parens': 0,
    'space-infix-ops': 0,
    'standard/array-bracket-even-spacing': 0,
    'standard/computed-property-even-spacing': 0,
    'standard/object-curly-even-spacing': 0,
    'template-curly-spacing': 0
  },
  globals: {}
}
