import { Weather } from './models'

interface WeatherResponse {
	feelsLike: number
	temperature: number
	humidity: number
}

export const getWeather = (): Promise<Weather> => {
	return fetch(
		'https://us-central1-smart-thermostat-92710.cloudfunctions.net/app/api/weather'
	).then(response =>
		response.json().then(o => {
			return { ...(o as WeatherResponse), timeStamp: new Date().getTime() }
		})
	)
}
