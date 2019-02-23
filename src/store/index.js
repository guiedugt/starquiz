import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

// Reducers
import charactersReducers from './characters/reducers'

// Sagas
import charactersSagas from './characters/sagas'

// Configure Reducers
export const rootReducer = combineReducers({
  characters: charactersReducers
})

// Configure Sagas
export function * rootSaga () {
  yield all([
    charactersSagas()
  ])
}
