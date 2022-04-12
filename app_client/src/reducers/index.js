import authReducer from "./auth";
import tamuReducer from './doc'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  tamu: tamuReducer,
  firebase: firebaseReducer
})

export default rootReducer