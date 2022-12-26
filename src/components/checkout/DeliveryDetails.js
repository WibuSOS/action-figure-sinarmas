import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import './Checkout.css'

export default function DeliveryDetails({ profile }) {
	return (
		<Card className='delivery-details-card'>
			<Card.Body>
				<Card.Title>Delivery Details</Card.Title>
				<hr />
				<Row>
					<Col md={6}>
						<Col className='mb-1'><Card.Subtitle>{profile.name}</Card.Subtitle></Col>
						<Col><Card.Text>{profile.address}</Card.Text></Col>
						<Col><Card.Link>Change address</Card.Link></Col>
					</Col>
					<Col md={6} className='mt-3 mt-md-0'>
						<Form.Group>
							<Form.Label className='payment-method-label'>Payment Method</Form.Label>
							<Form.Select disabled>
								<option>Sinarmas</option>
							</Form.Select>
						</Form.Group>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}
