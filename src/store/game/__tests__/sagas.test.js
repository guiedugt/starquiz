import {
  runSaga
} from 'redux-saga'

// Import Actions
import * as actions from '../actions'

import {
  startGame,
  saveScore,
  getScores
} from '../sagas'

const getArgFromCall = mockedFn => mockedFn.mock.calls[0][0]

function * startGameWithArgs () { yield startGame({ payload: 'mock' }) }
function * saveScoreWithArgs () { yield saveScore({ payload: 'mock' }) }
function * getScoresWithArgs () { yield getScores({ payload: 'mock' }) }

describe('game sagas', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('game saga function', () => {
    it('returns correct action', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 119

      jest
        .spyOn(actions, 'setTime')
        .mockImplementation(() => Promise.resolve(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({
          game: {
            time: 120
          }
        })
      }, startGameWithArgs).done

      await new Promise(resolve => setTimeout(resolve, 1000))

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.setTime())
    })
  })

  describe('saveScore saga function', () => {
    it('returns correct success action on success operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = [{ mock: 'mock' }]

      jest
        .spyOn(Storage.prototype, 'setItem')
        .mockImplementation(() => successResultMock)

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, saveScoreWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.saveScoreSuccess(successResultMock))
    })

    it('returns correct failure action on failure operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 'Failed to save score'

      jest
        .spyOn(Storage.prototype, 'setItem')
        .mockImplementation(new Error(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, saveScoreWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.saveScoreFailure(successResultMock))
    })
  })

  describe('getScores saga function', () => {
    it('returns correct success action on success operation', async () => {
      const dispatchMock = jest.fn()
      const mockImplementation = '[{ "mock": "mock" }]'
      const successResultMock = [{ mock: 'mock' }]

      jest
        .spyOn(Storage.prototype, 'getItem')
        .mockImplementation(() => mockImplementation)

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, getScoresWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.getScoresSuccess(successResultMock))
    })

    it('returns correct failure action on failure operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 'Failed to get scores'

      jest
        .spyOn(Storage.prototype, 'getItem')
        .mockImplementation(new Error(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, getScoresWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.getScoresFailure(successResultMock))
    })
  })
})
