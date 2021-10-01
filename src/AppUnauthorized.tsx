import 'scss/unauthorized.scss'

import React from 'react'

import Container from 'react-bootstrap/Container'
import SignIn from 'ts/containers/Signin'

function AppUnauthorized(): React.ReactElement {
	return (
		<div className='app-unauthorized'>
			<Container>
				<SignIn />
			</Container>
		</div>
	)
}

export default AppUnauthorized
