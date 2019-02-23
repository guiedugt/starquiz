import React from 'react'
import PropTypes from 'prop-types'
import ScoreForm from '../form/ScoreForm'
import { StyledModal } from './styles/Modal.styles'

export const ScoreModal = ({
  visible,
  score
}) => {
  return (
    <StyledModal
      title='Score'
      visible={visible}
      closable={false}
      maskClosable={false}
      footer={null}
    >
      <h2>You Scored {score} points!</h2>
      <p>Fill in your info to save your score:</p>
      <ScoreForm />
    </StyledModal>
  )
}

ScoreModal.propTypes = {
  visible: PropTypes.bool
}

ScoreModal.defaultProps = {
  visible: false
}

export default ScoreModal
