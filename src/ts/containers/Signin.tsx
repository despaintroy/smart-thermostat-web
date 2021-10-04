import React, { FormEvent, useState } from 'react'

import { Alert, Card, Form } from 'react-bootstrap'
import LoadingButton from 'ts/components/LoadingButton'
import { signIn } from 'ts/services/auth'

export default function SignIn(): React.ReactElement {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorText, setErrorText] = useState<string>()
	const [isLoading, setIsLoading] = useState(false)

	const submit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setErrorText('')

		if (!email || !password) setErrorText('Please enter all required fields')
		else {
			setIsLoading(true)
			signIn(email, password).catch(() => {
				setIsLoading(false)
				setErrorText('Could not sign in')
			})
		}
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
								onChange={(e): void => setEmail(e.target.value)}
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
						<LoadingButton
							type='submit'
							className='mt-3 w-100'
							buttonText='Sign In'
							showLoading={isLoading}
						/>
					</Form>
				</Card.Body>
			</Card>
		</>
	)
}
