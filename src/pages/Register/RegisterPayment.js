import React, { Component } from 'react'
import { Button,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class RegisterPayment extends Component {
  render() {
    return (
    <div style={{marginTop:"70px"}}>       
        <div className="container">
            <div className='row justify-content-center' >
                <div className='col-md-6' >
                    
                    <div className='card p-4' style={{backgroundColor: "#F5F5F5"}}>
                         <h3>Payment</h3>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                               
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Cardholder Name' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Card Number' className='form-control'></input>
                                </div>
                     
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Expiry Date(mm/yy)' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='CVV Code' className='form-control'></input>
                                </div>
                                
                                <div className='d-flex justify-content-around' style={{marginTop:"25px"}}>
                                    <Button variant="danger" style={{minWidth:"75px"}} as={Link} to="/login">Cancel</Button>{' '}
                                    <Button variant="success" style={{minWidth:"75px"}} as={Link} to="/registerSummary">Next </Button>{' '}
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
