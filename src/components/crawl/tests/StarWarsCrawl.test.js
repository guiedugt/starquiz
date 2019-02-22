import React from 'react'
import { shallow } from 'enzyme'

import { StarWarsCrawl } from '../StarWarsCrawl'

const props = {
  history: { push: () => { } },
  isLogged: false
}

describe('(Component) StarWarsCrawl', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<StarWarsCrawl {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
