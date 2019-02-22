import React from 'react'
import PropTypes from 'prop-types'
import { StyledOpeningTitle } from './styles/Title.styles'

export const OpeningTitle = ({
  children,
  duration
}) => {
  return (
    <StyledOpeningTitle duration={duration}>
      {children}
    </StyledOpeningTitle>
  )
}

OpeningTitle.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number
}

OpeningTitle.defaultProps = {
  children: 'Star Wars',
  duration: 7500
}

export default OpeningTitle
