import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

const fieldHasError = (touched, error) => touched && !!error

export const ValidatedSharedInput = ({
  touched,
  error,
  label,
  children
}) => {
  return (
    <Form.Item
      className='input'
      label={label}
      hasFeedback={fieldHasError(!!touched, error)}
      validateStatus={fieldHasError(!!touched, error) ? 'error' : ''}
      help={fieldHasError(!!touched, error) ? error : ''}
    >
      {children}
    </Form.Item>
  )
}

ValidatedSharedInput.propTypes = {
  touched: PropTypes.any,
  error: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
}

export default ValidatedSharedInput
