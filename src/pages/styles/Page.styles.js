/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const pageStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 75rem;
  padding: 0.75rem;
  margin: 0 auto;
`

const homePageStyle = blur => css`
  ${pageStyle};
  ${blur && 'filter: blur(.5rem)'};
`

const containerStyle = css`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

export const StyledHomePage = props => (
  <section css={homePageStyle(props.blur)} {...props} />
)

export const Container = props => (
  <div css={containerStyle} {...props} />
)
