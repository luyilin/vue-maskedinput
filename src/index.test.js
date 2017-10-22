import { mount } from 'vue-test-utils'
import MaskedInput from './'

test('it works', () => {
  const wrapper = mount(MaskedInput)
  expect(wrapper.isVueInstance()).toBe(true)
})
