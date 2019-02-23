/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Modal } from 'antd'

const modalStyle = css`
`

const groupStyle = css`
  display: block;
  width: 100%;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

const imageStyle = css`
  height: 15rem;
  width: 100%;
  text-align: center;
  img {
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`

const itemStyle = css`

`

const itemLabelStyle = css`
  :after { content: ': '; }
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
`

export const StyledModal = props => (
  <Modal css={modalStyle} {...props} />
)

export const Group = props => (
  <div css={groupStyle} {...props} />
)

export const Image = props => (
  <div css={imageStyle} >
    {props.src && <img src={props.src} alt='character' {...props} />}
  </div>
)

export const Item = props => (
  <div css={itemStyle} {...props}>
    <span css={itemLabelStyle}>{props.label}</span>
    {props.children}
  </div>
)
