import { useEffect, useState } from 'react'
import { auth } from 'services/authentication'
import { User } from 'services/models'
import { formatUser } from 'services/user'

const useCurrentUser = () => {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(fireUser =>
			setUser(formatUser(fireUser))
		)
		return unsubscribe
	}, [])

	return user
}

export default useCurrentUser
