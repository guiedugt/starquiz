import createReducer from '../createReducer'
import {
  START_GAME,
  STOP_GAME,
  SET_TIME,
  SET_SCORE
} from './constants'

const initialState = {
  isPlaying: false,
  time: 200,
  score: 0
}

export default createReducer(initialState, {
  [START_GAME]: (state, action) => ({
    ...state,
    isPlaying: true
  }),
  [STOP_GAME]: (state, action) => ({
    ...state,
    isPlaying: false
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
