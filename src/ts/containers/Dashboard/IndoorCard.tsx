import React, { useState } from 'react'

import { Card, CardProps, Col, Row } from 'react-bootstrap'
import { IndoorMeasurements } from 'ts/services/models'
import { elapsedTimeString } from 'ts/utils/helpers'

type IndoorCardProps = CardProps

function IndoorCard(props: IndoorCardProps): React.ReactElement {
	const { className: classes, ...others } = props
	const [measurements, setMeasurements] = useState<IndoorMeasurements>()

	return (
		<Card className={`content-card ${classes}`} {...others}>
			<Card.Header>Indoor</Card.Header>
			<Card.Body>
				<Row>
					<Col>Temperature:</Col>
					<Col className='bold'>
						{measurements?.temperature ? `${measurements.temperature}º` : '–'}
					</Col>
				</Row>
				<Row>
					<Col>Humidity:</Col>
					<Col className='bold'>
						{measurements?.humidity ? `${measurements.humidity}%` : '–'}
					</Col>
				</Row>
				{measurements?.timeStamp && (
					<p className='text-muted mt-3 mb-0'>
						Last updated: {elapsedTimeString(measurements.timeStamp)}
					</p>
				)}
			</Card.Body>
		</Card>
	)
}

export default IndoorCard
