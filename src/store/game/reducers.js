import createReducer from '../createReducer'
import {
  START_GAME,
  STOP_GAME,
  SET_TIME,
  SET_SCORE,
  SAVE_SCORE,
  SAVE_SCORE_SUCCESS,
  SAVE_SCORE_FAILURE,
  GET_SCORES,
  GET_SCORES_SUCCESS,
  GET_SCORES_FAILURE
} from './constants'

const initialState = {
  gameStarted: false,
  gameFinished: false,
  scoreSaved: false,
  time: 120,
  score: 0,
  scores: [],
  gameInfo: null
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
  }),
  [SAVE_SCORE]: (state, action) => ({
    ...state,
    gameInfo: action.payload,
    error: initialState.error
  }),
  [SAVE_SCORE_SUCCESS]: (state, action) => ({
    ...state,
    scoreSaved: true,
    scores: action.payload,
    error: initialState.error
  }),
  [SAVE_SCORE_FAILURE]: (state, action) => ({
    ...state,
    scoreSaved: false,
    error: action.payload
  }),
  [GET_SCORES]: (state, action) => ({
    ...state,
    scores: initialState.scores,
    error: initialState.error
  }),
  [GET_SCORES_SUCCESS]: (state, action) => ({
    ...state,
    scores: action.payload,
    error: initialState.error
  }),
  [GET_SCORES_FAILURE]: (state, action) => ({
    ...state,
    scores: initialState.scores,
    error: action.payload
  })
})
