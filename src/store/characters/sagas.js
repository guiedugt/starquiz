import { all, call, takeLatest, put, select } from 'redux-saga/effects'
import { message } from 'antd'

import * as actions from './actions'
import * as types from './constants'
import * as services from './services'

export function * fetchCharacters ({ payload }) {
  try {
    const newCharacters = yield call(services.fetchCharacters, payload)
    const oldCharacters = yield select(state => state.characters.items)
    const props = Object.keys(newCharacters).filter(key => isNaN(key))
    const characters = [...oldCharacters, ...newCharacters]
    props.forEach(prop => { characters[prop] = newCharacters[prop] })
    yield put(actions.fetchCharactersSuccess(characters))
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].image) continue
      characters[i] = yield call(services.populateCharacterImage, characters[i])
      yield put(actions.fetchCharactersSuccess([...characters]))
    }
  } catch (error) {
    const errorMessage = 'Failed to fetch characters'
    message.error(errorMessage)
    yield put(actions.fetchCharactersFailure(errorMessage))
  }
}

export function * fetchCharacter ({ payload }) {
  try {
    const character = yield call(services.fetchCharacter, payload)
    yield put(actions.fetchCharacterSuccess(character))
  } catch (error) {
    const errorMessage = 'Failed to fetch character'
    message.error(errorMessage)
    yield put(actions.fetchCharacterFailure(errorMessage))
  }
}

// Watchers
export function * watchFetchCharacters () {
  yield takeLatest(types.FETCH_CHARACTERS, fetchCharacters)
}

export function * watchFetchCharacter () {
  yield takeLatest(types.FETCH_CHARACTER, fetchCharacter)
}

export default function * () {
  yield all([
    watchFetchCharacters(),
    watchFetchCharacter()
  ])
}
