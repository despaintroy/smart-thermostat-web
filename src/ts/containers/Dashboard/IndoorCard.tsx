import React from 'react'

import { Card, CardProps } from 'react-bootstrap'

type IndoorCardProps = CardProps

function IndoorCard(props: IndoorCardProps): React.ReactElement {
	const { className: classes, ...others } = props
	const temp = 71
	const humidity = 40

	return (
		<Card className={`content-card ${classes}`} {...others}>
			<Card.Header>Indoor</Card.Header>
			<Card.Body>
				Temperature: <b>{temp}º</b>
				<br />
				Humidity: <b>{humidity}%</b>
			</Card.Body>
		</Card>
	)
}

export default IndoorCard
