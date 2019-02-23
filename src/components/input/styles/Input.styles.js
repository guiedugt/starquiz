/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const inputStyle = css`
`

const searchInputStyle = css`
  ${inputStyle};
  text-align: left;
  .ant-form-item-children-icon {
    right: 3rem !important;
    top: .4rem !important;
  }
`

export const StyledSearchInput = props => (
  <div css={searchInputStyle} {...props} />
)
