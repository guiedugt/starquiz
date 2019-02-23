import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from '../HomePage'

const props = {
  history: { push: () => { } },
  isLogged: false,
  fetchCharacters: jest.fn(),
  characters: [],
  loading: false
}

describe('(Component) HomePage', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<HomePage {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
