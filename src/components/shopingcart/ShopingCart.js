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
        this.state = {
            cart: { details: [], delivery: { id: null }, payment: { id: null }, id: null },
            view: 'cart',
            proceedBtn: 'Checkout',
            data: { details: [] }
        };
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        let jumlahCart, jumlahHistory, jumlahBookmark = 0;
        try {
            const res = await axios.get(API_URL + "/cart?id_person=" + localStorage.getItem("id"))
            console.log(res)
            if (res.data.length !== 0) {
                let cart = res.data[0]
                this.setState({ cart });
                jumlahCart = cart.details.length
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
        try {
            await axios.delete(API_URL + "/cart/" + item.id)
            return 1
        } catch (err) {
            console.log(err)
            return 0
        }
    }

    changeData = async (id, type) => {
        const items = [...this.state.cart.details]
        console.log(items, id)
        const index = items.findIndex(item => item.id_item === id)
        // const found = items.some(item=>item.id==id)
        if (index !== -1) {
            if (type === "tambah") {
                items[index]["jumlah_barang"] += 1
                const cartUser = { ...this.state.cart }
                cartUser["details"] = items
                if (await this.updateData(cartUser) === 1) {
                    this.setState({ cart: cartUser })
                }
                // const id = items[index]["id"]
            } else if (type === "kurang" && items[index]["jumlah_barang"] > 1) {
                items[index]["jumlah_barang"] -= 1
                const cartUser = { ...this.state.cart }
                cartUser["details"] = items
                if (await this.updateData(cartUser) === 1) {
                    this.setState({ cart: cartUser })
                }
            } else if (type === "deleteCart") {
                if (items.length > 1) {
                    items.splice(index, 1)
                    const cartUser = { ...this.state.cart }
                    cartUser["details"] = items
                    if (await this.updateData(cartUser) === 1) {
                        this.setState({ cart: cartUser })
                        this.loadData();
                    }
                } else {
                    let cartUser = { ...this.state.cart }
                    if (await this.deleteData(cartUser) === 1) {
                        cartUser = { details: [], delivery: { id: null }, payment: { id: null }, id: null }
                        this.setState({ cart: cartUser })
                        this.loadData();
                    }
                }
            }
        }
    }

    render() {
        return (
            <Container className='mt-3'>
                <Row>
                    <Col lg={this.state.cart.details.length > 0 ? 8 : 12}>
                        <Row className='mb-3'>
                            <Col>
                                <CartList items={this.state.cart.details} view={this.state.view} change={this.changeData} />
                            </Col>
                        </Row>
                    </Col>
                    {
                        this.state.cart.details.length > 0 &&
                        <Col lg={4} className='mt-3 mt-lg-0'>
                            <TotalPrice cart={this.state.cart} view={this.state.view} proceedBtn={this.state.proceedBtn} />
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}
