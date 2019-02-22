import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Popover, Input } from 'antd'
import { StyledCharacterCard, Image } from './styles/Card.styles'

export class CharacterCard extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired
  }

  state = {
    input: ''
  }

  render () {
    const {
      onDetails
    } = this.props

    return (
      <StyledCharacterCard
        title={this.renderImage()}
        bordered={false}
      >
        <Popover
          trigger='click'
          placement='topLeft'
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
          onClick={onDetails}
        />
      </StyledCharacterCard>
    )
  }

  renderImage = () => {
    const { image } = this.props
    return (
      <Image src={image} />
    )
  }

  renderInput = () => {
    return (
      <Input.Search
        placeholder='My name is ...'
        onChange={input => this.setState({ input })}
      />
    )
  }
}

export default CharacterCard
