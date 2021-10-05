import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebase'

export const signIn = (email: string, password: string): Promise<void> => {
	return signInWithEmailAndPassword(auth, email, password).then(() =>
		Promise.resolve()
	)
}

export const signOut = (): void => {
	auth.signOut()
}
