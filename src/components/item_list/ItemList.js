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
		this.state = { items: [] , bookmarks: [] , saved:[], isSaved:""} ;
	}

	componentDidMount() {
		axios
			.get(FIGURES_URL)
			.then(res => {
				let items = res.data;
				this.setState({ items });
			
			})
			.catch(error => console.log(error));
		
		axios
			.get(API_URL+"/bookmark?id_persons="+localStorage.getItem("id"))
			.then(res => {
				let bookmarks = res.data;
				this.setState({ bookmarks });
				console.log(bookmarks);
			})
			.catch(error => console.log(error));

	}
	saveItem({ id, title, sculptor, price, source }){
		axios
			.get(API_URL + "/bookmark?_sort=id&_order=desc")
			.then(res => {
				let id_bookmark=0
				if(res.data.length == 0)
				{
					id_bookmark = 1
					console.log(id_bookmark)
				}
				else{
					id_bookmark = res.data[0].id + 1;
				}
				const bookmark = {
					id: id_bookmark,
					id_persons: localStorage.getItem("id"),
					id_item: id,
					title: title,
					sculptor: sculptor,
					price: price,
					jumlah_barang: 1,
					source: source
				};
				axios
					.post(API_URL + "/bookmark", bookmark)
					.then(res => {
						
					})
					.catch(error => console.log(error));
					swal({
						title: "Saved Item",
						text: "Saved Item",
						icon: "success",
						button: false,
						timer: 1500,
					}).then(()=>{window.location.href="/"});})
			.catch(error => console.log(error));
	}
	addToCart({ id_item, title, sculptor, price, source }) {
		axios
			.get(API_URL + "/cart?_sort=id&_order=desc")
			.then(res => {
				let id_chart
				if(res.data.length === 0)
				{
					id_chart = 1
				}
				else{
					id_chart = res.data[0].id + 1;
				}
				
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
						
					})
					.catch(error => console.log(error));
					swal({
						title: "Sukses Add to Cart",
						text: "Sukses Add to Cart",
						icon: "success",
						button: false,
						timer: 1500,
					}).then(()=>{window.location.href="/"})
			})
			.catch(error => console.log(error));
	}

	logout() {
		localStorage.removeItem('name');
		localStorage.removeItem('id');
		window.location.href = "/";
	}
	status (status) {
        if(this.isSaved === true){
            return "Unsaved"
        }else if(this.isSaved=== false){
            return "Saved"
		}
    }
	render() {
		let itemList = this.state.items.map(
			item =>  (
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
							{
							item.saved.map(d=>{
												if(d.id_persons === localStorage.getItem("id"))
												{
													return(
													this.isSaved=true
													)
												}
												else{
													this.isSaved = false
												}
											})
							}
							<Button onClick={() => this.saveItem(item)} style={{marginLeft:"54px"}} variant={this.state.bookmarks.map(bookmark => bookmark.id_item).includes(item.id) ? "dark" : "warning"} disabled={this.state.bookmarks.map(bookmark => bookmark.id_item).includes(item.id) ? true : false} >
								<img src={ICONS + "bookmark-free-icon-font.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} />
							</Button>

							{/* <Button className={this.status(item.saved)} variant ='warning' ></Button>	 */}
							
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
