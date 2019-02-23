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
    isModalVisible: false,
    error: ''
  }

  render () {
    const { isModalVisible } = this.state
    const { character } = this.props

    return (
      <StyledCharacterCard
        title={this.renderImage()}
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

  renderImage = () => {
    const { character } = this.props
    return character.image &&
      <Image
        src={character.image.url}
        onClick={this.toggleModal}
      />
  }

  renderInput = () => {
    return (
      <SearchInput
        onSearch={this.handleSearch}
        error={this.state.error}
      />
    )
  }

  handleSearch = input => {
    const formatted = input => input.trim().toLowerCase().replace(/[^a-z0-9]/gi, '')
    formatted(input).includes(formatted(this.props.character.name))
      ? window.alert('success!')
      : this.setState({ error: `Nope. It's not ${input}` })
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
}

export default CharacterCard
