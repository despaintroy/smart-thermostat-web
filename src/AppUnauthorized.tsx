import 'scss/unauthorized.scss'

import React from 'react'

import Container from 'react-bootstrap/Container'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import SignIn from 'ts/containers/Signin'
import Paths from 'ts/utils/paths'

function AppUnauthorized(): React.ReactElement {
	return (
		<div className='app-unauthorized'>
			<Container>
				<HashRouter basename='/'>
					<Switch>
						<Container>
							<Route exact path={Paths.signIn} component={SignIn} />

							{/* Default redirect */}
							<Redirect push to={Paths.signIn} />
						</Container>
					</Switch>
				</HashRouter>
			</Container>
		</div>
	)
}

export default AppUnauthorized
