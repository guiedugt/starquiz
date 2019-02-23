import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header'
import RulesModal from '../components/modal/RulesModal'
import CharacterList from '../components/list/CharacterList'
import { StyledHomePage } from './styles/Page.styles'
import { startGame } from '../store/game/actions'
import { fetchCharacters } from '../store/characters/actions'

export class HomePage extends Component {
  componentDidMount () {
    const { characters, fetchCharacters } = this.props
    const page = (characters.length / 10) + 1
    fetchCharacters(page)
  }

  render () {
    const {
      gameStarted,
      gameFinished,
      time,
      score,
      characters,
      loading,
      startGame,
      fetchCharacters
    } = this.props

    return (
      <StyledHomePage blur={!gameStarted || gameFinished}>
        <Header
          time={time}
          score={score}
        />
        <RulesModal
          visible={!gameStarted}
          onOk={startGame}
        />
        <CharacterList
          scrollParentRef={this.page}
          data={characters}
          loading={loading}
          fetch={fetchCharacters}
        />
      </StyledHomePage>
    )
  }
}

const mapStateToProps = ({ game, characters }) => ({
  gameStarted: game.gameStarted,
  gameFinished: game.gameFinished,
  time: game.time,
  score: game.score,
  characters: characters.items,
  loading: characters.loading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    startGame,
    fetchCharacters
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
