import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class Login extends Component {
  render() {
    return (
    <div style={{marginTop:"200px"}}>       
        <div className="container">
            <div className='row justify-content-center' >
                <div className='col-md-6' >
                    <div className='card p-4' style={{backgroundColor: "#F5F5F5"}}>
                        <div className='form-group'>
                            <label></label>
                            <input placeholder='Username' className='form-control'></input>
                        </div>

                        <div className='form-group'>
                            <label></label>
                            <input type="password" placeholder='Password' className='form-control'></input>
                        </div>
                        <div className="d-grid gap-2" style={{marginTop:"25px"}}>
                            <Button variant="primary" size="lg" style={{backgroundColor: "#FFB13D"}}>
                            Login
                            </Button>
                
                            <Button variant="secondary" size="lg" style={{backgroundColor: "#FFB13D"}}>
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
