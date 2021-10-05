import React, { FormEvent, useRef, useState } from 'react'

import { Alert, Form } from 'react-bootstrap'
import LoadingButton from 'ts/components/LoadingButton'
import { getMessage, requiresReAuth } from 'ts/services/errors'
import { updatePassword } from 'ts/services/user'

function PasswordForm(): React.ReactElement {
	const p1Field = useRef<HTMLInputElement>(null)
	const p2Field = useRef<HTMLInputElement>(null)

	const [isUpdating, setIsUpdating] = useState(false)
	const [readySubmit, setReadySubmit] = useState(false)
	const [errorText, setErrorText] = useState<string>()

	const changed = (): void => {
		const ready = !!p1Field.current?.value && !!p2Field.current?.value
		!ready && setErrorText('')
		setReadySubmit(ready)
	}

	const submit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setIsUpdating(true)
		setErrorText('')

		const p1 = p1Field.current?.value
		const p2 = p2Field.current?.value

		if (p1 && p1 === p2) {
			updatePassword(p1)
				.then(() => (e.target as HTMLFormElement).reset())
				.catch(e => {
					if (requiresReAuth(e)) console.log('SIGN IN AGAIN')
					setErrorText(getMessage(e))
				})
				.finally(() => setIsUpdating(false))
		} else {
			setErrorText('Passwords do not match')
			setIsUpdating(false)
		}
	}

	return (
		<Form onSubmit={submit}>
			<Form.Group>
				<Form.Label>New Password</Form.Label>
				<Form.Control
					ref={p1Field}
					type='password'
					onChange={changed}
					disabled={isUpdating}
					placeholder='New Password'
				/>
				<Form.Control
					ref={p2Field}
					type='password'
					onChange={changed}
					disabled={isUpdating}
					placeholder='Confirm New Password'
					className='mt-2'
				/>
			</Form.Group>
			{errorText && (
				<Alert className='mt-2 mb-0' variant='danger'>
					{errorText}
				</Alert>
			)}
			<LoadingButton
				className='mt-3 w-100'
				buttonText='Change Password'
				showLoading={isUpdating}
				hidden={!readySubmit}
				type='submit'
			/>
		</Form>
	)
}

export default PasswordForm
