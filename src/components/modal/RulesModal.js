import React from 'react'
import PropTypes from 'prop-types'
import { RULES } from '../../utils/constants'
import SubmitButton from '../button/SubmitButton'
import { StyledModal } from './styles/Modal.styles'

const button = delegate => (
  <SubmitButton
    onClick={delegate}
  >
    Start
  </SubmitButton>
)

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
      footer={button(onOk)}
    >
      {RULES.map(rule => <p key={rule}>{rule}</p>)}
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
