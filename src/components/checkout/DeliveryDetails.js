import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import './Checkout.css'

export default function DeliveryDetails({
	profile,
	delivery,
	payment,
	chosenDelivery,
	chosenPayment,
	handleDelivery,
	handlePayment
}) {
	const dataToViewMapping = items => {
		let viewList = items.map(element => (
			<option key={element.id} value={element.id}>{element.name}</option>
		));
		viewList.unshift(<option key={0} value=''>Please choose...</option>);
		return viewList
	};

	let deliveryList = dataToViewMapping(delivery);
	let paymentList = dataToViewMapping(payment);

	return (
		<Card className='delivery-details-card'>
			<Card.Body>
				<Card.Title>Delivery Details</Card.Title>
				<hr />
				<Row>
					<Col className='col-12'>
						<Col className='mb-1'><Card.Subtitle>{profile.name}</Card.Subtitle></Col>
						<Col><Card.Text>{profile.address}</Card.Text></Col>
						<Col><Card.Link>Change address</Card.Link></Col>
					</Col>
					<Form>
						<Row>
							<Col sm={6} className='mt-3'>
								<Form.Group>
									<Form.Label className='payment-method-label'>Courier</Form.Label>
									<Form.Select value={chosenDelivery.id} onChange={(e) => handleDelivery(e)}>
										{deliveryList}
									</Form.Select>
								</Form.Group>
							</Col>
							<Col sm={6} className='mt-3'>
								<Form.Group>
									<Form.Label className='payment-method-label'>Payment Method</Form.Label>
									<Form.Select value={chosenPayment.id} onChange={(e) => handlePayment(e)}>
										{paymentList}
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
					</Form>
				</Row>
			</Card.Body>
		</Card>
	)
}
