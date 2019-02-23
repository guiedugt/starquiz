import React from 'react'
import { shallow } from 'enzyme'
import { PublicPage } from '../PublicPage'

const props = {
  history: { push: () => { } },
  isLogged: false,
  fetchCharacters: jest.fn()
}

describe('(Component) PublicPage', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<PublicPage {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
