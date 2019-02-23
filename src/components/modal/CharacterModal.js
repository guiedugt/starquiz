import React from 'react'
import PropTypes from 'prop-types'
import { StyledModal, Group, Image, Item } from './styles/Modal.styles'

export const CharacterModal = ({
  visible,
  toggle,
  button,
  character
}) => {
  return (
    <StyledModal
      title='Details'
      visible={visible}
      onCancel={toggle}
      footer={button}
    >
      <Group>
        {character.image && <Image src={character.image} />}
      </Group>
      <Group>
        <Item label='label'>item</Item>
        <Item label='label'>item</Item>
        <Item label='label'>item</Item>
        <Item label='label'>item</Item>
        <Item label='label'>item</Item>
      </Group>
    </StyledModal>
  )
}

CharacterModal.propTypes = {
  visible: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  button: PropTypes.node,
  character: PropTypes.object.isRequired
}

CharacterModal.defaultProps = {
  visible: false,
  button: null,
  character: {}
}

export default CharacterModal
