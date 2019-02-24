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

export const startGame = () => ({
  type: START_GAME
})

export const stopGame = () => ({
  type: STOP_GAME
})

export const setTime = time => ({
  type: SET_TIME,
  payload: time
})

export const setScore = score => ({
  type: SET_SCORE,
  payload: score
})

export const saveScore = gameInfo => ({
  type: SAVE_SCORE,
  payload: gameInfo
})

export const saveScoreSuccess = scores => ({
  type: SAVE_SCORE_SUCCESS,
  payload: scores
})

export const saveScoreFailure = error => ({
  type: SAVE_SCORE_FAILURE,
  payload: error
})

export const getScores = () => ({
  type: GET_SCORES
})

export const getScoresSuccess = scores => ({
  type: GET_SCORES_SUCCESS,
  payload: scores
})

export const getScoresFailure = error => ({
  type: GET_SCORES_FAILURE,
  payload: error
})
