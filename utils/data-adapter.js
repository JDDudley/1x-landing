import * as firebase from 'firebase'
import * as JSData from 'js-data'
import { FirebaseAdapter } from 'js-data-firebase'
import { FirebaseAuthStore } from './firebase-auth-store'
import { Emitter } from './emitter'

let config = {
  apiKey: 'AIzaSyDSo9P5PjcuV5UsFH2wwvCkI2PNqdUFGm8',
  authDomain: 'x-tactical.firebaseapp.com',
  databaseURL: 'https://x-tactical.firebaseio.com',
  storageBucket: 'x-tactical.appspot.com',
  messagingSenderId: '801571924462'
}

const firebaseApp = firebase.initializeApp(config)
const authStore = new FirebaseAuthStore(firebaseApp)

export { authStore }
