import 'scss/global.scss'

import React, { Context } from 'react'
import ReactDOM from 'react-dom'

import { auth } from 'ts/services/firebase'
import { User } from 'ts/services/models'
import { formatUser } from 'ts/services/user'

import App from './App'
import AppUnauthorized from './AppUnauthorized'

export let UserContext: Context<User>

auth.onAuthStateChanged(fireUser => {
	const user = formatUser(fireUser) as User
	UserContext = React.createContext(user)

	if (user) {
		ReactDOM.render(
			<React.StrictMode>
				<UserContext.Provider value={user}>
					<App />
				</UserContext.Provider>
			</React.StrictMode>,
			document.getElementById('root')
		)
	} else {
		ReactDOM.render(
			<React.StrictMode>
				<AppUnauthorized />
			</React.StrictMode>,
			document.getElementById('root')
		)
	}
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
