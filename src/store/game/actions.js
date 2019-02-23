import {
  START_GAME,
  STOP_GAME,
  SET_TIME,
  SET_SCORE
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
