import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import { get } from 'lodash'
import { StyledModal, Group, Image, Item } from './styles/Modal.styles'
import { fetchCharacter } from '../../store/characters/actions'

export class CharacterModal extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
    button: PropTypes.node,
    url: PropTypes.string.isRequired,
    character: PropTypes.object,
    fetchCharacter: PropTypes.func.isRequired
  }

  static defaultProps = {
    visible: false,
    button: null
  }

  componentDidUpdate (prevProps) {
    const { visible, fetchCharacter, url } = this.props
    !prevProps.visible && visible && fetchCharacter(url)
  }

  render () {
    const {
      visible,
      toggle,
      button,
      character
    } = this.props

    return (
      <StyledModal
        title='Details'
        visible={visible}
        onCancel={toggle}
        footer={button}
      >
        <Group>
          <Image src={get(character, 'image.url')} />
        </Group>
        <Group>
          <Item label='birth year'>
            {this.getProp('birth_year')}
          </Item>
          <Item label='eye color'>
            {this.getProp('eye_color')}
          </Item>
          <Item label='gender'>
            {this.getProp('gender')}
          </Item>
          <Item label='hair color'>
            {this.getProp('hair_color')}
          </Item>
          <Item label='height'>
            {this.getProp('height')}
          </Item>
          <Item label='mass'>
            {this.getProp('mass')}
          </Item>
          <Item label='skin color'>
            {this.getProp('skin_color')}
          </Item>
          <Item label='species'>
            {this.mapArrayProps(get(character, 'species'), 'name')}
          </Item>
          <Item label='homeworld'>
            {this.getProp('homeworld.name')}
          </Item>
          <Item label='films'>
            {this.mapArrayProps(get(character, 'films'), 'title')}
          </Item>
          <Item label='vehicles'>
            {this.mapArrayProps(get(character, 'vehicles'), 'name')}
          </Item>
          <Item label='starships'>
            {this.mapArrayProps(get(character, 'starships'), 'name')}
          </Item>
        </Group>
      </StyledModal>
    )
  }

  getProp = prop => {
    return get(this.props.character, prop) || <Spin size='small' />
  }

  mapArrayProps = (arr, prop) => {
    if (!arr || this.props.loading) return <Spin size='small' />
    return arr
      .map(item => item[prop])
      .filter(item => typeof item === 'string')
      .join(' | ') || 'None'
  }
}

const mapStateToProps = ({ characters }) => ({
  character: characters.item,
  loading: characters.loading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCharacter
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterModal)
