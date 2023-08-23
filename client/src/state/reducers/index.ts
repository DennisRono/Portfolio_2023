import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import modalReducer from './modalReducer'
import pathReducer from './pathReducer'

const allReducers = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
  path: pathReducer,
})

export default allReducers
