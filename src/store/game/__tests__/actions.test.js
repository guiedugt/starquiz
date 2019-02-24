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

  describe('setScore', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.SET_SCORE
      }

      const actual = actions.setScore()

      expect(actual).toEqual(expected)
    })
  })

  describe('saveScore', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.SAVE_SCORE,
        payload: 'mock'
      }

      const actual = actions.saveScore('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('saveScoreSuccess', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.SAVE_SCORE_SUCCESS,
        payload: 'mock'
      }

      const actual = actions.saveScoreSuccess('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('saveScoreFailure', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.SAVE_SCORE_FAILURE,
        payload: 'mock'
      }

      const actual = actions.saveScoreFailure('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('getScores', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.GET_SCORES
      }

      const actual = actions.getScores('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('getScoresSuccess', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.GET_SCORES_SUCCESS,
        payload: 'mock'
      }

      const actual = actions.getScoresSuccess('mock')

      expect(actual).toEqual(expected)
    })
  })

  describe('getScoresFailure', () => {
    it('Should return the expected value', () => {
      const expected = {
        type: types.GET_SCORES_FAILURE,
        payload: 'mock'
      }

      const actual = actions.getScoresFailure('mock')

      expect(actual).toEqual(expected)
    })
  })
})
