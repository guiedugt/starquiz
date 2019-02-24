import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyledScoreTable } from './styles/Table.styles'
import { getScores } from '../../store/game/actions'

export class ScoreTable extends Component {
  componentDidMount () {
    const { scores, getScores } = this.props
    scores.length === 0 && getScores()
  }

  render () {
    const { scores } = this.props

    return (
      <StyledScoreTable
        size='small'
        dataSource={scores}
        columns={this.getColumns()}
      />
    )
  }

  getColumns = () => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'name-col'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      className: 'email-col'
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      className: 'score-col'
    }
  ]
}

const mapStateToProps = ({ game }) => ({
  scores: game.scores
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getScores
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable)
