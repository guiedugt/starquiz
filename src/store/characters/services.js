import http from '../../utils/http'
import cse, { mapImages, getRandomImage } from '../../utils/cse'

const charactersEndpoint = '/people'

export const fetchCharacters = (query = {}) => {
  const params = {
    page: query.page
  }
  return http
    .get(charactersEndpoint, { params })
    .then(res => res.data.results)
}

export const fetchCharacter = id => {
  return http
    .get(`${charactersEndpoint}/${id}`)
    .then(res => res.data)
}

export const populateCharacterImage = character => {
  const params = {
    q: `star wars ${character.name}`
  }
  return cse
    .get('/', { params })
    .then(mapImages)
    .then(getRandomImage)
    .then(image => ({ ...character, image }))
}
