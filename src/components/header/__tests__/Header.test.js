import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../Header'

const props = {
  score: 0,
  time: 120
}

describe('(Component) Header', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
