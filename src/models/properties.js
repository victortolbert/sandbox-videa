module.exports = {
  imperfectNumber: {
    type: Number,
    default: () => Math.random(),
    validator: value => {
      // Only accepts values that contain the string 'cookie-dough'.
      return value.indexOf('cookie-dough') !== -1
    }
  },
  size: {
    type: Number,
    description: 'The size in pixels',
    required: false,
    default: 50
  },
  src: {
    type: String,
    description: 'Path to the image to display',
    required: false,
    default: null
  },
  color: {
    type: String
    description: '',
    required: false,
    default: null
  },
  backgroundColor: {
    type: String
    description: '',
    required: false,
    default: null
  },
  username: {
    type: String
    description: '',
    required: false,
    default: null
  },
  lighten: {
    type: Number
    description: '',
    required: false,
    default: 80
  },
  tint: {
    type: String
    description: '',
    required: false,
    default: null
  },
  shade: {
    type: String
    description: '',
    required: false,
    default: null
  },
  rounded: {
    type: String
    description: '',
    required: false,
    default: true
  },
  initials: {
    type: String
    description: '',
    required: false,
    default: null
  }
}
