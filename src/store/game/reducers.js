import createReducer from '../createReducer'
import {
  START_GAME,
  STOP_GAME,
  SET_TIME
} from './constants'

const initialState = {
  isPlaying: false
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
  })
})
