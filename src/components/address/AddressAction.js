import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Address.css'

export default function AddressAction({ }) {
    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title className='text-center'>
                    Address Form
                </Card.Title>
                <hr />
                <Row>
                   <Col className='mb-3'>
                   <input  placeholder='Name'></input>
                   </Col>
                    <Col className='mb-3'>
                   <input placeholder='Street Address'></input>
                   </Col>
                   <Col className='mb-3'>
                   <input placeholder='Province'></input>
                   </Col>         
                   <Col className='mb-3'>
                   <input placeholder='City'></input>
                   </Col>                 
                   <Col className='mb-3'>
                   <input placeholder='Postal Code'></input>
                   </Col>                 
                   <Col className='mb-3'>
                   <input placeholder='Phone Number'></input>
                   </Col>                         
                </Row>
                <hr />
                <Row>
                    
                    
                </Row>
                <Row className='text-center mx-2 pt-5'>
                   
                </Row>
            </Card.Body>
        </Card >
    )
}
