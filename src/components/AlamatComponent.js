import React from 'react'

export default function AlamatComponent() {
  return (
    <div style={{ borderRadius:"15px", backgroundColor:"#F3F2F2"}} className="p-3 w-100" >
        <h2>Delivery Details</h2>
        <hr className='w-100'/>
        <div className='row'>
          <div className='col-md-8 col-6'>
          <p className='fs-4'>Nama</p>
            <p className='fw-bold'>Address</p>
            <p style={{ overflow: "hidden", 
   textOverflow :"ellipsis"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Tellus orci ac auctor augue. Urna nunc id cursus metus aliquam eleifend mi.
   </p>
   <p>Nomor Hp</p>
          
          </div>
          <div className='col-md-4 col-6'>
            <a href="http://localhost:50006" className='fw-bold text-dark '> <p className="mb-4">Change Address</p> </a>
            <p>Payment</p>
            <p>Choose Method</p>
          </div>
        </div>
    </div>
  )
}
