import React from 'react'
import { shallow } from 'enzyme'
import { SearchInput } from '../SearchInput'

const props = {
  onSearch: jest.fn()
}

describe('(Component) SearchInput', () => {
  it('renders without crash', () => {
    const wrapper = shallow(<SearchInput {...props} />)
    expect(wrapper).toHaveLength(1)
  })
})
