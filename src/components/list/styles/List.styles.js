/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { List } from 'antd'

const listStyle = css`
`

const characterListStyle = css`
  ${listStyle};
`

export const StyledCharacterList = props => (
  <List css={characterListStyle} {...props} />
)
