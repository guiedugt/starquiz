import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { withFormik, Field } from 'formik'
import yup from '../../utils/yup'
import NameInput from '../input/NameInput'
import EmailInput from '../input/EmailInput'
import SubmitButton from '../button/SubmitButton'
import { StyledForm } from './styles/Form.styles'
import { saveScore } from '../../store/game/actions'

const handleSubmit = (values, formikBag) => {
  const { score, saveScore, onSubmit } = formikBag.props
  const submitValues = { ...values, score }
  saveScore(submitValues)
  onSubmit(submitValues)
}

const validationSchema = props => {
  return yup.object().shape({
    name: yup.string().name().required(),
    email: yup.string().email()
  })
}

export const ScoreForm = ({
  isValid,
  errors,
  values
}) => {
  const hasError = Object.keys(errors).length !== 0

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
      <SubmitButton
        disabled={hasError || !isValid}
      >
        Submit
      </SubmitButton>
    </StyledForm>
  )
}

ScoreForm.propTypes = {
  isValid: PropTypes.bool,
  errors: PropTypes.object,
  values: PropTypes.object,
  onSubmit: PropTypes.func
}

ScoreForm.defaultProps = {
  onSubmit: () => { }
}

const mapStateToProps = ({ game }) => ({
  score: game.score
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    saveScore
  }, dispatch)

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFormik({
    validationSchema,
    handleSubmit
  })
)

export default enhance(ScoreForm)
