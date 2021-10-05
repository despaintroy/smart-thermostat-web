import React from 'react'

import { Card } from 'react-bootstrap'
import SignInForm from 'ts/components/forms/SignInForm'

export default function SignIn(): React.ReactElement {
	return (
		<Card className='signin-card shadow mx-auto'>
			<Card.Header>Sign In</Card.Header>
			<Card.Body>
				<SignInForm />
			</Card.Body>
		</Card>
	)
}
