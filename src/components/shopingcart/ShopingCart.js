import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ShopingCart.css'

export default class ShopingCart extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className='col1'>
                        <div className='Header'>
                            <h3 className='Heading'>Shopping Cart</h3>
                            <h5 className='Action'>Remove all</h5>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className='Cart-Item'>
                                        <div className='image-box'>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp" style={{ height: '120px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    Figure A
                                    <div>
                                        dads
                                    </div>
                                </div>
                                <div className="col-sm">
                                    Estimated Arrival
                                    <div>
                                        dd/mm/yyy
                                    </div>
                                </div>
                                <div className="col-sm">
                                    Quantity
                                    <div>
                                        1
                                    </div>
                                </div>
                                <div className="col-sm">
                                    Subtotal
                                    <div>
                                        Rp. 2.000.000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className='col2'>
                        <div className='Header'>
                            <h2 className='Heading'>Total Price</h2>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div>Price</div>
                                    <div>Courier Fee</div>
                                    <div>VAT</div>
                                </div>
                                <div className="col-sm">
                                    <div>Rp. 2.000.000</div>
                                    <div>-</div>
                                    <div>-</div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="row" style={{ fontStyle: "bold" }}>
                                <div className="col-sm">
                                    <div>Total Price</div>
                                </div>
                                <div className="col-sm">
                                    <div>Rp. 2.000.000</div>
                                </div>
                            </div>
                            <div style={{ textAlign: "center", padding: "20px" }}>
                                <Button variant='warning'>Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
