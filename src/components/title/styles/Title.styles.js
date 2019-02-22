/* eslint react/prop-types: 0 */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

const openingTitleAnimation = keyframes`
  0% {
    top: 30vmin;
    opacity: 1;
    font-size: 30vmin;
    letter-spacing: 1rem;
  }
  100% {
    top: 15vmin;
    opacity: 0;
    font-size: 0;
    letter-spacing: .1rem;
  }
`

const openingTitleStyle = duration => css`
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  z-index: 1;
  width: min-content;
  overflow: hidden;
  color: #feda4a;
  line-height: 1;
  text-align: center;
  text-transform: lowercase;
  font-family: 'Starjedi', sans-serif;
  animation: ${openingTitleAnimation} ${duration / 1000}s linear forwards;
`

export const StyledOpeningTitle = props => (
  <h1 css={openingTitleStyle(props.duration)} {...props}>
    {props.children}
  </h1>
)
