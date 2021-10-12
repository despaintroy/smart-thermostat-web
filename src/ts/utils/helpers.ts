import { TimeStamp } from 'ts/services/models'
import { NumericalStyle } from './constants'

export const formatNumber = (
	number: number,
	style = NumericalStyle.decimal,
	decimals = 2,
	thousandsSeparator = true
): string => {
	return new Number(number).toLocaleString(undefined, {
		style: style,
		useGrouping: thousandsSeparator,
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	})
}

export const formatTemperature = (
	temperature: number,
	decimals = 0
): string => {
	return `${formatNumber(temperature, NumericalStyle.decimal, decimals)}º`
}

export const elapsedTimeString = (timeStamp: TimeStamp) => {
	return `${new Date().getTime() - timeStamp} milliseconds ago`
}
