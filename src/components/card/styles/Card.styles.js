/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Card } from 'antd'

const cardStyle = css`
`

const characterCardStyle = css`
  ${cardStyle};
  margin: 0 auto;
  width: 15rem;
  .ant-card-head {
    padding: 0;
    &-title { padding: 0; }
  }
  .ant-card-body {
    padding: .5rem;
    display: flex;
    justify-content: space-around;
  }
  .ant-btn {
    font-size: 1.25rem;
    font-weight: bolder;
    height: 2.5rem;
    width: 2.5rem;
  }
`

const imageStyle = css`
  cursor: pointer;
  img {
    transition: transform .4s ease-out;
    width: 15rem;
    height: 12rem;
    object-fit: cover;
    object-position: 0 5%;
    :hover { transform: scale(1.1); }
  }
`

export const StyledCharacterCard = props => (
  <Card css={characterCardStyle} {...props} />
)

export const Image = props => (
  <div css={imageStyle} >
    <img src={props.src} alt='character' {...props} />
  </div>
)
