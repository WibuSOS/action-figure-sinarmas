import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './Address.css'
import { FIGURES_DIR, ICONS } from '../../const'

export default function AddressList({ address, view, change }) {
    let addressList = address.map(
        address => (
            <Row key={address.id} className='mb-4'>
                <Col className="col-sm-9">
                    <b><p>{address.name}</p></b>
                    <b><p>{address.province}</p></b>
                    <b> <p>{address.city}</p></b>
                    <p>{address.address}</p>
                    <p>{address.phone}</p>

                </Col>
                {address.status === "Main" && <Col className="col-sm-3">
                    
                    <p className='underline'>Main Address</p>

                    <a className='underline'>Edit </a>
             
                    <a className='underline'>Delete</a>
             
                 </Col>
                }
                {
                    address.status === "Not Main" && <Col className="col-sm-3">
                    
                    <p className='underline'>Set as Main Address</p>

                    <a className='underline'>Edit </a>
             
                    <a className='underline'>Delete</a>
             
                 </Col>
                }
                {view === 'cart' && <Col className="text-center col-sm-3">
                    <p className='underline'>Quantity</p>
                    <Col>
                        <Button className='cart-btn'>
                            <img src={ICONS + 'trash.png'}></img>
                        </Button>
                        <Button className='cart-btn'>
                            <img src={ICONS + 'minus.png'} ></img>
                        </Button>
                        
                        <Button className='cart-btn'>
                            <img src={ICONS + 'plus.png'}></img>
                        </Button>
                    </Col>
                </Col>}
                 <hr></hr>
            </Row>
        )
    );

    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>My Address</Card.Title>
                <hr />
                {
                    addressList.length > 0 ?
                        addressList :
                        <div className='text-center fw-bold'>
                            Oops... tidak ada apa-apa di sini
                        </div>
                }
            </Card.Body>
        </Card>
    )
}
