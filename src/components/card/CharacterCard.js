import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Spin, Button, Popover, message } from 'antd'
import { get } from 'lodash'
import CharacterModal from '../modal/CharacterModal'
import SearchInput from '../input/SearchInput'
import { StyledCharacterCard, Image } from './styles/Card.styles'
import { setScore } from '../../store/game/actions'

export class CharacterCard extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired,
    setScore: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
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
    characterScore: this.props.majorScore,
    error: '',
    success: ''
  }

  popoverInput = React.createRef()
  modalInput = React.createRef()

  componentDidUpdate (prevProps, prevState) {
    !prevState.isModalVisible &&
      this.state.isModalVisible &&
      this.focusInput(this.modalInput) &&
      this.setState({ characterScore: this.props.minorScore })
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
            url={get(character, 'url')}
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
    const { characterScore } = this.state
    const { score, setScore } = this.props
    message.success(`+${characterScore} points: The force is strong with you!`)
    setScore(score + characterScore)
  }

  handleFailure = () => {
    message.error('It\'s a trap!')
    setTimeout(() => this.setState({ isModalVisible: false }), 1200)
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
}

const mapStateToProps = ({ game }) => ({
  score: game.score
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setScore
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard)
