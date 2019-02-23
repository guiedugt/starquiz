import React from 'react'
import { shallow } from 'enzyme'
import { RulesModal } from '../RulesModal'

const props = {
  visible: true,
  onOk: jest.fn()
}

describe('(Component) RulesModal', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<RulesModal {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
