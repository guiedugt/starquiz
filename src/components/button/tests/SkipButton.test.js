import React from 'react'
import { shallow } from 'enzyme'
import { SkipButton } from '../SkipButton'

const props = {
  children: 'mock',
  to: '/mock'
}

describe('(Component) SkipButton', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<SkipButton {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
