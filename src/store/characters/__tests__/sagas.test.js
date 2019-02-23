import {
  runSaga
} from 'redux-saga'

// Import Actions
import * as actions from '../actions'

import * as services from '../services'

import {
  fetchCharacters,
  fetchCharacter
} from '../sagas'

const getArgFromCall = mockedFn => mockedFn.mock.calls[0][0]

function * fetchCharactersWithArgs () { yield fetchCharacters({ payload: 'mock' }) }
function * fetchCharacterWithArgs () { yield fetchCharacter({ payload: 'mock' }) }

describe('characters sagas', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('fetchCharacters saga function', () => {
    it('returns correct success action on success operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = { mock: 'mock' }

      jest
        .spyOn(services, 'fetchCharacters')
        .mockImplementation(() => Promise.resolve(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, fetchCharactersWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.fetchCharactersSuccess(successResultMock))
    })

    it('returns correct failure action on failure operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 'Failed to fetch characters'

      jest
        .spyOn(services, 'fetchCharacters')
        .mockImplementation(() => Promise.reject(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, fetchCharactersWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.fetchCharactersFailure(successResultMock))
    })
  })

  describe('fetchCharacter saga function', () => {
    it('returns correct success action on success operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = { mock: 'mock' }

      jest
        .spyOn(services, 'fetchCharacter')
        .mockImplementation(() => Promise.resolve(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, fetchCharacterWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.fetchCharacterSuccess(successResultMock))
    })

    it('returns correct failure action on failure operation', async () => {
      const dispatchMock = jest.fn()
      const successResultMock = 'Failed to fetch character'

      jest
        .spyOn(services, 'fetchCharacter')
        .mockImplementation(() => Promise.reject(successResultMock))

      await runSaga({
        dispatch: dispatchMock,
        getState: () => ({})
      }, fetchCharacterWithArgs).done

      const argOfFirstCall = getArgFromCall(dispatchMock)
      expect(argOfFirstCall).toEqual(actions.fetchCharacterFailure(successResultMock))
    })
  })
})
