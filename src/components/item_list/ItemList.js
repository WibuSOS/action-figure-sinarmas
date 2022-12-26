import React, { Component } from 'react'
import axios from 'axios'
import { FIGURES_URL, FIGURES_DIR, API_URL, ICONS } from '../../const'
import './ItemList.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ItemTab } from '../item_tab/ItemTab';
import swal from 'sweetalert';
export default class ItemList extends Component {
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
	addToCart({ id_item, title, sculptor, price, source }) {
		axios
			.get(API_URL + "/cart?_sort=id&_order=desc")
			.then(res => {
				let id_chart = res.data[0].id + 1;
				const charts = {
					id: id_chart,
					id_item: id_item,
					id_persons: localStorage.getItem("id"),
					title: title,
					sculptor: sculptor,
					price: price,
					jumlah_barang: 1,
					source: source
				};
				axios
					.post(API_URL + "/cart", charts)
					.then(res => {
						swal({
							title: "Sukses Masuk Keranjang",
							text: "Sukses Masuk Keranjang ",
							icon: "success",
							button: false,
							timer: 1500,
						});
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}

	logout() {
		localStorage.removeItem('name');
		localStorage.removeItem('id');
		window.location.href = "/";
	}

	render() {
		let itemList = this.state.items.map(
			item => (
				<Col key={item.id} sm={6} md={4} lg={3}>
					<Card className='figure-item mb-3'>
						<Card.Img variant='top' src={`${FIGURES_DIR}/${item.source}`} alt={item.title} />
						<Card.Body>
							<Card.Title className='figure-title'>{item.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>{`Rp${item.price.toLocaleString('id')}`}</Card.Subtitle>
							<Card.Text >
								{`By ${item.sculptor}`}
							</Card.Text>
							
							<Button variant='warning' onClick={() => this.addToCart(item)}>Add to cart</Button>
							
						</Card.Body>
					</Card>
				</Col>
			)
		);

		return (
			<Container className='figure-list mt-3'>
				<Button onClick={() => this.logout()}>Log Out</Button>
				<Row>
					{itemList}
				</Row>
				<ItemTab itemList={itemList} />
			</Container>
		)
	}
}
