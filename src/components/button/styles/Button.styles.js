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

const submitButtonStyle = css`
  ${buttonStyle};
  width: 100%;
`

export const StyledSkipButton = props => (
  <Link to={props.to}>
    <Button css={skipButtonStyle} {...props} />
  </Link>
)

export const StyledSubmitButton = props => (
  <Button css={submitButtonStyle} {...props} />
)
