import React from 'react'
import PropTypes from 'prop-types'
import { List, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import CharacterCard from '../card/CharacterCard'
import { StyledCharacterList, Loading } from './styles/List.styles'

export const CharacterList = ({
  data,
  loading,
  fetch
}) => {
  const hasMore = data.length < data.count

  return (
    <StyledCharacterList>
      <InfiniteScroll
        pageStart={1}
        loadMore={!loading && fetch}
        hasMore={hasMore}
        useWindow={false}
      >
        <List
          locale={{ emptyText: <Spin /> }}
          dataSource={data}
          split={false}
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
          renderItem={character => (
            <List.Item>
              <CharacterCard character={character} />
            </List.Item>
          )}
        >
          {loading && hasMore && <Loading />}
        </List>
      </InfiniteScroll>
    </StyledCharacterList>
  )
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  fetch: PropTypes.func,
  loading: PropTypes.bool
}

CharacterList.defaultProps = {
  data: [],
  loading: false
}

export default CharacterList
