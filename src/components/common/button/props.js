module.exports = {
  autofocus: Boolean,
  disabled: Boolean,
  loading: Boolean,
  iconName: String,
  iconRight: Boolean,
  primary: Boolean,
  action: {
    default: () => {},
    type: Function
  },
  prefix: {
    type: String,
    default: 'vui-'
  },
  shape: {
    type: String,
    validator (value) {
      return ['full', 'circle'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator (value) {
      return ['small', 'medium', 'large'].includes(value)
    }
  },
  type: {
    type: String,
    default: 'neutral',
    validator (value) {
      return ['neutral', 'brand', 'primary', 'secondary', 'success'].includes(value)
    }
  }
}
