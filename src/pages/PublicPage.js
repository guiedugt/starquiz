import React, { Component } from 'react'
import StarWarsCrawl from '../components/crawl/StarWarsCrawl'
import OpeningTitle from '../components/title/OpeningTitle'
import starWarsIntro from '../assets/star-wars-intro.mp3'

export class PublicPage extends Component {
  componentDidMount () {
    const audio = new Audio(starWarsIntro)
    audio.play()
  }

  render () {
    return (
      <>
        <StarWarsCrawl title='Star Quiz' >
          <p>Can you name all the Star Wars characters?</p>
          <p>You will have two minutes to name as many characters as you can.</p>
          <p>10 points if you can name the character without asking for aditional information.</p>
          <p>5 points if you name the character with the given information.</p>
          <p>Wrong answers won't affect your score.</p>
          <p>You can only try to guess a character's name once.</p>
          <p>Are you prepared? Then use the force!</p>
        </StarWarsCrawl>
        <OpeningTitle>Star Quiz</OpeningTitle>
      </>
    )
  }
}

export default PublicPage
