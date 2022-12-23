import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './ShopingCart.css'
import { FIGURES_DIR } from '../../const'

export default function CartList({ items }) {
    let itemList = items.map(
        item => (
                <Row>                   
                    <Col className="col-sm">
                        <img variant='top' src={`${FIGURES_DIR}/${item.source}`} />
                    </Col>
                    <Col className="col-sm">
                        <p className='figure-title' >{item.title}</p>
                        <Col>
                            <p className='mb-2 text-muted'>{`Rp ${item.price.toLocaleString('id')}`}</p>
                        </Col>
                    </Col>
                    <Col className="col-sm">
                        Estimated Arrival
                        <Col>

                        </Col>
                    </Col>
                    <Col className="col-sm">
                        Quantity
                        <Col>
                           <p>- 2 +</p>
                        </Col>
                    </Col>
                    <Col className="col-sm">
                        Subtotal
                        <Col>
                            <p className='mb-2 text-muted'>{`Rp ${item.price.toLocaleString('id')}`}</p>
                        </Col>
                    </Col>
                </Row> 
        )
    );
    
    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>Shopping Cart</Card.Title>
                <hr/>
                {itemList}
            </Card.Body>
        </Card>
  )
}
