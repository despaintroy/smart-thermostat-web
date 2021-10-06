export interface User {
	readonly id: string
	name: string | null | undefined
	email: string | null | undefined
	phone: string | null | undefined
}

export interface Weather {
	feelsLike: number
	temperature: number
	humidity: number
}
