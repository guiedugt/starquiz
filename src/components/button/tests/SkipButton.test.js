import React from 'react'
import { shallow } from 'enzyme'

import { SkipButton } from '../SkipButton'

const props = {
  history: { push: () => { } },
  isLogged: false
}

describe('(Component) SkipButton', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<SkipButton {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
