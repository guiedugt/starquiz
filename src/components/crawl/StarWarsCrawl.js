import React from 'react'
import PropTypes from 'prop-types'
import { Container, Fade, Crawl, Title } from './styles/Crawl.styles'

export const StarWarsCrawl = ({
  title,
  duration,
  children
}) => {
  return (
    <>
      <Fade />
      <Container>
        <Crawl duration={duration}>
          <Title>{title}</Title>
          {children}
        </Crawl>
      </Container>
    </>
  )
}

StarWarsCrawl.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.number,
  children: PropTypes.node.isRequired
}

StarWarsCrawl.defaultProps = {
  title: '',
  duration: 60000
}

export default StarWarsCrawl
