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
                    <Container fluid className='mt-3 mb-3'>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col col='12' >
                                <Card className='my-5 mx-auto log-shadow'>
                                    <Card.Body className='p-5 w-100 d-flex flex-column'>
                                        <Row>
                                            <Col className='text-center'>
                                                <Image src="assets/BANDAI_SPIRITS.svg.png" width="210" height="210" className='img-shadow'/>
                                            </Col>
                                            <h2 className="fw-bold mb-2 text-center mt-3 text-shadow">BANDAI.COM</h2>
                                        </Row>
                                        
                                            <Form>
                                                <label></label>
                                                <input placeholder='Username' className='form-control'onChange={this.handleUsername} value={this.state.username}></input>
                                                <label></label>
                                                <input type="password" placeholder='Password' className='form-control w-100' onChange={this.handlePassword} value={this.state.password}></input>
                                            </Form>
                                        
                                        <hr className="my-4" />
                                        <Button className='btn-shadow' size="lg" variant='Primary' style={{ backgroundColor:"#FFB13D"}} onClick={(e)=>this.handleSubmit(e)}>
                                                Login
                                        </Button>
                                        <Button className="mb-4 mt-3 w-100 btn-shadow" variant='Secondary' size="lg" style={{ backgroundColor:"#FFB13D"}} as={Link} to="/register">
                                                Register
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                )
        }
    }
}
