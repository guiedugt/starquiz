import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StyledTable } from './styles/Table.styles'
import { getScores } from '../../store/game/actions'

export class ScoreTable extends Component {
  componentDidMount () {
    const { scores, getScores } = this.props
    scores.length === 0 && getScores()
  }

  render () {
    const { scores } = this.props

    return (
      <StyledTable
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
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score'
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
