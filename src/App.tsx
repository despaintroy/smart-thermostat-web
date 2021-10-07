import 'scss/global.scss'

import React, { Context, useState } from 'react'

import Navigation from 'Navigation'
import { Container } from 'react-bootstrap'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Dashboard from 'ts/containers/Dashboard'
import Schedule from 'ts/containers/Schedule'
import Settings from 'ts/containers/Settings/Settings'
import { User } from 'ts/services/models'
import { getUser } from 'ts/services/user'
import Paths from 'ts/utils/paths'

export let UserContext: Context<{ user: User; updateUser: () => void }>

function App(props: { user: User }): React.ReactElement {
	const [user, setUser] = useState(props.user)

	const updateUser = (): void => {
		const newUser = getUser()
		newUser && setUser(newUser)
	}

	UserContext = React.createContext({ user, updateUser })

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			<div className='app'>
				<HashRouter basename='/'>
					<Navigation />
					<Switch>
						<Container className='pb-5'>
							<Route exact path={Paths.dashboard} component={Dashboard} />
							<Route exact path={Paths.schedule} component={Schedule} />
							<Route exact path={Paths.settings} component={Settings} />

							{/* Default redirect */}
							<Route exact path={Paths.signIn}>
								<Redirect to={Paths.dashboard} />
							</Route>
							<Route exact path='/'>
								<Redirect to={Paths.dashboard} />
							</Route>
						</Container>
					</Switch>
				</HashRouter>
			</div>
		</UserContext.Provider>
	)
}

export default App
