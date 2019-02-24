import React from 'react'
import { shallow } from 'enzyme'
import { ScoreForm } from '../ScoreForm'

const props = {
  isValid: true,
  errors: {},
  values: {}
}

describe('(Component) ScoreForm', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<ScoreForm {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
