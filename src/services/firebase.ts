import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// These keys will be exposed on the client frontend, but this is safe
// Security is enforced through Firebase security rules
// See more: https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public/
const firebaseConfig = {
	apiKey: 'AIzaSyAEqiutxiK9K41-zYltwLMIxNjMZvAq014',
	authDomain: 'smart-thermostat-92710.firebaseapp.com',
	databaseURL: 'https://smart-thermostat-92710-default-rtdb.firebaseio.com',
	projectId: 'smart-thermostat-92710',
	storageBucket: 'smart-thermostat-92710.appspot.com',
	messagingSenderId: '31001839536',
	appId: '1:31001839536:web:b6b664ed296ae305f37875',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const database = getDatabase(firebaseApp)
