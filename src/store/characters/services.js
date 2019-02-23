import http from '../../utils/http'
import cse, { mapImages, getRandomImage } from '../../utils/cse'
import { mapPropsToData } from '../../utils/httpHelpers'

const charactersEndpoint = '/people'

export const fetchCharacters = page => {
  const params = { page }
  return http
    .get(charactersEndpoint, { params })
    .then(mapPropsToData('count'))
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
