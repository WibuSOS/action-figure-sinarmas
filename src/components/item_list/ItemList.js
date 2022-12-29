import React, { Component } from 'react'
import axios from 'axios'
import { FIGURES_URL, FIGURES_DIR, API_URL, ICONS, CART_URL } from '../../const'
import './ItemList.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { ItemTab } from './ItemTab';
import swal from 'sweetalert';
import { Store } from '../../context/UserContext';
import Banner from './Banner';

export default class ItemList extends Component {
	static contextType = Store
	constructor(props) {
		super(props);
		this.state = { items: [], items_date: [], cart: [], bookmarks: [] };
	}

	componentDidMount() {
		this.getResource();
	}

	getResource() {
		axios
			.get(FIGURES_URL)
			.then(res => {
				let items = res.data;
				this.setState({ items });
			})
			.catch(error => console.log(error));

		axios
			.get(`${FIGURES_URL}?_sort=date&_order=desc&_limit=4`)
			.then(res => {
				let items_date = res.data;
				this.setState({ items_date });
			})
			.catch(error => console.log(error));

		this.loadData();
	}

	async loadData() {
		let jumlahCart, jumlahHistory, jumlahBookmark = 0;
		try {
			const res = await axios.get(API_URL + "/cart?id_person=" + localStorage.getItem("id"))
			if (res.data.length !== 0) {
				this.setState({ cart: res.data[0].details });
				jumlahCart = res.data[0].details.length
			}
		} catch (err) { }
		try {
			const res = await axios.get(API_URL + "/history?id_person=" + localStorage.getItem("id"))
			jumlahHistory = res.data.length
		} catch (err) { }
		try {
			const res = await axios.get(API_URL + "/bookmark?id_person=" + localStorage.getItem("id"))
			jumlahBookmark = res.data.length
			this.setState({ bookmarks: res.data });
		} catch (err) { }
		this.context.dispatch({ type: "setDefault", payload: { bookmark: jumlahBookmark, history: jumlahHistory, cart: jumlahCart } })
	}

	saveItem({ id, title, sculptor, price, source }) {
		axios
			.get(API_URL + "/bookmark?_sort=id&_order=desc")
			.then(res => {
				let id_bookmark = 0
				if (res.data.length === 0) {
					id_bookmark = 1
					console.log(id_bookmark)
				}
				else {
					id_bookmark = res.data[0].id + 1;
				}

				const bookmark = {
					id: id_bookmark,
					id_person: localStorage.getItem("id"),
					id_item: id,
					title: title,
					sculptor: sculptor,
					price: price,
					jumlah_barang: 1,
					source: source
				};

				axios
					.post(API_URL + "/bookmark", bookmark)
					.then(() => {
						swal({
							title: "Saved Item",
							text: "Saved Item",
							icon: "success",
							button: false,
							timer: 1500,
						})
							.then(() => this.getResource());
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}

	async addToCart({ id, title, sculptor, price, source }) {
		try {
			const resGet = await axios.get(`${CART_URL}?id_person=${localStorage.getItem("id")}`)
			if (resGet.data.length === 0) {
				const cart = {
					id_person: localStorage.getItem("id"),
					details: [
						{
							id_person: localStorage.getItem("id"),
							id_item: id,
							title: title,
							sculptor: sculptor,
							price: price,
							jumlah_barang: 1,
							source: source
						}
					],
					delivery: {
						id: 0,
						name: "",
						price: 0,
						source: ""
					},
					payment: {
						id: 0,
						name: "",
						source: ""
					}
				};
				await axios.post(`${CART_URL}`, cart)
			} else {
				const data = resGet.data[0]
				const cart = {
					id_person: localStorage.getItem("id"),
					id_item: id,
					title: title,
					sculptor: sculptor,
					price: price,
					jumlah_barang: 1,
					source: source
				}
				data.details.push(cart)//up
				await axios.put(`${CART_URL}/${data.id}`, data)
			}
			await swal({
				title: "Sukses Add to Cart",
				text: "Sukses Add to Cart",
				icon: "success",
				button: false,
				timer: 1500,
			})
			this.getResource();
		} catch (err) {
			await swal({
				title: "Gagal Add to Cart",
				text: "Galal Add to Cart",
				icon: "error",
				button: false,
				timer: 1500,
			})
		}
	}

	logout() {
		localStorage.removeItem('name');
		localStorage.removeItem('id');
		window.location.href = "/";
	}

	dataToViewMapping(items) {
		return (
			items.map(
				item => (
					<Col key={item.id} sm={6} md={4} lg={3}>
						<Card className='figure-item mb-3 shadow'>
							<Card.Img variant='top' src={`${FIGURES_DIR}/${item.source}`} alt={item.title} />
							<Card.Body>
								<Card.Title className='figure-title'>{item.title}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>{`Rp${item.price.toLocaleString('id')}`}</Card.Subtitle>
								<Card.Text>
									{`By ${item.sculptor}`}
								</Card.Text>
								{
									this.state.cart.map(cart_item => cart_item.id_item).includes(item.id) ?
										<Button variant='dark shadow-button' disabled>In cart</Button> :
										<Button variant='warning shadow-button' onClick={() => this.addToCart(item)}>Add to cart</Button>
								}
								<Button className='shadow-button' onClick={() => this.saveItem(item)} style={{ marginLeft: "54px" }} variant={this.state.bookmarks.map(bookmark => bookmark.id_item).includes(item.id) ? "dark" : "warning"} disabled={this.state.bookmarks.map(bookmark => bookmark.id_item).includes(item.id) ? true : false} >
									<img src={ICONS + "bookmark-free-icon-font.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} />
								</Button>
							</Card.Body>
						</Card>
					</Col>
				)
			)
		)
	}

	render() {
		let items = [...this.state.items]
		let itemsAll = [...this.state.items]
		let itemsNewest = [...this.state.items_date]

		if (this.context.state.find != "") {
			items = items.filter(item => item.title.toLowerCase().includes(this.context.state.find.toLocaleLowerCase()))
			console.log(items)
		}

		let itemList = this.dataToViewMapping(items);
		let itemListAll = this.dataToViewMapping(itemsAll);
		let itemListNewest = this.dataToViewMapping(itemsNewest);

		return (
			<Container className='figure-list mt-3'>
				<Row className='pb-3 pt-3 shadow'>
					<Banner />
				</Row>
				<Row className='pt-5'>
					{itemList}
				</Row>
				<ItemTab itemListAll={itemListAll} itemListNewest={itemListNewest} />
			</Container>
		)
	}
}