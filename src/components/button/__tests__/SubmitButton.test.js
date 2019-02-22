import React from 'react'
import { shallow } from 'enzyme'
import { SubmitButton } from '../SubmitButton'

describe('(Component) SubmitButton', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<SubmitButton />)
    expect(wrapper).toHaveLength(1)
  })
})
