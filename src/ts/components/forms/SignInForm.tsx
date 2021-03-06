import React, { FormEvent, useState } from 'react'

import { Alert, Form } from 'react-bootstrap'
import LoadingButton from 'ts/components/LoadingButton'
import { signIn } from 'ts/services/auth'
import { getMessage } from 'ts/services/errors'

export default function SignInForm(): React.ReactElement {
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
			signIn(email, password).catch(e => {
				setErrorText(getMessage(e))
				setIsLoading(false)
			})
		}
	}

	return (
		<Form onSubmit={submit}>
			<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					onChange={(e): void => setEmail(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					onChange={(e): void => setPassword(e.target.value)}
				/>
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
	)
}
