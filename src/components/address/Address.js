import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Address.css'
import axios from 'axios'
import { API_URL } from '../../const'
import AddressList from './AddressList'
import AddressAction from './AddressAction'
export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = { address: [], view: 'cart', proceedBtn: 'Checkout' };
    }

    componentDidMount() {
        axios
            .get(API_URL + "/address?id_person=" + localStorage.getItem("id"))
            .then(res => {
                let address = res.data;
                this.setState({ address });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <Container className='mt-3'>
                <Row>
                    <Col lg={this.state.address.length > 0 ? 8 : 12}>
                        <Row className='mb-3'>
                            <Col>
                            <AddressList address={this.state.address}/>
                            </Col>
                        </Row>
                    </Col>
                    {
                        this.state.address.length > 0 &&
                        <Col lg={4} className='mt-3 mt-lg-0'>
                            <AddressAction address={this.state.address}/>
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}
