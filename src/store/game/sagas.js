import { eventChannel, END } from 'redux-saga'
import { call, all, takeLatest, put, select, takeEvery } from 'redux-saga/effects'

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

// Watchers
export function * watchStartGame () {
  yield takeLatest(types.START_GAME, startGame)
}

export default function * () {
  yield all([
    watchStartGame()
  ])
}
