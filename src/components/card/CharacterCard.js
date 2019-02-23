import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spin, Button, Popover, message } from 'antd'
import { get } from 'lodash'
import CharacterModal from '../modal/CharacterModal'
import SearchInput from '../input/SearchInput'
import { StyledCharacterCard, Image } from './styles/Card.styles'

export class CharacterCard extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired,
    majorScore: PropTypes.number,
    minorScore: PropTypes.number
  }

  static defaultProps = {
    character: {},
    majorScore: 10,
    minorScore: 5
  }

  state = {
    isModalVisible: false,
    score: this.props.majorScore,
    error: '',
    success: ''
  }

  popoverInput = React.createRef()
  modalInput = React.createRef()

  componentDidUpdate (prevProps, prevState) {
    !prevState.isModalVisible &&
      this.state.isModalVisible &&
      this.focusInput(this.modalInput) &&
      this.setState({ score: this.props.minorScore })
  }

  render () {
    const { isModalVisible } = this.state
    const { character } = this.props

    return (
      <Spin spinning={!get(character, 'image')}>
        <StyledCharacterCard
          title={this.renderImage()}
          bordered={false}
        >
          <Popover
            trigger='click'
            content={this.renderInput('popoverInput')}
            onVisibleChange={visible => visible && this.focusInput(this.popoverInput)}
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
            button={this.renderInput('modalInput')}
          />
        </StyledCharacterCard>
      </Spin>
    )
  }

  renderImage = () => {
    const url = get(this, 'props.character.image.url')
    return (
      <Image
        src={url}
        onClick={this.toggleModal}
      />
    )
  }

  renderInput = ref => {
    return (
      <SearchInput
        ref={this[ref]}
        onSearch={this.handleSearch}
        error={this.state.error}
        success={this.state.success}
      />
    )
  }

  focusInput = (ref) => {
    return setTimeout(() => ref.current.input.focus(), 400)
  }

  handleSearch = input => {
    const { name } = this.props.character
    const formatted = input => input.trim().toLowerCase().replace(/[^a-z0-9]/gi, '')
    formatted(input).includes(formatted(name))
      ? this.setState({ success: `Right! I'm ${name}` }, this.handleSuccess)
      : this.setState({ error: `Wrong! I'm ${name}` }, this.handleFailure)
  }

  handleSuccess = () => {
    message.success(`+${this.state.score} points: The force is strong with you!`)
  }

  handleFailure = () => {
    message.error('It\'s a trap!')
    setTimeout(() => this.setState({ isModalVisible: false }), 1200)
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
}

export default CharacterCard
