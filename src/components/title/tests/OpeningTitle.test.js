import React from 'react'
import { shallow } from 'enzyme'
import { OpeningTitle } from '../OpeningTitle'

const props = {
  children: 'mock',
  duration: 1000
}

describe('(Component) OpeningTitle', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<OpeningTitle {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
