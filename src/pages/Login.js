import React, { Component } from 'react'
import { Button,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import { API_URL } from '../const'
import swal from "sweetalert";
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
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
                    ).then(()=>{localStorage.setItem("name",res.data[0].name); localStorage.setItem("id",res.data[0].id); window.location.href="/"})
                    //.then(()=>{localStorage.setItem("name",res.data[0].name) ; this.setState({login : true})})
                    // Somewhere in your code, e.g. inside a handler:
                    
                    // const navigate = useNavigate();
                    // navigate("/");
                    
                    // setTimeout(function(){ window.location.href="/register"},1500)

                        
                }
        
			})
			.catch(error => console.log(error));  
	};
  render() {
    if(this.state.login){
        return (
            <Navigate to="/" replace={true} />
        )
    }
    else if(localStorage.getItem('name')!=null)
        {
            window.location.href="/"
        }
    else{  
        return (
                <div>  
                    <div className="container">      
                        <div className='row justify-content-center' >
                            <div className='col-md-6' >
                                <div className='card p-4' style={{backgroundColor: "#F5F5F5"}}>
                                    <div style={{textAlign:"center"}}>
                                        <Image src="assets/BANDAI_SPIRITS.svg.png" width="250" />
                                    </div>
                                    <div style={{textAlign:"center",fontSize:"25px"}}>
                                        <b>BANDAI.COM</b>
                                    </div>
                                    
                                    <div className='form-group'>
                                        <label></label>
                                        <input placeholder='Username' className='form-control'onChange={this.handleUsername} value={this.state.username}></input>
                                    </div>

                                    <div className='form-group'>
                                        <label></label>
                                        <input type="password" placeholder='Password' className='form-control' onChange={this.handlePassword} value={this.state.password}></input>
                                    </div>
                                    <div className="d-grid gap-2" style={{marginTop:"25px"}}>
                                        <Button variant="primary" size="lg" style={{backgroundColor: "#FFB13D"}} onClick={(e)=>this.handleSubmit(e)}>
                                            Login
                                        </Button>
                            
                                        <Button variant="secondary" size="lg" style={{backgroundColor: "#FFB13D"}} as={Link} to="/register">
                                            Register
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
  }
  }
}
