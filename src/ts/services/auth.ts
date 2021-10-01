export const signOut = (): void => {
	localStorage.removeItem('token')
	location.reload()
}

export const signIn = (): void => {
	localStorage.setItem('token', '1234')
	location.reload()
}
