import React from 'react'
import PropTypes from 'prop-types'
import { StyledSubmitButton } from './styles/Button.styles'

export const SubmitButton = props => {
  const { children } = props

  return (
    <StyledSubmitButton
      type='primary'
      htmlType='submit'
      {...props}
    >
      {children}
    </StyledSubmitButton>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node
}

SubmitButton.defaultProps = {
  children: ''
}

export default SubmitButton
