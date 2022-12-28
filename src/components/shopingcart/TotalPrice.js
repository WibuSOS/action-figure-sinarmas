import axios from 'axios';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { HISTORY_URL,CART_URL } from '../../const';
import './ShopingCart.css'
import { useStore } from '../../context/UserContext';

export default function TotalPrice({ items, view, proceedBtn, id }) {
    const navigate = useNavigate();
    const {dispatch} = useStore()
    const detailBarang = items.map(item => ({
        nama: item.title,
        jumlah: item.jumlah_barang,
        harga: item.price,
        gambar: item.source
    }));

    const totalBarang = items.reduce((total, item) => (total + item.jumlah_barang), 0);
    const totalPrice = items.reduce((total, item) => (total + (item.price * item.jumlah_barang)), 0);
    const courierFee = 15000;
    const VAT = 0.1;
    const finalPrice = totalPrice + courierFee + (VAT * totalPrice);

    const handleCheckout = async (e) => {
        e.preventDefault();
        axios
            .get(`${HISTORY_URL}?_sort=id&_order=desc`)
            .then(res => {
                let id_history
                if (res.data.length === 0) {
                    id_history = 1
                }
                else {
                    id_history = res.data[0].id + 1;
                }

                const date = new Date();
                const history = {
                    id: id_history,
                    id_person: localStorage.getItem("id"),
                    paycode: "33333",
                    orderID: "dadasd",
                    tanggal: `${date.getFullYear()}${date.getMonth()}${date.getDate()}`,
                    jumlah: totalBarang,
                    detail: detailBarang,
                    status: 1
                };
                console.log(id)
                axios
                    .post(HISTORY_URL, history)
                    .then(async () => {
                        await axios.delete(`${CART_URL}/${id}`)
                        await swal({
                            title: "Barang Telah Dipesan",
                            text: "Melanjutkan ke halaman history",
                            icon: "success",
                            button: false,
                            timer: 1500,
                        });
                        dispatch({type:"setCart", payload:0})
                        navigate('/history');
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title className='text-center'>
                    Total Price
                </Card.Title>
                <hr />
                <Row>
                    <Col className="col-6">Price</Col>
                    <Col className="col-6">{`Rp${totalPrice.toLocaleString('id')}`}</Col>
                    <Col className="col-6">Courier Fee</Col>
                    <Col className="col-6">{`Rp${courierFee.toLocaleString('id')}`}</Col>
                    <Col className="col-6">VAT</Col>
                    <Col className="col-6">{`Rp${(VAT * totalPrice).toLocaleString('id')}`}</Col>
                </Row>
                <hr />
                <Row>
                    <Col className="col-6">Final Price</Col>
                    <Col className="col-6">{`Rp${finalPrice.toLocaleString('id')}`}</Col>
                </Row>
                <Row className='text-center mx-2 pt-5'>
                    {view === 'cart' && <Link to='/checkout' className='btn btn-warning'>{proceedBtn}</Link>}
                    {view === 'checkout' && <Link to='/history' onClick={(e) => handleCheckout(e)} className='btn btn-warning'>{proceedBtn}</Link>}
                </Row>
            </Card.Body>
        </Card >
    )
}
