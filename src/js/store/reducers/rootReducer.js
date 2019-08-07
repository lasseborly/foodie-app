import { combineReducers } from 'redux'
import app from './reducer_app'
import basket from './reducer_basket'

export default combineReducers({ app, basket })