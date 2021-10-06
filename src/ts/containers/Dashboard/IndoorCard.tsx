import React from 'react'

import { Card, CardProps, Col, Row } from 'react-bootstrap'

type IndoorCardProps = CardProps

function IndoorCard(props: IndoorCardProps): React.ReactElement {
	const { className: classes, ...others } = props
	const temp = 71
	const humidity = 40

	return (
		<Card className={`content-card ${classes}`} {...others}>
			<Card.Header>Indoor</Card.Header>
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

export default IndoorCard
