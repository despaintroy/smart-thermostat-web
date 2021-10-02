import Paths from 'ts/utils/paths'

export const signOut = (): void => {
	localStorage.removeItem('token')
	window.open('/', '_self')
}

export const signIn = (): void => {
	localStorage.setItem('token', '1234')
	window.open(Paths.dashboard, '_self')
}
