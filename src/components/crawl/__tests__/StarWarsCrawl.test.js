import React from 'react'
import { shallow } from 'enzyme'
import { StarWarsCrawl } from '../StarWarsCrawl'

const props = {
  title: 'mock',
  duration: 1000,
  children: <p>mock</p>
}

describe('(Component) StarWarsCrawl', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<StarWarsCrawl {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
