import React, { useContext } from 'react'

import { UserContext } from 'index'

function Dashboard(): React.ReactElement {
	const user = useContext(UserContext)

	return (
		<>
			<h1>Dashboard</h1>
			<p>This is the dashboard page</p>
			<h2>User</h2>
			<p>Name: {user.name ?? '–'}</p>
			<p>Email: {user.email ?? '–'}</p>
			<p>Phone: {user.phone ?? '–'}</p>
		</>
	)
}

export default Dashboard
