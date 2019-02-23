import React from 'react'
import { shallow } from 'enzyme'
import { CharacterModal } from '../CharacterModal'

const props = {
  visible: true,
  toggle: jest.fn()
}

describe('(Component) CharacterModal', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<CharacterModal {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
