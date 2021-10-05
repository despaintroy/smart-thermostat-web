import React, {
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'

import { UserContext } from 'App'
import { Alert, Form } from 'react-bootstrap'
import LoadingButton from 'ts/components/LoadingButton'
import { getMessage } from 'ts/services/errors'
import { updateEmail, updateName } from 'ts/services/user'

function ProfileForm(): React.ReactElement {
	const { user, updateUser } = useContext(UserContext)
	const nameField = useRef<HTMLInputElement>(null)
	const emailField = useRef<HTMLInputElement>(null)

	const [loadingCount, setLoadingCount] = useState<number>(0)
	const [isUpdating, setIsUpdating] = useState(false)
	const [hasChanged, setHasChanged] = useState(false)
	const [errorText, setErrorText] = useState<string>()

	useEffect(() => setIsUpdating(loadingCount > 0), [loadingCount])

	const changed = (): void => {
		const changed: boolean =
			nameField.current?.value !== user.name ||
			emailField.current?.value !== user.email
		!changed && setErrorText('')
		setHasChanged(changed)
	}

	const submit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setErrorText('')

		const newName = nameField.current?.value
		const newEmail = emailField.current?.value

		if (newName && newName !== user.name) {
			setLoadingCount(lock => ++lock)
			updateName(newName)
				.then(() => {
					updateUser()
				})
				.catch(e => {
					setErrorText(getMessage(e))
				})
				.finally(() => setLoadingCount(lock => --lock))
		}

		if (newEmail !== undefined && newEmail !== user.email) {
			setLoadingCount(lock => ++lock)
			if (newEmail === '') {
				setErrorText('You must provide a valid email')
				setLoadingCount(lock => --lock)
				return
			}
			updateEmail(newEmail)
				.then(() => {
					updateUser()
				})
				.catch(e => {
					setErrorText(getMessage(e))
				})
				.finally(() => setLoadingCount(lock => --lock))
		}
	}

	return (
		<Form onSubmit={submit} noValidate>
			<Form.Group>
				<Form.Label>Name</Form.Label>
				<Form.Control
					ref={nameField}
					type='text'
					defaultValue={user.name || ''}
					placeholder='Name'
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
					placeholder='Email'
					onChange={changed}
					disabled={isUpdating}
				/>
				<Form.Text>This email used for account sign in</Form.Text>
			</Form.Group>
			{errorText && (
				<Alert className='mt-2 mb-0' variant='danger'>
					{errorText}
				</Alert>
			)}
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
