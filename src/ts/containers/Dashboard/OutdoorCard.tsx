import React from 'react'

import { Card, CardProps, Col, Row } from 'react-bootstrap'

type OutdoorCardProps = CardProps

function OutdoorCard(props: OutdoorCardProps): React.ReactElement {
	const { className: classes, ...others } = props
	const temp = 43
	const humidity = 60

	return (
		<Card className={`content-card ${classes}`} {...others}>
			<Card.Header>Outdoor</Card.Header>
			<Card.Body>
				<Row>
					<Col>Temperature:</Col>
					<Col className='bold'>{temp}º</Col>
				</Row>
				<Row>
					<Col>Humidity:</Col>
					<Col className='bold'>{humidity}%</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default OutdoorCard
