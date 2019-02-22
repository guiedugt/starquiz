import React from 'react'
import { shallow } from 'enzyme'
import { CharacterCard } from '../CharacterCard'

const props = {
  image: 'mock'
}

describe('(Component) CharacterCard', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<CharacterCard {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
