import React from 'react'
import { shallow } from 'enzyme'
import { ValidatedSharedInput } from '../ValidatedSharedInput'

const props = {
  touched: true,
  error: 'mock',
  label: 'mock',
  children: <p>mock</p>
}

describe('(Component) ValidatedSharedInput', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<ValidatedSharedInput {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
