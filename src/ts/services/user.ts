import { User as FireUser } from '@firebase/auth'

import { auth } from './firebase'
import { User } from './models'

export const getUser = (): User | null => formatUser(auth.currentUser)

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
