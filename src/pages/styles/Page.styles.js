/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const pageStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
`

const homePageStyle = blur => css`
  ${pageStyle};
  transition: filter .4s ease-out;
  ${blur && 'filter: blur(.5rem)'};
`

const containerStyle = css`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`

export const StyledHomePage = props => (
  <main css={homePageStyle(props.blur)}>
    {props.children}
  </main>
)

export const Container = props => (
  <section css={containerStyle} {...props} />
)
