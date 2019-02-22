/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

const containerStyle = css`
  display: flex;
  justify-content: center;
  height: 100vh;
  perspective: 60rem;
  overflow: hidden;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: .25rem;
  line-height: 150%;
  text-align: justify;
`

const fadeStyle = css`
  z-index: 1;
  position: fixed;
  top: -1.25rem;
  left: 0;
  width: 100%;
  min-height: 75vh;
  background-image: linear-gradient(0deg, transparent, black 90%);
`

const crawlAnimation = keyframes`
  0% {
    top: 100vh;
    transform: rotateX(20deg) translateZ(0);
  }
  100% { 
    top: -300rem;
    transform: rotateX(25deg) translateZ(-125rem);
  }
`

const crawlStyle = duration => css`
  position: relative;
  top: 100vh;
  transform-origin: 50% 100%;
  animation: ${crawlAnimation} ${duration / 1000}s linear;
`

const titleStyle = css`
  font-size: 90%;
  margin: 0 0 5rem;
  text-align: center;
  text-transform: uppercase;
`

export const Container = props => (
  <section css={containerStyle} {...props} />
)

export const Fade = props => (
  <div css={fadeStyle} {...props} />
)

export const Crawl = props => (
  <div css={crawlStyle(props.duration)} {...props} />
)

export const Title = props => (
  <h2 css={titleStyle} {...props}>
    {props.children}
  </h2>
)
