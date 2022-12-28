import React, { Component } from 'react'
import axios from 'axios'
import { FIGURES_DIR, API_URL, CART_URL } from '../../const'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { } from "react-router-dom";
import swal from 'sweetalert';
import { Store } from '../../context/UserContext';
export default class Bookmark extends Component {
	static contextType = Store
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount() {
		this.getResource();
	}
	getResource() {
		axios
			.get(API_URL + "/bookmark?id_person=" + localStorage.getItem("id"))
			.then(res => {
				console.log(res.data)
				let items = res.data;
				this.setState({ items });
			})
			.catch(error => console.log(error));
		this.loadData()
	}
	async loadData() {
		// let jumlahCart, jumlahHistory, jumlahBookmark = 0;
		// try {
		// 	const res = await axios.get(API_URL + "/cart?id_person=" + localStorage.getItem("id"))
		// 	this.setState({ cart: res.data });
		// 	jumlahCart = res.data.length
		// } catch (err) { }
		// try {
		// 	const res = await axios.get(API_URL + "/history?id_person=" + localStorage.getItem("id"))
		// 	jumlahHistory = res.data.length
		// } catch (err) { }
		// try {
		// 	const res = await axios.get(API_URL + "/bookmark?id_person=" + localStorage.getItem("id"))
		// 	jumlahBookmark = res.data.length
		// 	this.setState({ bookmarks: res.data });
		// } catch (err) { }
		// this.context.dispatch({ type: "setDefault", payload: { bookmark: jumlahBookmark, history: jumlahHistory, cart: jumlahCart } })
	}
	handleDelete = async (itemId) => {
		axios
			.delete(API_URL + "/bookmark/" + itemId)
			.then(() => {
				swal({
					title: "Delete Sukses",
					text: "Delete",
					icon: "success",
					button: false,
					timer: 1000,
				}).then(() => this.getResource());
			})
			.catch(error => console.log(error));
	}
	handleAddToCart = async (id_item, title, sculptor, price, source) => {
		try{
			const resGet = await axios.get(`${CART_URL}?id_person=${localStorage.getItem("id")}`)
			if(resGet.data.length === 0){
				const cart = {
					id_person:localStorage.getItem("id"),
					details:[
						{
							id_person:localStorage.getItem("id"),
							id_item: id_item,
							title:title,
							sculptor: sculptor,
							price: price,
							jumlah_barang: 1,
							source: source
						}
					],
					
				};
				const res = await axios.post(`${CART_URL}`, cart)
				await swal({
					title: "Sukses Add to Cart",
					text: "Sukses Add to Cart",
					icon: "success",
					button: false,
					timer: 1500,
				})
				this.getResource()
			}else{
				const data = resGet.data[0]
				if(data.details.findIndex(item=>item.id_item==id_item)){
					const cart = {
						id_person:localStorage.getItem("id"),
						id_item: id_item,
						title:title,
						sculptor: sculptor,
						price: price,
						jumlah_barang: 1,
						source: source
					}
					data.details.push(cart)
					const res = await axios.put(`${CART_URL}/${data.id}`, data)
					await swal({
						title: "Sukses Add to Cart",
						text: "Sukses Add to Cart",
						icon: "success",
						button: false,
						timer: 1500,
					})
					this.getResource()
				}
			}
			
		}catch(err){
			await swal({
				title: "Gagal Add to Cart",
				text: "Galal Add to Cart",
				icon: "error",
				button: false,
				timer: 1500,
			})
		}
	}

	render() {
		let itemList = this.state.items.map(
			item => (
				<Col key={item.id} sm={6} md={4} lg={2}>
					<Card.Img variant='top' src={`${FIGURES_DIR}/${item.source}`} />
					<div className='d-flex justify-content-around' style={{ marginTop: "10px", }}>
						<Button variant="warning" style={{ width: "120px", backgroundColor: "#FFB13D" }} onClick={() => this.handleAddToCart(item.id_item, item.title, item.sculptor, item.price, item.source)} >Add To Cart</Button>{' '}

					</div>
					<div className='d-flex justify-content-around mb-1' style={{ marginTop: "10px" }}>
						<Button variant="danger" style={{ width: "120px" }} onClick={() => this.handleDelete(item.id)}>Delete </Button>{' '}
					</div>
				</Col>
			)
		);

		return (
			<div className='container mt-4'>
				<div className='card p-4'>
					<Container className='figure-list mt-3'>
						<h2>Bookmark</h2>
						<div style={{ borderTop: "2px solid black", marginBottom: "20px" }}>
						</div>
						<Row>
							{this.state.items == 0?<>
								<div className="text-center">Bookmark kosong</div>
							</>:
							itemList}
						</Row>
					</Container>
				</div>
			</div>
		)
	}
}
