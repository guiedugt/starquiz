import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from '../TextInput'

const props = {
  label: 'mock',
  field: {
    name: 'mock'
  },
  form: {
    touched: {
      mock: true
    },
    errors: {
      mock: 'mock'
    }
  }
}

describe('(Component) TextInput', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<TextInput {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
