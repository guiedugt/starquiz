import React from 'react'
import PropTypes from 'prop-types'
import SubmitButton from '../button/SubmitButton'
import { StyledModal } from './styles/Modal.styles'

export const RulesModal = ({
  visible,
  onOk
}) => {
  return (
    <StyledModal
      title='Rules'
      visible={visible}
      closable={false}
      maskClosable={false}
      footer={<SubmitButton onClick={onOk} />}
    >
      <p>Can you name all the Star Wars characters?</p>
      <p>You will have two minutes to name as many characters as you can.</p>
      <p>10 points if you can name the character without asking for aditional information.</p>
      <p>5 points if you name the character with the given information.</p>
      <p>Wrong answers won't affect your score.</p>
      <p>You can only try to guess a character's name once.</p>
      <p>Are you prepared? Then use the force!</p>
    </StyledModal>
  )
}

RulesModal.propTypes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func.isRequired
}

RulesModal.defaultProps = {
  visible: false
}

export default RulesModal