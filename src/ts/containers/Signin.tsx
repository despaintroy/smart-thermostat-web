import React, { FormEvent, useState } from 'react'

import { Alert, Button, Card, Form } from 'react-bootstrap'
import { signIn } from 'ts/services/auth'

export default function SignIn(): React.ReactElement {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errorText, setErrorText] = useState<string>()

	const submit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()

		if (!username || !password) setErrorText('Please enter all required fields')
		else signIn()
	}

	return (
		<>
			<Card className='signin-card shadow mx-auto'>
				<Card.Header>Sign In</Card.Header>
				<Card.Body>
					{/* <img src={process.env.PUBLIC_URL + '/logo-primary.png'} /> */}
					<Form onSubmit={submit}>
						<Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='text'
								onChange={(e): void => setUsername(e.target.value)}
								isInvalid={false}
							/>
							<Form.Control.Feedback type='invalid'>
								{/* {feedback.username} */}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								onChange={(e): void => setPassword(e.target.value)}
								isInvalid={false}
							/>
							<Form.Control.Feedback type='invalid'>
								{/* {feedback.password} */}
							</Form.Control.Feedback>
						</Form.Group>
						{errorText && (
							<Alert variant='secondary' className='mt-3'>
								{errorText}
							</Alert>
						)}
						<Button type='submit' className='w-100 mt-3'>
							Sign In
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
	)
}
