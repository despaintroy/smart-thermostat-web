import 'scss/global.scss'

import React from 'react'

import Button from 'react-bootstrap/Button'
import { signOut } from 'ts/services/auth'

function App(): React.ReactElement {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Signed in!</p>
				<Button variant='link' className='text-white' onClick={signOut}>
					Sign out
				</Button>
			</header>
		</div>
	)
}

export default App
