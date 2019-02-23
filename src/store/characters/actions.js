import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from './constants'

export const fetchCharacters = query => ({
  type: FETCH_CHARACTERS,
  payload: query
})

export const fetchCharactersSuccess = characters => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters
})

export const fetchCharactersFailure = error => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error
})

export const fetchCharacter = id => ({
  type: FETCH_CHARACTER,
  payload: id
})

export const fetchCharacterSuccess = character => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: character
})

export const fetchCharacterFailure = error => ({
  type: FETCH_CHARACTER_FAILURE,
  payload: error
})
