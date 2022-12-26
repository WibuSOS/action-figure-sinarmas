import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './ShopingCart.css'
import { FIGURES_DIR,ICONS } from '../../const'

export default function CartList({ items, change }) {
    
    // const []=useState(items)
    const deleteCart = (id) => {
        change(id,"deleteCart")
        // if (this.state.jumlah !== 1) {
        // this.setState({
        //     jumlah: this.state.jumlah - 1,
        //     totalHarga:
        //     this.state.item.price* (this.state.jumlah - 1),
        // });
        // }
    }

    const tambah = (id) => {
        change(id,"tambah")
        // this.setState({
        // jumlah: this.state.jumlah + 1,
        // totalHarga:
        //     this.state.item.price * (this.state.jumlah + 1),
        // });
    }

    const kurang = (id) => {
        change(id,"kurang")
        // if (this.state.jumlah !== 1) {
        // this.setState({
        //     jumlah: this.state.jumlah - 1,
        //     totalHarga:
        //     this.state.item.price* (this.state.jumlah - 1),
        // });
        // }
    }

    let itemList = items.map(
        item => (
                <Row key={item.id}>                   
                    <Col className="col-sm-3">
                        <img className='underline img-cart' variant='top' src={`${FIGURES_DIR}/${item.source}`} />
                    </Col>
                    <Col className="col-sm-4">
                        <p className='underline' >{item.title}</p>
                        
                        <p className='mb-2 text-muted'>{`Rp ${item.price.toLocaleString('id')}`}</p>
                       
                    </Col>
                    <Col className="text-center col-sm-3">
                        <p className='underline'>Quantity</p>
                        <Col>
                            <Button style={{border:"none",backgroundColor:"white"}}>
                                <img src={ICONS+'trash.png'} style={{width:30,height:30}} onClick={ () => deleteCart(item.id)}></img>
                            </Button>
                            <Button style={{border:"none",backgroundColor:"white"}}>
                                <img src={ICONS+'minus.png'} style={{width:30,height:30}} onClick={ () => kurang(item.id)}></img>
                            </Button>
                                {item.jumlah_barang}
                            <Button style={{border:"none",backgroundColor:"white"}}>
                                <img src={ICONS+'plus.png'} style={{width:30,height:30}} onClick={ () => tambah(item.id)}></img>
                            </Button>
                        </Col>
                    </Col>
                    <Col className="col-sm-2">
                        <p className='underline'>Subtotal</p>
                        <Col>
                            <p className='mb-2 text-muted'>{`Rp ${(item.price*item.jumlah_barang).toLocaleString('id')}`}</p>
                        </Col>
                    </Col>
                </Row> 
        )
    );
    
    return (
        <Card className='shadow'>
            <Card.Body>
                <Card.Title>Shopping Cart</Card.Title>
                <hr/>
                {itemList}
            </Card.Body>
        </Card>
  )
}
