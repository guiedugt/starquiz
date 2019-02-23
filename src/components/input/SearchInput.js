import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import { StyledSearchInput } from './styles/Input.styles'

export class SearchInput extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  state = {
    input: ''
  }

  render () {
    const {
      error
    } = this.props

    return (
      <StyledSearchInput>
        <Form.Item
          hasFeedback
          help={error}
          validateStatus={error && 'error'}
        >
          <Input.Search
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            placeholder='My name is ...'
            enterButton
          />
        </Form.Item>
      </StyledSearchInput>
    )
  }

  handleChange = input => {
    this.setState({ input })
  }

  handleSearch = input => {
    this.setState({ input: '' })
    this.props.onSearch(input)
  }
}

export default SearchInput
