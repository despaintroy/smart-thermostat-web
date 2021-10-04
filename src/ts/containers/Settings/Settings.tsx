import React, { FormEvent, useContext, useRef, useState } from 'react'

import { UserContext } from 'index'
import { Form } from 'react-bootstrap'
import LoadingButton from 'ts/components/LoadingButton'
import { updateEmail, updateName } from 'ts/services/user'

function Settings(): React.ReactElement {
	const [user, setUser] = useState(useContext(UserContext))
	const nameField = useRef<HTMLInputElement>(null)
	const emailField = useRef<HTMLInputElement>(null)

	const [updateLock, setUpdateLock] = useState<number>(0)
	const [hasChanged, setHasChanged] = useState(false)

	const changed = (): void =>
		setHasChanged(
			nameField.current?.value !== user.name ||
				emailField.current?.value !== user.email
		)

	const submit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()

		const newName = nameField.current?.value
		const newEmail = emailField.current?.value

		if (newName) {
			setUpdateLock(lock => ++lock)
			updateName(newName)
				.then(() =>
					setUser(user => {
						user.name = newName
						return { ...user }
					})
				)
				.catch(e => console.error(e))
				.finally(() => setUpdateLock(lock => --lock))
		}

		if (newEmail) {
			setUpdateLock(lock => ++lock)
			updateEmail(newEmail)
				.then(() =>
					setUser(user => {
						user.email = newEmail
						return { ...user }
					})
				)
				.catch(e => console.error(e.message))
				.finally(() => setUpdateLock(lock => --lock))
		}
	}

	return (
		<>
			<h1>Settings</h1>
			<h3>Account</h3>
			<Form onSubmit={submit}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						ref={nameField}
						type='text'
						defaultValue={user.name || ''}
						onChange={changed}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control
						ref={emailField}
						type='email'
						defaultValue={user.email || ''}
						onChange={changed}
					/>
					<Form.Text>This email used for account sign in</Form.Text>
				</Form.Group>
				<LoadingButton
					className='mt-3 w-100'
					buttonText='Save Changes'
					showLoading={updateLock > 0}
					disabled={!hasChanged}
					type='submit'
				/>
			</Form>
		</>
	)
}

export default Settings
