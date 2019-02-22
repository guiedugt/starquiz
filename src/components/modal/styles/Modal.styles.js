/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Modal } from 'antd'

const modalStyle = css`
`

export const StyledModal = props => (
  <Modal css={modalStyle} {...props} />
)
