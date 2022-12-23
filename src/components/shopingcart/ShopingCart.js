import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ShopingCart.css'
import axios from 'axios'
import { FIGURES_URL } from '../../const'
import CartList from './CartList'
import TotalPrice from './TotalPrice'

export default class ShopingCart extends Component {
    constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount() {
		axios
			.get(FIGURES_URL)
			.then(res => {
				let items = res.data;
				this.setState({ items });
			})
			.catch(error => console.log(error));
	}

    render() {
        return (
            <Container className='mt-3'>
                <Row>
                    <Col lg={8}>
                        <Row className='mb-3'>
                            <Col>
                                <CartList items={this.state.items} />
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={4} className='mt-3 mt-lg-0'>
                        <TotalPrice />
                    </Col>
                </Row>

            </Container>
        )
    }
}
