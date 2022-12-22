import React, { Component } from 'react'
import axios from 'axios'
import { FIGURES_URL, FIGURES_DIR } from '../../const'
import './ItemList.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

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

	addToCart(itemId) {
		console.log(itemId);
	}

	render() {
		let itemList = this.state.items.map(
			item => (
				<Col key={item.id} sm={6} md={4} lg={3}>
					<Card className='figure-item'>
						<Card.Img variant='top' src={`${FIGURES_DIR}/${item.source}`} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>{`Rp${item.price.toLocaleString('id')}`}</Card.Subtitle>
							<Card.Text>
								{`By ${item.sculptor}`}
							</Card.Text>
							<Button variant='warning' onClick={() => this.addToCart(item.id)}>Add to cart</Button>
						</Card.Body>
					</Card>
				</Col>
			)
		);

		return (
			<Container className='figure-list'>
				<Row>
					{itemList}
				</Row>
			</Container>
		);
	}
}
