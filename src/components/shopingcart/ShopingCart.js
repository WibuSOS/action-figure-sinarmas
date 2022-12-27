import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ShopingCart.css'
import axios from 'axios'
import { API_URL } from '../../const'
import CartList from './CartList'
import TotalPrice from './TotalPrice'
import { Store } from '../../context/UserContext';
import swal from 'sweetalert'
export default class ShopingCart extends Component {
    static contextType = Store
    constructor(props) {
        super(props);
        this.state = { items: [], view: 'cart', proceedBtn: 'Checkout' };
    }

    
    componentDidMount() {
        this.getResource();
    }
    getResource() {
		axios
            .get(API_URL + "/cart?id_person=" + localStorage.getItem("id"))
            .then(res => {
                let items = res.data;
                this.setState({ items });
            })
            .catch(error => console.log(error));
		this.loadData()
	}
    async loadData() {
		let jumlahCart, jumlahHistory, jumlahBookmark = 0;
		try {
			const res = await axios.get(API_URL + "/cart?id_person=" + localStorage.getItem("id"))
			this.setState({ cart: res.data });
			jumlahCart = res.data.length
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
    updateData = async (item) => {
        try {
            const res = await axios.put(API_URL + "/cart/" + item.id, item)
            console.log(res)
            return 1
        } catch (err) {
            return 0
        }
    }

    deleteData = async (item) => {
            await axios.delete(API_URL + "/cart/" + item.id)
            .then(() => {
				swal({
					title: "Delete Sukses",
					text: "Delete",
					icon: "success",
					button: false,
					timer: 1000,
				}).then(() => this.getResource());
			}).catch(error => console.log(error));
    }

    changeData = async (id, type) => {
        const { items } = this.state
        const index = items.findIndex(item => item.id === id)
        // const found = items.some(item=>item.id==id)
        if (index !== -1) {
            if (type === "tambah") {
                items[index]["jumlah_barang"] += 1
                if (await this.updateData(items[index]) === 1) {
                    this.setState({ items })
                }
                // const id = items[index]["id"]
            } else if (type === "kurang" && items[index]["jumlah_barang"] > 1) {
                items[index]["jumlah_barang"] -= 1
                if (await this.updateData(items[index]) === 1) {
                    this.setState({ items })
                }
            } else if (type === "deleteCart") {
                this.deleteData(items[index])
                this.getResource();
            }
        }
    }

    render() {
        return (
            <Container className='mt-3'>
                <Row>
                    <Col lg={this.state.items.length > 0 ? 8 : 12}>
                        <Row className='mb-3'>
                            <Col>
                                <CartList items={this.state.items} view={this.state.view} change={this.changeData} />
                            </Col>
                        </Row>
                    </Col>
                    {
                        this.state.items.length > 0 &&
                        <Col lg={4} className='mt-3 mt-lg-0'>
                            <TotalPrice items={this.state.items} view={this.state.view} proceedBtn={this.state.proceedBtn} />
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}
