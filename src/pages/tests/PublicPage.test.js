import React from 'react'
import { shallow } from 'enzyme'

import { PublicPage } from '../PublicPage'

const props = {
  history: { push: () => { } },
  isLogged: false
}

describe('(Component) PublicPage', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<PublicPage {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
