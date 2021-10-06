import React from 'react'

import { Card, CardProps } from 'react-bootstrap'

type OutdoorCardProps = CardProps

function OutdoorCard(props: OutdoorCardProps): React.ReactElement {
	const { className: classes, ...others } = props
	const temp = 43
	const humidity = 60

	return (
		<Card className={`content-card ${classes}`} {...others}>
			<Card.Header>Outdoor</Card.Header>
			<Card.Body>
				Temperature: <b>{temp}º</b>
				<br />
				Humidity: <b>{humidity}%</b>
			</Card.Body>
		</Card>
	)
}

export default OutdoorCard
