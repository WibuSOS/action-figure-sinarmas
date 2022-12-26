import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './ShopingCart.css'

export default function TotalPrice({ items, view, proceedBtn }) {
    const totalPrice = items.reduce((total, item) => (total + item.price), 0);
    const courierFee = 15000;
    const VAT = 0.1;
    const finalPrice = totalPrice + courierFee + (VAT * totalPrice);

    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title className='text-center'>
                    Total Price
                </Card.Title>
                <hr />
                <Row>
                    <Col className="col-6">Price</Col>
                    <Col className="col-6">{`Rp${totalPrice.toLocaleString('id')}`}</Col>
                    <Col className="col-6">Courier Fee</Col>
                    <Col className="col-6">{`Rp${courierFee.toLocaleString('id')}`}</Col>
                    <Col className="col-6">VAT</Col>
                    <Col className="col-6">{`Rp${(VAT * totalPrice).toLocaleString('id')}`}</Col>
                </Row>
                <hr />
                <Row>
                    <Col className="col-6">Final Price</Col>
                    <Col className="col-6">{`Rp${finalPrice.toLocaleString('id')}`}</Col>
                </Row>
                <Row className='text-center mx-2 pt-5'>
                    <Link to='/history' className='btn btn-warning'>{proceedBtn}</Link>
                </Row>
            </Card.Body>
        </Card >
    )
}
