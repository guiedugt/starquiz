import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StarWarsCrawl from '../components/crawl/StarWarsCrawl'
import OpeningTitle from '../components/title/OpeningTitle'
import SkipButton from '../components/button/SkipButton'
import starWarsIntro from '../assets/star-wars-intro.mp3'
import history from '../routes/history'
import { RULES } from '../utils/constants'
import { fetchCharacters } from '../store/characters/actions'

export class PublicPage extends Component {
  componentDidMount () {
    this.props.fetchCharacters(1)
    setTimeout(() => history.push('/home'), 27000)
  }

  render () {
    return (
      <>
        <StarWarsCrawl title='Star Quiz' >
          {RULES.map(rule => <p key={rule}>{rule}</p>)}
        </StarWarsCrawl>
        <iframe src={starWarsIntro} title='autoplay' allow='autoplay' style={{ display: 'none' }} />
        <OpeningTitle>Star Quiz</OpeningTitle>
        <SkipButton />
      </>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchCharacters
  }, dispatch)

export default connect(null, mapDispatchToProps)(PublicPage)
