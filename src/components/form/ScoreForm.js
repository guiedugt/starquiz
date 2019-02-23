import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withFormik, Field } from 'formik'
import * as yup from 'yup'
import NameInput from '../input/NameInput'
import EmailInput from '../input/EmailInput'
import { StyledForm } from './styles/Form.styles'

const handleSubmit = (values, formikBag) => {
  formikBag.props.onSubmit(values)
}

const validationSchema = props => {
  return yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required()
  })
}

export const ScoreForm = ({
  isValid,
  values
}) => {
  return (
    <StyledForm>
      <Field
        name='name'
        component={NameInput}
      />
      <Field
        name='email'
        component={EmailInput}
      />
    </StyledForm>
  )
}

ScoreForm.propTypes = {
  isValid: PropTypes.bool,
  loading: PropTypes.bool,
  values: PropTypes.object
}

const enhance = compose(
  withFormik({
    validationSchema,
    handleSubmit
  })
)

export default enhance(ScoreForm)
