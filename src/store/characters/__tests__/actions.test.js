import * as actions from '../actions'
import * as types from '../constants'

describe('characters actions', () => {
  describe('fetchCharacters', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.FETCH_CHARACTERS,
        payload: 'mock'
      }

      const actual = actions.fetchCharacters('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchCharactersSuccess', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.FETCH_CHARACTERS_SUCCESS,
        payload: 'mock'
      }

      const actual = actions.fetchCharactersSuccess('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchCharactersFailure', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.FETCH_CHARACTERS_FAILURE,
        payload: 'mock'
      }

      const actual = actions.fetchCharactersFailure('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchCharacter', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.FETCH_CHARACTER,
        payload: 1
      }

      const actual = actions.fetchCharacter(1)

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchCharacterSuccess', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.FETCH_CHARACTER_SUCCESS,
        payload: 'mock'
      }

      const actual = actions.fetchCharacterSuccess('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('fetchCharacterFailure', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.FETCH_CHARACTER_FAILURE,
        payload: 'mock'
      }

      const actual = actions.fetchCharacterFailure('mock')

      expect(actual).toEqual(expected)
    })
  })
})
