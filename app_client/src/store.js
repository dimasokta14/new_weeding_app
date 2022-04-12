import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { getFirebase} from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import firebase from 'firebase'
import 'firebase/auth'

import {config} from './configdb'
import rootReducer from './reducers'

firebase.initializeApp(config)
firebase.firestore()

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(config)
  )  
)

export default store