import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header'
import RulesModal from '../components/modal/RulesModal'
import CharacterList from '../components/list/CharacterList'
import { StyledHomePage } from './styles/Page.styles'
import { fetchCharacters } from '../store/characters/actions'

export class HomePage extends Component {
  componentDidMount () {
    const { characters, fetchCharacters } = this.props
    const page = (characters.length / 10) + 1
    fetchCharacters(page)
  }

  render () {
    const {
      fetchCharacters,
      characters,
      loading
    } = this.props

    return (
      <StyledHomePage blur={0}>
        <Header time={120} score={300} />
        <RulesModal visible={false} onOk={() => window.alert('mock ok!')} />
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

const mapStateToProps = ({ characters }) => ({
  characters: characters.items,
  loading: characters.loading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCharacters
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
