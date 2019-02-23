import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import { StyledSearchInput } from './styles/Input.styles'

export const SearchInput = ({
  onSearch,
  error
}) => {
  return (
    <StyledSearchInput>
      <Form.Item
        hasFeedback
        help={error}
        validateStatus={error && 'error'}
      >
        <Input.Search
          onSearch={input => window.alert(input)}
          placeholder='My name is ...'
          enterButton
        />
      </Form.Item>
    </StyledSearchInput>
  )
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default SearchInput
