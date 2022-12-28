import axios from 'axios'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CART_URL, PROFILES_URL } from '../../const'
import './Checkout.css'
import DeliveryDetails from './DeliveryDetails'
import CartList from '../shopingcart/CartList'
import TotalPrice from '../shopingcart/TotalPrice'
import { Store } from '../../context/UserContext'

export default class Checkout extends Component {
	static contextType = Store
	constructor(props) {
		super(props);
		this.state = { profile: {}, cart: [], view: 'checkout', proceedBtn: 'Proceed',id:null };
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
				if(res.data.length !== 0){
					let cart = res.data[0].details;
					if (!cart || (cart && cart.length <= 0)) { window.location.href = '/' }
					this.setState({ cart, id:res.data[0].id });
				}
				
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<Container className='checkout mt-3'>
				<Row>
					<Col lg={this.state.cart.length > 0 ? 8 : 12}>
						{
							this.state.cart.length > 0 &&
							<Row className='mb-3'>
								<Col>
									<DeliveryDetails profile={this.state.profile} />
								</Col>
							</Row>
						}
						<Row>
							<Col>
								<CartList items={this.state.cart} view={this.state.view} />
							</Col>
						</Row>
					</Col>
					{
						this.state.cart.length > 0 &&
						<Col lg={4} className='mt-3 mt-lg-0'>
							<TotalPrice items={this.state.cart} view={this.state.view} proceedBtn={this.state.proceedBtn} id={this.state.id}/>
						</Col>
					}
				</Row>
			</Container>
		)
	}
}
