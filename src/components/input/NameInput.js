import React from 'react'
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd'
import ValidatedSharedInput from './ValidatedSharedInput'

export const NameInput = ({
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
        className='text-input'
        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder='Name'
        autoComplete='name'
        autoFocus
      />
    </ValidatedSharedInput>
  )
}

NameInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}

export default NameInput
