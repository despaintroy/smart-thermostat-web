import {
	getAuth,
	signInWithEmailAndPassword,
	signOut as fireSignOut,
} from 'firebase/auth'
import { getMessage } from 'helpers/errors'

import { firebaseApp } from './firebase'

export const auth = getAuth(firebaseApp)

export const signIn = (email: string, password: string): Promise<unknown> =>
	signInWithEmailAndPassword(auth, email, password).catch(e => {
		throw new Error(getMessage(e))
	})

export const signOut = (): Promise<void> => fireSignOut(auth)
