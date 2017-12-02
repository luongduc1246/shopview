import { combineReducers } from 'redux'
import language from './langReducer.js'
import displayScreen from './screenReducer.js'
const todoApp = combineReducers({
  language,displayScreen
})

export default todoApp
