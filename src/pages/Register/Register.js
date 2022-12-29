import axios from 'axios';
import React, { Component } from 'react'
import { Button,Image,Col,Row,Container,Card,Form, InputGroup } from "react-bootstrap";
import { API_URL, ICONS } from '../../const';
import './Register.css'
import swal from 'sweetalert';

export default class Register extends Component {
    constructor(props) {
		super(props);
		this.state ={
            username : "",
            email    : "",
            password : "",
            address : "",
            role : "",
            login : false
        }  
	}
    handleUsername = e => {
        const { value } = e.target;
        this.setState({username : value});
    };    
    handleEmail = e => {
        const { value } = e.target;
        this.setState({email : value});
    };    
    handlePassword = e => {
        const { value } = e.target;
        this.setState({ password : value});
    };
    handleAddress = e => {
        const { value } = e.target;
        this.setState({ address : value});
    };
    handleSubmit = async(event) => {
        event.preventDefault();
        const profile = {
            name:this.state.username,
            email:this.state.email,
            password:this.state.password,
            address:this.state.address,
            source:"profile1.png"
        }  
        axios
            .get(API_URL+"/profiles?name="+ this.state.username)
            .then(res=> {
            console.log(res.data);
            if(res.data.length === 0)
            {
                axios
                    .post(API_URL+"/profiles" ,profile )
                    .then(res => {
                        swal({
                            title: "Register",
                            text: "Register Sukses",
                            icon: "success",
                            button : false, 
                            timer : 1500,
                        }).then(()=>{
                            window.location.href="/"
                        });
                    })
                    .catch(error => console.log(error));
            }
            else
            {
                swal({
                    title: "Register",
                    text: "Username telah terdaftar",
                    icon: "error"
                })
            }
            }).catch(error=>console.log(error));

        
    }       
    render() {
                return (
                    <div className='login-body'>
                        <Container fluid className='mb-3'>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col col='12' >
                                    <div className='my-5 mx-auto log-shadow text-center p-5' >
                                        <Image src="assets/pega-logo.svg" width="250" height="50" />
                                        <Card.Body className='w-100 d-flex flex-column'>
                                            <Row>
                                            <InputGroup  className="btn-shadow mb-1 mt-5" onChange={this.handleUsername} value={this.state.username}>
                                                <InputGroup.Text id="basic-addon1" className='btn-input'><img src={ICONS + "user2.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup  className="btn-shadow mb-1" onChange={this.handleEmail}>
                                                <InputGroup.Text id="basic-addon1" className='btn-input'><img src={ICONS + "email.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Email"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1" onChange={this.handlePassword}>
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "lock.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                                type ="password"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "lock.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Confirm Password"
                                                aria-label="Confirm Password"
                                                aria-describedby="basic-addon1"
                                                type ="password"
                                                />
                                            </InputGroup>

                                            </Row>
                                            <Row>
                                            <InputGroup className="btn-shadow mt-3 mb-1" onChange={this.handleAddress}>
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "address2.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Street Address"
                                                aria-label="Confirm Password"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "province.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Province"
                                                aria-label="Province"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1" >
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "city.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="City"
                                                aria-label="City"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1" >
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "postal-code.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Postal Code"
                                                aria-label="Postal Code"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "phone.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Phone Number"
                                                aria-label="Phone Number"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            </Row>
                                            <Row>
                                            <InputGroup className="btn-shadow mt-3 mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "cardholder.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Cardholder Name"
                                                aria-label="Phone Number"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "card.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Card Number "
                                                aria-label="Card Number"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "date.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Expiry Date(mm/yy)"
                                                aria-label="Phone Number"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-1">
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "cvv.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="CVV Code"
                                                aria-label="CVV Code"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                    
                                            </Row>
                                            {/* <hr className="my-4" /> */}
                                            <Row className='mt-2'>
                                                <Button className='btn-shadow btn-input' size="lg" variant='Primary' style={{ backgroundColor:"#128297",color:"white"}} onClick={(e)=>this.handleSubmit(e)}>
                                                    Register
                                                </Button>
                                            </Row>
                                            <Row>
                                                <a size="lg" href='/' className='a-regist mt-2'>
                                                    Already have account ?
                                                </a>
                                            </Row>
                                        </Card.Body>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    
                )
        }
    }

