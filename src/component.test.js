import Autoextratable from './component'
import {
  mount,
  shallowMount
} from '@vue/test-utils'


describe('Autoextratable', () => {

  it('should include a slot for ever item in the collection, plus one extra', done => {
    const wrapper = mount(Autoextratable, {
      propsData: {
        collection: [{
          name: 'joe'
        }]
      },
      scopedSlots: {
        default: '<div><input type="text" v-model="props.item.name"/></div>'
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('input').length).toEqual(2)
      expect(wrapper.findAll('input').at(0).element.value).toEqual('joe')
      done()
    })
  })

  it('should include yet another entry when editing the extra entry', done => {
    const wrapper = mount(Autoextratable, {
      propsData: {
        collection: []
      },
      scopedSlots: {
        default: '<div><pre>{{props}}</pre><input type="text" v-model="props.item.name"/></div>'
      }
    })
    wrapper.vm.$nextTick(() => {
      const extraInput = wrapper.findAll('input').at(0)
      extraInput.setValue('bar')
      done()
    })
  })

})