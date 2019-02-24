import React from 'react'
import { shallow } from 'enzyme'
import { ScoreTable } from '../ScoreTable'

const props = {
  scores: [],
  getScores: jest.fn()
}

describe('(Component) ScoreTable', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<ScoreTable {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
