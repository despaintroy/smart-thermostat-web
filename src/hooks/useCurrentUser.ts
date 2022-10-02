import { useState } from 'react'
import { auth } from 'services/authentication'
import { User } from 'services/models'
import { formatUser } from 'services/user'

const useCurrentUser = () => {
	const [user, setUser] = useState<User | null>(null)

	auth.onAuthStateChanged(fireUser => setUser(formatUser(fireUser)))

	return user
}

export default useCurrentUser
