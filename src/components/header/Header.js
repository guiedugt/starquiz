import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { StyledHeader, Group, Title, Score, Time } from './styles/Header.styles'

const formatTime = time => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds
  return `${minutes}:${formattedSeconds}`
}

export const Header = ({
  score,
  time
}) => {
  return (
    <StyledHeader>
      <Group>
        <Title>
          Star Quiz
        </Title>
      </Group>
      <Group>
        <Score>
          <Icon type='thunderbolt' /> {score}
        </Score>
        <Time>
          <Icon type='clock-circle' /> {formatTime(time)}
        </Time>
      </Group>
    </StyledHeader>
  )
}

Header.propTypes = {
  score: PropTypes.number,
  time: PropTypes.number
}

Header.defaultProps = {
  score: 0,
  time: 120
}

export default Header
