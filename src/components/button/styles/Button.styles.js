/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const buttonStyle = css`
`

const skipButtonStyle = css`
  ${buttonStyle};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`

export const StyledSkipButton = props => (
  <Link to={props.to}>
    <Button css={skipButtonStyle} {...props} />
  </Link>
)
