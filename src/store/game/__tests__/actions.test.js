import * as actions from '../actions'
import * as types from '../constants'

describe('game actions', () => {
  describe('startGame', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.START_GAME
      }

      const actual = actions.startGame()

      expect(actual).toEqual(expected)
    })
  })

  describe('stopGame', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.STOP_GAME
      }

      const actual = actions.stopGame()

      expect(actual).toEqual(expected)
    })
  })

  describe('setTime', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.SET_TIME
      }

      const actual = actions.setTime()

      expect(actual).toEqual(expected)
    })
  })
})
