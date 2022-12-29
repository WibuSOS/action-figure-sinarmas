import React, { Component } from 'react'
import { Button,Image,Col,Row,Container,Card,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import { API_URL } from '../const'
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
                        <Container fluid className='mt-3 mb-3'>
                            <Row className='d-flex justify-content-center align-items-center'>
                                <Col col='12' >
                                    <div className='my-5 mx-auto log-shadow text-center p-5' >
                                        <Image src="assets/pega-logo.svg" width="200" height="50" />
                                        <Card.Body className='w-100 d-flex flex-column'>
                                            <Row>
                                                <input placeholder='Username' className='form-control mt-3'onChange={this.handleUsername} value={this.state.username}></input>
                                                <input type="password" placeholder='Password' className='form-control mt-1' onChange={this.handlePassword} value={this.state.password}></input>
                                            </Row>
                                            {/* <hr className="my-4" /> */}
                                            <Row className='mt-2'>
                                                <Button className='btn-shadow' size="lg" variant='Primary' style={{ backgroundColor:"#128297",color:"white"}} onClick={(e)=>this.handleSubmit(e)}>
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
