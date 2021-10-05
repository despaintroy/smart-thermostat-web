import React from 'react'

import { Button, Card } from 'react-bootstrap'
import { signOut } from 'ts/services/auth'

import PasswordForm from './PasswordForm'
import ProfileForm from './ProfileForm'

function Settings(): React.ReactElement {
	return (
		<>
			<h1>Settings</h1>
			<Card className='content-card'>
				<Card.Header>Account</Card.Header>
				<Card.Body>
					<ProfileForm />
				</Card.Body>
			</Card>

			<Card className='content-card mt-4'>
				<Card.Header>Change Password</Card.Header>
				<Card.Body>
					<PasswordForm />
				</Card.Body>
			</Card>

			<hr className='mt-5 mb-3' />
			<Button variant='secondary' className='w-100' onClick={signOut}>
				Sign Out &nbsp;&rarr;
			</Button>
			<Button
				variant='outline-secondary'
				className='w-100 mt-2'
				onClick={(): void => location.reload()}
			>
				Reload App
			</Button>
		</>
	)
}

export default Settings
