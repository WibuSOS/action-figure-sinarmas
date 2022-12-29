import axios from 'axios'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CART_URL, DELIVERY_URL, PAYMENT_URL, PROFILES_URL } from '../../const'
import './Checkout.css'
import DeliveryDetails from './DeliveryDetails'
import CartList from '../shopingcart/CartList'
import TotalPrice from '../shopingcart/TotalPrice'
import { Store } from '../../context/UserContext'

export default class Checkout extends Component {
	static contextType = Store
	constructor(props) {
		super(props);
		this.state = {
			profile: {},
			delivery: [],
			payment: [],
			cart: { details: [], delivery: { id: null }, payment: { id: null }, id: null },
			view: 'checkout',
			proceedBtn: 'Proceed'
		};
	}

	componentDidMount() {
		this.getResource();
	}

	getResource() {
		axios
			.get(`${PROFILES_URL}/${localStorage.getItem('id')}`)
			.then(res => {
				let profile = res.data;
				this.setState({ profile });
			})
			.catch(error => console.log(error));

		axios
			.get(DELIVERY_URL)
			.then(res => {
				let delivery = res.data;
				this.setState({ delivery });
			})
			.catch(error => console.log(error));

		axios
			.get(PAYMENT_URL)
			.then(res => {
				let payment = res.data;
				this.setState({ payment });
			})
			.catch(error => console.log(error));

		axios
			.get(`${CART_URL}?id_person=${localStorage.getItem('id')}`)
			.then(res => {
				if (res.data.length !== 0) {
					let cart = res.data[0];
					this.setState({ cart });
				} else {
					window.location.href = '/'
				}
			})
			.catch(error => console.log(error));
	}

	handleDelivery(e) {
		e.preventDefault();
		let deliveryID = e.target.value;

		if (!deliveryID) {
			return
		}

		axios
			.get(`${DELIVERY_URL}/${deliveryID}`)
			.then(async res => {
				let cart = { ...this.state.cart }
				let delivery = res.data;
				cart.delivery = delivery
				await axios
					.put(`${CART_URL}/${cart.id}`, cart)
					.catch(error => console.log(error));
				this.getResource();
			})
			.catch(error => console.log(error));
	}

	handlePayment(e) {
		e.preventDefault();
		let paymentID = e.target.value;

		if (!paymentID) {
			return
		}

		axios
			.get(`${PAYMENT_URL}/${paymentID}`)
			.then(async res => {
				let cart = { ...this.state.cart }
				let payment = res.data;
				cart.payment = payment
				await axios
					.put(`${CART_URL}/${cart.id}`, cart)
					.catch(error => console.log(error));
				this.getResource();
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<Container className='checkout mt-3'>
				<Row>
					<Col lg={this.state.cart.details.length > 0 ? 8 : 12}>
						{
							this.state.cart.details.length > 0 &&
							<Row className='mb-3'>
								<Col>
									<DeliveryDetails
										profile={this.state.profile}
										delivery={this.state.delivery}
										payment={this.state.payment}
										chosenDelivery={this.state.cart.delivery}
										chosenPayment={this.state.cart.payment}
										handleDelivery={(e) => this.handleDelivery(e)}
										handlePayment={(e) => this.handlePayment(e)}
									/>
								</Col>
							</Row>
						}
						<Row>
							<Col>
								<CartList items={this.state.cart.details} view={this.state.view} />
							</Col>
						</Row>
					</Col>
					{
						this.state.cart.details.length > 0 &&
						<Col lg={4} className='mt-3 mt-lg-0'>
							<TotalPrice cart={this.state.cart} items={this.state.cart.details} view={this.state.view} proceedBtn={this.state.proceedBtn} id={this.state.cart.id} />
						</Col>
					}
				</Row>
			</Container>
		)
	}
}
