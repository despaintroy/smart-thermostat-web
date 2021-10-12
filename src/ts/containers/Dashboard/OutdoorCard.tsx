import React, { useEffect, useState } from 'react'

import { Card, CardProps, Col, Row } from 'react-bootstrap'
import { Weather } from 'ts/services/models'
import { getWeather } from 'ts/services/weather'
import { NumericalStyle } from 'ts/utils/constants'
import {
	elapsedTimeString,
	formatNumber,
	formatTemperature,
} from 'ts/utils/helpers'

type OutdoorCardProps = CardProps

function OutdoorCard(props: OutdoorCardProps): React.ReactElement {
	const { className: classes, ...others } = props
	const [weather, setWeather] = useState<Weather>()

	const updateWeather = (): void => {
		getWeather()
			.then(r => setWeather(r))
			.catch(() => console.error('Error updating weather'))
	}

	useEffect(() => updateWeather(), [])

	return (
		<Card className={`content-card ${classes}`} {...others}>
			<Card.Header>Outdoor</Card.Header>
			<Card.Body>
				<Row>
					<Col>Feels Like:</Col>
					<Col className='bold'>
						{weather?.feelsLike ? formatTemperature(weather.feelsLike) : '–'}
					</Col>
				</Row>
				<Row>
					<Col>Temperature:</Col>
					<Col className='bold'>
						{weather?.temperature
							? formatTemperature(weather.temperature)
							: '–'}
					</Col>
				</Row>
				<Row>
					<Col>Humidity:</Col>
					<Col className='bold'>
						{weather?.humidity
							? formatNumber(weather.humidity / 100, NumericalStyle.percent, 0)
							: '–'}
					</Col>
				</Row>
				{weather?.timeStamp && (
					<p className='text-muted mt-3 mb-0'>
						Last updated: {elapsedTimeString(weather.timeStamp)}
					</p>
				)}
			</Card.Body>
		</Card>
	)
}

export default OutdoorCard
