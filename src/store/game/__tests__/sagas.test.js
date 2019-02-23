import {
  runSaga
} from 'redux-saga'

// Import Actions
import * as actions from '../actions'

import {
  startGame
} from '../sagas'

const getArgFromCall = mockedFn => mockedFn.mock.calls[0][0]

function * startGameWithArgs () { yield startGame({ payload: 'mock' }) }

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
})
