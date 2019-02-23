import createReducer from '../createReducer'
import {
  START_GAME,
  STOP_GAME
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
  })
})
