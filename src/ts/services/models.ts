export interface IndoorMeasurements {
	timeStamp: number
	temperature: number
	humidity: number
}

export interface SchedulePoint {
	day: number
	time: number
	temperature: number
}

export interface SetState {
	setTemp: number
	useSchedule: boolean
	timeStamp: number
}

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
