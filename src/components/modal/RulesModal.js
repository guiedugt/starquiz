import React from 'react'
import PropTypes from 'prop-types'
import { RULES } from '../../utils/constants'
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
      {RULES.map(rule => <p>{rule}</p>)}
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
