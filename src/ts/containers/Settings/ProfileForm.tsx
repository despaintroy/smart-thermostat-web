import React, {
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'

import { UserContext } from 'App'
import { Form } from 'react-bootstrap'
import LoadingButton from 'ts/components/LoadingButton'
import { updateEmail, updateName } from 'ts/services/user'

function ProfileForm(): React.ReactElement {
	const { user, updateUser } = useContext(UserContext)
	const nameField = useRef<HTMLInputElement>(null)
	const emailField = useRef<HTMLInputElement>(null)

	const [loadingCount, setLoadingCount] = useState<number>(0)
	const [isUpdating, setIsUpdating] = useState(false)
	const [hasChanged, setHasChanged] = useState(false)

	useEffect(() => setIsUpdating(loadingCount > 0), [loadingCount])

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
			setLoadingCount(lock => ++lock)
			updateName(newName)
				.then(() => updateUser())
				.catch(e => console.error(e))
				.finally(() => setLoadingCount(lock => --lock))
		}

		if (newEmail) {
			setLoadingCount(lock => ++lock)
			updateEmail(newEmail)
				.then(() => updateUser())
				.catch(e => console.error(e.message))
				.finally(() => setLoadingCount(lock => --lock))
		}
	}

	return (
		<Form onSubmit={submit}>
			<Form.Group>
				<Form.Label>Name</Form.Label>
				<Form.Control
					ref={nameField}
					type='text'
					defaultValue={user.name || ''}
					onChange={changed}
					disabled={isUpdating}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control
					ref={emailField}
					type='email'
					defaultValue={user.email || ''}
					onChange={changed}
					disabled={isUpdating}
				/>
				<Form.Text>This email used for account sign in</Form.Text>
			</Form.Group>
			<LoadingButton
				className='mt-3 w-100'
				buttonText='Save Changes'
				showLoading={isUpdating}
				hidden={!hasChanged}
				type='submit'
			/>
		</Form>
	)
}

export default ProfileForm
