import React from 'react'
import { shallow } from 'enzyme'
import { EmailInput } from '../EmailInput'

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

describe('(Component) EmailInput', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<EmailInput {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
