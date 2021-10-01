import 'scss/global.scss'

import React from 'react'

import Button from 'react-bootstrap/Button'
import { signIn } from 'ts/services/auth'

function AppUnauthorized(): React.ReactElement {
	return (
		<div className='AppUnauthorized'>
			<header className='App-header'>
				<p>You are signed out.</p>
				<Button variant='secondary' onClick={signIn}>
					Sign In
				</Button>
			</header>
		</div>
	)
}

export default AppUnauthorized
