/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Card } from 'antd'

const cardStyle = css`
`

const characterCardStyle = css`
  ${cardStyle};
  width: 100%;
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
  width: 100%;
  height: 12rem;
  img {
    transition: transform .4s ease-out;
    width: 100%;
    height: 12rem;
    object-fit: cover;
    object-position: 50% 5%;
    :hover { transform: scale(1.1); }
  }
`

export const StyledCharacterCard = props => (
  <Card css={characterCardStyle} {...props} />
)

export const Image = props => (
  <div css={imageStyle} >
    {props.src && <img src={props.src} alt='character' {...props} />}
  </div>
)
