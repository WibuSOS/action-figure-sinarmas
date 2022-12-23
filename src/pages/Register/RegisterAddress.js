import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class RegisterAddress extends Component {
  render() {
    return (
    <div style={{marginTop:"70px"}}>       
        <div className="container">
            <div className='row justify-content-center' >
                <div className='col-md-6' >

                    <div className='card p-4' style={{backgroundColor: "#F5F5F5"}}>
                        <h3>Address</h3>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                               
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Name' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Street Address' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <select placeholder='Province' className='form-control'>
                                        <option>
                                            Province
                                        </option>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                    </select>
                                    
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <select placeholder='Cit'y className='form-control'>
                                        <option>
                                            City
                                        </option>
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Postal Code' className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                    <label></label>
                                    <input placeholder='Phone Number' className='form-control'></input>
                                </div>
                                
                                <div className='d-flex justify-content-around' style={{marginTop:"25px"}}>
                                    <Button variant="danger" style={{minWidth:"75px"}} as={Link} to="/">Cancel</Button>{' '}
                                    <Button variant="success" style={{minWidth:"75px"}} as={Link} to="/registerPayment">Next </Button>{' '}
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
