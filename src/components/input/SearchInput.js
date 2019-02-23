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
      input,
      error,
      success
    } = this.props

    return (
      <StyledSearchInput>
        <Form.Item
          hasFeedback
          help={success || error}
          validateStatus={success ? 'success' : error ? 'error' : ''}
        >
          <Input.Search
            ref={input}
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            disabled={!!(success || error)}
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

export default React.forwardRef((props, ref) => <SearchInput input={ref} {...props} />)
