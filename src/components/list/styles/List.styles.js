/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Spin } from 'antd'

const listStyle = css`
`

const characterListStyle = css`
  ${listStyle};
  overflow: auto;
  height: 100vh;
  padding-top: 5rem;
  position: sticky;
  top: 5rem;
  ::-webkit-scrollbar { width: 0; }
  .ant-row { margin: 0 !important; }
`

const loadingStyle = css`
  position: absolute;
  bottom: 3rem;
  width: 100%;
  text-align: center;
`

export const StyledCharacterList = props => (
  <div css={characterListStyle} {...props} />
)

export const Loading = props => (
  <div css={loadingStyle} {...props}>
    <Spin />
  </div>
)
