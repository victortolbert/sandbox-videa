// http://knpw.rs/blog/testing-vue-in-node

import Vue from 'vue'
import test from 'ava'
import nextTick from 'p-immediate'
import TestComponent from './test.vue'

test('renders the correct message', async (t) => {
  const Constructor = Vue.extend(TestComponent)
  const vm = new Constructor().$mount()
  t.is(vm.$el.querySelector('h1').textContent, 'Hello, World!')
  // Update
  vm.setName('Foo')
  await nextTick()
  t.is(vm.$el.querySelector('h1').textContent, 'Hello, Foo!')
})
