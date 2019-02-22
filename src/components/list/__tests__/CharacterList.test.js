import React from 'react'
import { shallow } from 'enzyme'
import { CharacterList } from '../CharacterList'

const props = {
  image: 'mock'
}

describe('(Component) CharacterList', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<CharacterList {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
