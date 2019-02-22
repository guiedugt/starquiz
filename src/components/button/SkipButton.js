import React from 'react'
import PropTypes from 'prop-types'
import { StyledSkipButton } from './styles/Button.styles'

export const SkipButton = props => {
  const { children } = props

  return (
    <StyledSkipButton
      type='ghost'
      {...props}
    >
      {children}
    </StyledSkipButton>
  )
}

SkipButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

SkipButton.defaultProps = {
  children: 'Skip',
  to: '/home'
}

export default SkipButton
