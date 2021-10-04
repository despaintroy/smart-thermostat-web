import 'scss/global.scss'

import React from 'react'

import Navigation from 'Navigation'
import { Container } from 'react-bootstrap'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from 'ts/containers/Dashboard'
import Schedule from 'ts/containers/Schedule'
import Settings from 'ts/containers/Settings/Settings'
import Paths from 'ts/utils/paths'

function App(): React.ReactElement {
	return (
		<div className='App'>
			<HashRouter basename='/'>
				<Navigation />
				<Switch>
					<Container>
						<Route exact path={Paths.dashboard} component={Dashboard} />
						<Route exact path={Paths.schedule} component={Schedule} />
						<Route exact path={Paths.settings} component={Settings} />

						{/* Default redirect */}
						<Redirect push to={Paths.dashboard} />
					</Container>
				</Switch>
			</HashRouter>
		</div>
	)
}

export default App
