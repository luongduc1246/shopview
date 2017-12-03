import { combineReducers } from 'redux'
import language from './langReducer.js'
import displayScreen from './screenReducer.js'
import infoNews from './infoNewsReducer.js'
const todoApp = combineReducers({
  language,displayScreen,infoNews
})

export default todoApp
