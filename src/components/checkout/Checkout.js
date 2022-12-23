import axios from 'axios'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CART_URL, PROFILES_URL } from '../../const'
import './Checkout.css'
import DeliveryDetails from './DeliveryDetails'
import CartList from '../shopingcart/CartList'
import TotalPrice from '../shopingcart/TotalPrice'

export default class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = { profile: {}, cart: [] };
	}

	componentDidMount() {
		axios
			.get(`${PROFILES_URL}/${localStorage.getItem('id')}`)
			.then(res => {
				let profile = res.data;
				this.setState({ profile });
			})
			.catch(error => console.log(error));

		axios
			.get(`${CART_URL}?id_person=${localStorage.getItem('id')}`)
			.then(res => {
				let cart = res.data;
				this.setState({ cart });
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<Container className='checkout mt-3'>
				<Row>
					<Col lg={8}>
						<Row className='mb-3'>
							<Col>
								<DeliveryDetails profile={this.state.profile} />
							</Col>
						</Row>
						<Row>
							<Col>
								<CartList items={this.state.cart} />
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
