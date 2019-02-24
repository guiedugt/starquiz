/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Table } from 'antd'

const tableStyle = css`
  table {
    table-layout: fixed;
    td {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }  
  }
`

const hide = css`
  width: 0;
  white-space: nowrap;
  color: transparent;
`

const scoreTableStyle = css`
  ${tableStyle};
  display: flex;
  .name-col { width: 8em; }
  .email-col { width: 13em; }
  .score-col { width: 3em; }
  @media only screen and (max-width: 600px) { .email-col { ${hide}; } }
`

export const StyledTable = props => (
  <Table {...props} css={tableStyle} />
)

export const StyledScoreTable = props => (
  <Table {...props} css={scoreTableStyle} />
)
