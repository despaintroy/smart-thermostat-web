import 'scss/global.scss'

import React from 'react'

import Navigation from 'Navigation'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from 'ts/containers/Dashboard'
import Schedule from 'ts/containers/Schedule'
import Paths from 'ts/utils/paths'

function App(): React.ReactElement {
	return (
		<div className='App'>
			<Router>
				<Navigation />
				<Switch>
					<Container>
						<Route exact path={Paths.dashboard} component={Dashboard} />
						<Route exact path={Paths.schedule} component={Schedule} />
					</Container>
				</Switch>
			</Router>
		</div>
	)
}

export default App
