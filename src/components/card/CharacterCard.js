import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Popover } from 'antd'
import CharacterModal from '../modal/CharacterModal'
import SearchInput from '../input/SearchInput'
import { StyledCharacterCard, Image } from './styles/Card.styles'

export class CharacterCard extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired
  }

  static defaultProps = {
    character: {}
  }

  state = {
    input: '',
    isModalVisible: false
  }

  render () {
    const { isModalVisible } = this.state
    const { character } = this.props

    return (
      <StyledCharacterCard
        title={character.image && <Image src={character.image} />}
        bordered={false}
      >
        <Popover
          trigger='hover'
          content={this.renderInput()}
        >
          <Button
            type='primary'
            icon='question'
          />
        </Popover>
        <Button
          type='primary'
          icon='ellipsis'
          onClick={this.toggleModal}
        />
        <CharacterModal
          visible={isModalVisible}
          toggle={this.toggleModal}
          character={character}
          button={this.renderInput()}
        />
      </StyledCharacterCard>
    )
  }

  renderInput = () => {
    return (
      <SearchInput
        onSearch={() => window.alert('search')}
        error=''
      />
    )
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
}

export default CharacterCard
