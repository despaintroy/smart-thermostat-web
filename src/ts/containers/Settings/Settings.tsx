import React from 'react'

import { Button } from 'react-bootstrap'

import ProfileForm from './ProfileForm'

function Settings(): React.ReactElement {
	return (
		<>
			<h1>Settings</h1>
			<h3>Account</h3>
			<ProfileForm />
			<hr className='mt-5 mb-3' />
			<Button
				variant='dark'
				className='w-100'
				onClick={(): void => location.reload()}
			>
				Reload App
			</Button>
		</>
	)
}

export default Settings
