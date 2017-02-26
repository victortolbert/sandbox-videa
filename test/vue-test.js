import { mount } from 'vue-test'
import Title from './Title.vue'

const mountedTitle = mount(Title, {
  title: 'Hello world!'
})

mountedTitle.find('h1').text()  // Hello world!
