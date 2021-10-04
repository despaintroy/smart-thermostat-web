import 'scss/global.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { auth } from 'ts/services/firebase'
import { User } from 'ts/services/models'
import { formatUser } from 'ts/services/user'

import App from './App'
import AppUnauthorized from './AppUnauthorized'

auth.onAuthStateChanged(fireUser => {
	const user = formatUser(fireUser) as User

	if (user) {
		ReactDOM.render(
			<React.StrictMode>
				<App user={user} />
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
