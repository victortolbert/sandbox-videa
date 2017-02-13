import MyComponent from './components/my-component'
// import MyDirective from './directives/my-directive.js'

// This is your plugin object. It can be exported to be used anywhere.
const MyPlugin = {

  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install (Vue, options) {
    Vue.component(MyComponent.name, MyComponent)
    // Vue.directive(MyDirective.name, MyDirective)

    // Modifying the Global Vue Object
    Vue.myAddedProperty = 'Example Property'
    Vue.myAddedMethod = function () {
      return Vue.myAddedProperty
    }

    // Modifying Vue Instances
    Vue.prototype.$myAddedProperty = 'Example Property'
    Vue.prototype.$myAddedMethod = function () {
      return Vue.myAddedProperty
    }

    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      // Anything added to a mixin will be injected into all components.
      // In this case, the mounted() method runs when the component is added to the DOM.
      mounted () {
        console.log('MyPlugin Mounted!')
      }
    })
  }
}

export default MyPlugin

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}
