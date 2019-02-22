/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const headerStyle = css`
  width: 100%;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 375px) { top: -8rem; }
  `

const groupStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const titleStyle = css`
  margin: 0;
  color: #feda4a;
  font-size: 4rem;
  line-height: 1;
  text-align: center;
  text-transform: lowercase;
  font-family: 'Starjedi', sans-serif;
`

const scoreStyle = css`
  margin-right: 1rem;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  text-shadow:
    0 0 0.5rem #fff,
    0 0 1.0rem #75c33c,
    0 0 1.5rem #75c33c,
    0 0 2.0rem #75c33c,
    0 0 2.5rem #75c33c,
    0 0 3.0rem #75c33c,
    0 0 3.5rem #75c33c;

  svg {
    font-size: 2.5rem;
    fill: #fff;
    filter:
      drop-shadow(0 0 0.5rem #fff)
      drop-shadow(0 0 1.0rem #75c33c)
      drop-shadow(0 0 1.5rem #75c33c);
  }
`

const timeStyle = css`
  color: #f00;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  text-shadow:
    0 0 0.5rem #f00,
    0 0 1.0rem #900,
    0 0 1.5rem #900,
    0 0 2.0rem #900,
    0 0 2.5rem #900,
    0 0 3.0rem #900,
    0 0 3.5rem #900;

  svg {
    font-size: 2.5rem;
    fill: #f00;
    filter:
      drop-shadow(0 0 0.5rem #f00)
      drop-shadow(0 0 1.0rem #900)
      drop-shadow(0 0 1.5rem #900);
  }
`

export const StyledHeader = props => (
  <header css={headerStyle} {...props} />
)

export const Group = props => (
  <div css={groupStyle} {...props} />
)

export const Title = props => (
  <h1 css={titleStyle} {...props} >
    {props.children}
  </h1>
)

export const Score = props => (
  <span css={scoreStyle} {...props} />
)

export const Time = props => (
  <span css={timeStyle} {...props} />
)
