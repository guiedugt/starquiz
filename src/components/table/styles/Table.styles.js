/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Table } from 'antd'

const tableStyle = css`
`

export const StyledTable = props => (
  <Table {...props} css={tableStyle} />
)
