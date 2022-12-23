import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import './ShopingCart.css'

export default function TotalPrice() {
  return (
    <Card className='shadow'>
        <Card.Body>
            <Card.Title className='text-center'>
                Total Price
            </Card.Title>
                <hr />
                <Row>
                    <Col className="col-sm">
                        <Col>Price</Col>
                        <Col>Courier Fee</Col>
                        <Col>VAT</Col>
                    </Col>
                    <Col className="col-sm">
                        <Col>Rp. 1000000</Col>
                        <Col>-</Col>
                        <Col>-</Col>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="col-sm">
                        <Col>Total Price</Col>
                    </Col>
                    <Col className="col-sm">
                        <Col>Rp. 1000000</Col>
                    </Col>
                </Row>
                <Row className='text-center mx-2 pt-5'>
                    <Button variant='warning'>Checkout</Button>
                </Row>
        </Card.Body>
    </Card>
  )
}
