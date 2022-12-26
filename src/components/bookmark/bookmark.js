import React, { Component } from 'react'
import axios from 'axios'
import { FIGURES_DIR, API_URL } from '../../const'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { } from "react-router-dom";
import swal from 'sweetalert';

export default class Bookmark extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount() {
		axios
			.get(API_URL+"/bookmark?id_persons="+localStorage.getItem("id"))
			.then(res => {
				let items = res.data;
				this.setState({ items });
			})
			.catch(error => console.log(error));
	}
	addToCart(itemId) {
	}
	logout(){
		localStorage.removeItem('name');
		window.location.href="/";
	}
	handleDelete = async(itemId) => {
		axios
			.delete(API_URL+"/bookmark/"+itemId)
			.then(res => {
				swal({
					title: "Delete Sukses",
					text: "Delete",
					icon: "success",
					button : false,
					timer : 1000,
				}).then(()=>{window.location.href="/bookmark"})
			})
			.catch(error => console.log(error));
	}
	handleAddToCart = async(id_item,title,sculptor,price,source)=>{
		axios
			.get(API_URL+"/cart?_sort=id&_order=desc")
			.then(res =>{	
				let id_chart = res.data[0].id + 1;
				const charts = {
					id : id_chart,
					id_item : id_item,
					id_persons : localStorage.getItem("id"),
					title : title,
					sculptor : sculptor,
					price : price,
					jumlah_barang : 1,
					source : source
					
				};
				axios
				.post(API_URL+"/cart", charts)
				.then(res =>{	
					swal({
					title: "Sukses Masuk Keranjang",
					text: "Sukses Masuk Keranjang ",
					icon: "success",
					button: false,
					timer: 1500,
				  });
			}
			)
			.catch(error => console.log(error));
			}
			)
			.catch(error => console.log(error));
		
		
	}
	render() {
		let itemList = this.state.items.map(
			item => (
                <Col key={item.id} sm={6} md={4} lg={2}>
				        <Card.Img variant='top' src={`${FIGURES_DIR}/${item.source}`} />
						<div className='d-flex justify-content-around' style={{marginTop:"10px",}}>
                            <Button variant="warning" style={{width:"120px",backgroundColor: "#FFB13D"}}  onClick={()=>this.handleAddToCart(item.id_item , item.title,item.sculptor,item.price,item.source)} >Add To Cart</Button>{' '}
                           
                        </div>
                        <div className='d-flex justify-content-around mb-1' style={{marginTop:"10px"}}>
                            <Button variant="danger" style={{width:"120px" }} onClick={()=>this.handleDelete(item.id)}>Delete </Button>{' '}
                        </div>
			    </Col>
                
			)
		);

		return (
        <div className='container mt-4'>
            <div className='card p-4'>
			<Container className='figure-list mt-3'>
				<h2>Bookmark</h2>
				<div style={{borderTop:"2px solid black", marginBottom:"20px"}}>
				</div>
				<Row>
					{itemList}
				</Row>
				
			</Container>
            </div>
        </div>
		)
	}
}
