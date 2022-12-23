import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Register extends Component {
  render() {
    return (
    <div style={{marginTop:"70px"}}>       
        <div className="container">
            <div className='row justify-content-center' >
                <div className='col-md-6' >
                    
                    <div className='card p-4' style={{backgroundColor: "#F5F5F5"}}>
                         <h3>Identity</h3>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                               
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Username' className='form-control'></input>
                                </div>
                                
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Email' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <input type="password" placeholder='Password' className='form-control'></input>
                                </div>

                                <div className='form-group'>
                                    <label></label>
                                    <input type="password" placeholder='Confirm Password' className='form-control'></input>
                                </div>
                                
                                <div className='d-flex justify-content-around' style={{marginTop:"25px"}}>
                                    <Button variant="danger" style={{minWidth:"75px"}} as={Link} to="/">Cancel</Button>{' '}
                                    <Button variant="success" style={{minWidth:"75px"}} as={Link} to="/registerAddress">Next </Button>{' '}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
  }
}
