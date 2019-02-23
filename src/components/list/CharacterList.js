import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import CharacterCard from '../card/CharacterCard'
import { StyledCharacterList } from './styles/List.styles'

export const CharacterList = ({ data }) => {
  return (
    <StyledCharacterList
      split={false}
      dataSource={data}
      grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
      renderItem={character => (
        <List.Item>
          <CharacterCard character={character} />
        </List.Item>
      )}
    />
  )
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired
}

CharacterList.defaultProps = {
  data: []
}

export default CharacterList
