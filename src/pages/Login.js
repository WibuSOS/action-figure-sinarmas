import React, { Component } from 'react'
import { Button,Image,Col,Row,Container,Card,Form, InputGroup } from "react-bootstrap";
import axios from 'axios'
import { API_URL, ICONS } from '../const'
import swal from "sweetalert";
import { Navigate } from 'react-router-dom';
import {Store} from '../context/UserContext'
import './Login.css'

export default class Login extends Component {
    static contextType = Store
    constructor(props) {
		super(props);
		this.state ={
            username : "",
            password : "",
            role : "",
            login : false
        }  
	}
    componentDidMount
    handleUsername = e => {
        const { value } = e.target;
        this.setState({username : value});
    };    
    handlePassword = e => {
        const { value } = e.target;
        this.setState({ password : value});
    };
    handleSubmit = async(event) => {
        event.preventDefault();   
        axios
			.get(API_URL+"/profiles?name=" +this.state.username+"&password="+this.state.password)
			.then(res => {
                //console.log(res.data[0].name);
                if(res.data.length===0)
                {
                    swal({
                        title: "Gagal Login",
                        text: "Username dan Password Salah",
                        icon: "error",
                        button : false,
                        timer : 1500
                    })
                }
                else{
                    
                    swal({
                        title: "Sukses Login",
                        text: "Welcome " + res.data[0].name,
                        icon: "success",
                        button : false,
                        timer : 1500,
                        
                        
                    }
                    ).then(()=>{
                        localStorage.setItem("name",res.data[0].name); 
                        localStorage.setItem("id", res.data[0].id); 
                        // window.location.href="/"
                        this.context.dispatch({type:"set",payload:res.data[0].name})
                    })
                    

                        
                }
        
			})
			.catch(error => console.log(error));  
	};
    render() {
        if(this.state.login){
            return (
                <Navigate to="/" replace={true} />
            )
        }else {  
                return (
                    <div className='login-body'>
                        <Container fluid className='login-container mb-3'>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col col='12' >
                                    <div className='my-5 mx-auto log-shadow text-center p-5' >
                                        <Image src="assets/pega-logo.svg" width="250" height="50" />
                                        <Card.Body className='w-100 d-flex flex-column'>
                                            <Row>

                                            <InputGroup  className="btn-shadow mb-2 mt-5" onChange={this.handleUsername} value={this.state.username}>
                                                <InputGroup.Text id="basic-addon1" className='btn-input'><img src={ICONS + "user2.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                            <InputGroup className="btn-shadow mb-3" onChange={this.handlePassword} value={this.state.username}>
                                                <InputGroup.Text className='btn-input' id="basic-addon1"><img src={ICONS + "lock.png"} alt={"dd"} style={{ width: "20px", height: "20px", }} /></InputGroup.Text>
                                                <Form.Control
                                                className='btn-input'
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                type ="password"
                                                />
                                            </InputGroup>
                                                
                                            </Row>
                                            <Row className='mt-1'>
                                                <Button className='btn-shadow btn-input' size="lg" variant='Primary' style={{ backgroundColor:"#128297",color:"white"}} onClick={(e)=>this.handleSubmit(e)}>
                                                    Login
                                                </Button>
                                            </Row>
                                            <Row>
                                                <a size="lg" href='/register' className='a-regist mt-2'>
                                                    Register
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
}
