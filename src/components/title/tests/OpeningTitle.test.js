import React from 'react'
import { shallow } from 'enzyme'

import { OpeningTitle } from '../OpeningTitle'

const props = {
  history: { push: () => { } },
  isLogged: false
}

describe('(Component) OpeningTitle', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<OpeningTitle {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
