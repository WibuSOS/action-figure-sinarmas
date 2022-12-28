import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './ShopingCart.css'
import { FIGURES_DIR, ICONS } from '../../const'

export default function CartList({ items, view, change }) {

    // const []=useState(items)
    const deleteCart = (id) => {
        change(id, "deleteCart")
        // if (this.state.jumlah !== 1) {
        // this.setState({
        //     jumlah: this.state.jumlah - 1,
        //     totalHarga:
        //     this.state.item.price* (this.state.jumlah - 1),
        // });
        // }
    }

    const tambah = (id) => {
        change(id, "tambah")
        // this.setState({
        // jumlah: this.state.jumlah + 1,
        // totalHarga:
        //     this.state.item.price * (this.state.jumlah + 1),
        // });
    }

    const kurang = (id) => {
        change(id, "kurang")
        // if (this.state.jumlah !== 1) {
        // this.setState({
        //     jumlah: this.state.jumlah - 1,
        //     totalHarga:
        //     this.state.item.price* (this.state.jumlah - 1),
        // });
        // }
    }
    let itemList = items.map(
        (item, index) => (
            <Row key={index} className='mb-4'>
                <Col className="col-sm-3">
                    <img className='underline img-cart' variant='top' src={`${FIGURES_DIR}/${item.source}`} alt={item.title} />
                </Col>
                <Col className="col-sm-4">
                    <p className='underline' >{item.title}</p>
                    <p className='mb-2 text-muted'>{`Rp ${item.price.toLocaleString('id')}`}</p>
                </Col>
                {view === 'cart' && <Col className="text-center col-sm-3">
                    <p className='underline'>Quantity</p>
                    <Col>
                        <Button className='cart-btn'>
                            <img src={ICONS + 'trash.png'} onClick={() => deleteCart(item.id_item)}></img>
                        </Button>
                        <Button className='cart-btn'>
                            <img src={ICONS + 'minus.png'} onClick={() => kurang(item.id_item)}></img>
                        </Button>
                        {item.jumlah_barang}
                        <Button className='cart-btn'>
                            <img src={ICONS + 'plus.png'} onClick={() => tambah(item.id_item)}></img>
                        </Button>
                    </Col>
                </Col>}
                <Col className="col-sm-2">
                    <p className='underline'>Subtotal</p>
                    <Col>
                        <p className='mb-2 text-muted'>{`Rp ${(item.price * item.jumlah_barang).toLocaleString('id')}`}</p>
                    </Col>
                </Col>
            </Row>
        )
    );

    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>Shopping Cart</Card.Title>
                <hr />
                {
                    itemList.length > 0 ?
                        itemList :
                        <div className='text-center fw-bold'>
                            Oops... tidak ada apa-apa di sini
                        </div>
                }
            </Card.Body>
        </Card>
    )
}
