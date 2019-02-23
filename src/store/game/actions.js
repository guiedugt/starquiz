import {
  START_GAME,
  STOP_GAME,
  SET_TIME
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
