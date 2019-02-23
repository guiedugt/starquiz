import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

// Reducers
import gameReducers from './game/reducers'
import charactersReducers from './characters/reducers'

// Sagas
import charactersSagas from './characters/sagas'

// Configure Reducers
export const rootReducer = combineReducers({
  game: gameReducers,
  characters: charactersReducers
})

// Configure Sagas
export function * rootSaga () {
  yield all([
    charactersSagas()
  ])
}
