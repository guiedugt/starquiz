import React from 'react'
import { shallow } from 'enzyme'
import { NameInput } from '../NameInput'

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

describe('(Component) NameInput', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<NameInput {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
