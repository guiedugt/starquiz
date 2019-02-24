import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import ScoreForm from '../form/ScoreForm'
import ScoreTable from '../table/ScoreTable'
import { StyledModal } from './styles/Modal.styles'

export class ScoreModal extends Component {
  static propTypes = {
    visible: PropTypes.bool
  }

  static defaultProps = {
    visible: false
  }

  state = {
    key: '1',
    savedScore: false
  }

  render () {
    const {
      key,
      savedScore
    } = this.state
    const {
      visible,
      score
    } = this.props

    return (
      <StyledModal
        title='Score'
        visible={visible}
        closable={false}
        maskClosable={false}
        footer={null}
      >
        <Tabs
          activeKey={key}
          onChange={key => !savedScore && this.setState({ key })}
        >
          <Tabs.TabPane
            disabled={savedScore}
            tab='Submit score'
            key='1'
          >
            <h2>You Scored {score} points!</h2>
            <p>Fill in your info to save the score:</p>
            <ScoreForm onSubmit={() => this.setState({ savedScore: true, key: '2' })} />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab='Leaderboards'
            key='2'
          >
            <h2>Thanks for Playing!</h2>
            <ScoreTable />
          </Tabs.TabPane>
        </Tabs>
      </StyledModal>
    )
  }
}

export default ScoreModal
