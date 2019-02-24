import { eventChannel, END } from 'redux-saga'
import { call, all, takeLatest, put, select, takeEvery } from 'redux-saga/effects'
import { message } from 'antd'

import * as actions from './actions'
import * as types from './constants'

function countdown (secs) {
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      secs > 0 ? emitter(secs) : emitter(END)
      secs -= 1
    }, 1000)
    return () => clearInterval(iv)
  })
}

export function * startGame ({ payload }) {
  let time = yield select(state => state.game.time)
  const channel = yield call(countdown, time)
  yield takeEvery(channel, function * (secs) {
    yield put(actions.setTime(--time))
    if (time <= 0) yield put(actions.stopGame())
  })
}

export function * saveScore ({ payload }) {
  try {
    const scores = JSON.parse(localStorage.getItem('scores')) || []
    localStorage.setItem('scores', JSON.stringify([...scores, payload]))
    yield put(actions.saveScoreSuccess())
    message.success('Score saved successfuly')
  } catch (error) {
    const errorMessage = 'Failed to save score'
    message.error(errorMessage)
    yield put(actions.saveScoreFailure(errorMessage))
  }
}

export function * getScores ({ payload }) {
  try {
    const scores = JSON.parse(localStorage.getItem('scores')) || []
    yield put(actions.getScoresSuccess(scores))
  } catch (error) {
    const errorMessage = 'Failed to get scores'
    message.error(errorMessage)
    yield put(actions.getScoresFailure(errorMessage))
  }
}

// Watchers
export function * watchStartGame () {
  yield takeLatest(types.START_GAME, startGame)
}

export function * watchSaveScore () {
  yield takeLatest(types.SAVE_SCORE, saveScore)
}

export function * watchGetScores () {
  yield takeLatest(types.GET_SCORES, getScores)
}

export default function * () {
  yield all([
    watchStartGame(),
    watchSaveScore(),
    watchGetScores()
  ])
}
