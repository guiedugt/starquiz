import http from '../../utils/http'
import cse, { mapImages, getRandomImage } from '../../utils/cse'
import { mapPropsToData, getData } from '../../utils/httpHelpers'

const charactersEndpoint = '/people'

export const fetchCharacters = page => {
  const params = { page }
  return http
    .get(charactersEndpoint, { params })
    .then(mapPropsToData('count'))
}

export const fetchCharacter = url => {
  return http
    .get(url)
    .then(res => res.data)
}

export const populateCharacterRelationships = character => {
  const relationships = ['species', 'homeworld', 'films', 'starships', 'vehicles']
  return Promise.all(
    relationships.map(key => {
      const reqs = Array.isArray(character[key])
        ? Promise.all(character[key].map(getData))
        : getData(character[key])

      return reqs.then(rel => {
        rel.relationship = key
        return rel
      })
    })
  )
    .then(rels => {
      rels.forEach(rel => { character[rel.relationship] = rel })
      return character
    })
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
