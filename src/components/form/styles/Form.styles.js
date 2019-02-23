/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Form } from 'formik'

const formStyle = css`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
`

export const StyledForm = props => (
  <Form {...props} css={formStyle} />
)
