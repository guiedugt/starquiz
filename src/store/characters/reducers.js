import createReducer from '../createReducer'
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTER,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from './constants'

const initialState = {
  item: null,
  items: [],
  loading: false,
  error: ''
}

export default createReducer(initialState, {
  [FETCH_CHARACTERS]: (state, action) => ({
    ...state,
    loading: true,
    error: initialState.error
  }),
  [FETCH_CHARACTERS_SUCCESS]: (state, action) => ({
    ...state,
    items: action.payload,
    loading: false,
    error: initialState.error
  }),
  [FETCH_CHARACTERS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  [FETCH_CHARACTER]: (state, action) => ({
    ...state,
    item: initialState.item,
    loading: true,
    error: initialState.error
  }),
  [FETCH_CHARACTER_SUCCESS]: (state, action) => ({
    ...state,
    item: action.payload,
    loading: false,
    error: initialState.error
  }),
  [FETCH_CHARACTER_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
})
