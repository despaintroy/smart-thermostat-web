import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebase'

export const signIn = (email: string, password: string): Promise<void> => {
	return signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			return Promise.resolve()
		})
		.catch(error => {
			console.log('Error Signing In')
			console.log(error.code)
			console.log(error.message)
			return Promise.reject()
		})
}

export const signOut = (): void => {
	auth.signOut()
}
