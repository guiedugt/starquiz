import createReducer from '../createReducer'
import {
  START_GAME,
  STOP_GAME,
  SET_TIME,
  SET_SCORE
} from './constants'

const initialState = {
  gameStarted: false,
  gameFinished: false,
  time: 120,
  score: 0
}

export default createReducer(initialState, {
  [START_GAME]: (state, action) => ({
    ...state,
    gameStarted: true
  }),
  [STOP_GAME]: (state, action) => ({
    ...state,
    gameFinished: true
  }),
  [SET_TIME]: (state, action) => ({
    ...state,
    time: action.payload
  }),
  [SET_SCORE]: (state, action) => ({
    ...state,
    score: action.payload
  })
})
