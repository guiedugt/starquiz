import React from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'
import ValidatedSharedInput from './ValidatedSharedInput'

export const EmailInput = ({
  label,
  field,
  form
}) => {
  return (
    <ValidatedSharedInput
      touched={form.touched[field.name]}
      error={form.errors[field.name]}
      label={label}
    >
      <Input
        {...field}
        className='email-input'
        prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder='Email'
        autoComplete='username email'
      />
    </ValidatedSharedInput>
  )
}

EmailInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}

export default EmailInput
