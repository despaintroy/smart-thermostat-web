import {
	updateEmail as updateFireEmail,
	updatePassword as updateFirePassword,
	updateProfile,
	User as FireUser,
} from 'firebase/auth'

import { auth } from './auth'
import { User } from './models'

export const formatUser = (user: FireUser | null): User | null => {
	if (user)
		return {
			id: user.uid,
			name: user.displayName,
			email: user.email,
			phone: user.phoneNumber,
		}
	else return null
}

// --------------------------------------------------
//   GET
// --------------------------------------------------

export const getUser = (): User | null => formatUser(auth.currentUser)

// --------------------------------------------------
//   PATCH
// --------------------------------------------------

export const updateName = (name: string): Promise<void> => {
	if (auth.currentUser)
		return updateProfile(auth.currentUser, { displayName: name })
	return Promise.reject()
}

export const updateEmail = (email: string): Promise<void> => {
	if (auth.currentUser) return updateFireEmail(auth.currentUser, email)
	return Promise.reject()
}

export const updatePassword = (password: string): Promise<void> => {
	if (auth.currentUser) return updateFirePassword(auth.currentUser, password)
	return Promise.reject()
}
