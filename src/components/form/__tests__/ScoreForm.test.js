import React from 'react'
import { shallow } from 'enzyme'
import { ScoreForm } from '../ScoreForm'

describe('(Component) ScoreForm', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<ScoreForm />)
    expect(wrapper).toHaveLength(1)
  })
})
