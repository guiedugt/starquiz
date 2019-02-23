import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import ValidatedSharedInput from './ValidatedSharedInput'

export const TextInput = ({
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
        className='text-input'
        {...field}
      />
    </ValidatedSharedInput>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
}

export default TextInput
