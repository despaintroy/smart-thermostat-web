import { Weather } from './models'

export const getWeather = (): Promise<Weather> => {
	return fetch(
		'https://us-central1-smart-thermostat-92710.cloudfunctions.net/app/api/weather'
	).then(response => response.json())
}
