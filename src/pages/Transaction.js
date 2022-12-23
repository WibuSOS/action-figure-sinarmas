import React, {useEffect, useState} from 'react'
import { IMAGES_CATALOG } from './../const'
import  './../styles/custom.css'
import  './../styles/Transaction.css'
export default function Transaction() {
    const [tab, setTab] = useState(1)
    const chooseTab=(i)=>{
        setTab(i)
    }
    // const [value, setV] = useState(["1", "2","3","4","5,","dadad","dada","dadada","dadadsd","dadadadd","dadadasdasd","adadsads"])
    // const d= value.slice(0,3)
    return (
    <div className='container pt-2'>
        <h2 className='fw-bold ms-4'>Transaction</h2>
        <hr className='text-dark'/>
        <div style={{display:"flex"}} className="ms-4">
            {/* <p>s</p>
            <p>s</p> */}
            {/* <div style={{width:"100px", border:"1px solid black", borderTopRightRadius:"20px", cursor:"pointer", color:(tab===1?"#FFB13D":"black")}} className="p-1" onClick={()=>chooseTab(1)}>
                <p className='text-center m-0'>Active</p>
            </div>
            <div style={{width:"100px", border:"1px solid black", borderTopRightRadius:"20px", cursor:"pointer", color:(tab===2?"#FFB13D":"black")}} className="p-1" onClick={()=>chooseTab(2)}>
            <p className='text-center m-0'>Active</p>
            </div>
            <div style={{width:"100px", border:"1px solid black", borderTopRightRadius:"20px", cursor:"pointer", color:(tab===3?"#FFB13D":"black")}} className="p-1" onClick={()=>chooseTab(3)}>
                <p className='text-center m-0' >Active</p>
            </div>
            <div style={{width:"100px", border:"1px solid black", borderTopRightRadius:"20px", cursor:"pointer", color:(tab===4?"#FFB13D":"black")}} className="p-1" onClick={()=>chooseTab(4)}>
                <p className='text-center m-0'>Active</p>
            </div>
            <div style={{width:"100px", border:"1px solid black", borderTopRightRadius:"20px", cursor:"pointer", color:(tab===5?"#FFB13D":"black")}} className="p-1" onClick={()=>chooseTab(5)}>
                <p className='text-center m-0'>Active</p>
            </div> */}
            <ul className="nav nav-tabs">
                <li className="nav-item" onClick={()=>chooseTab(1)}>
                    <a className={"nav-link"+(tab===1? " active text-active-orange":" text-dark")} aria-current="page" href="#d">Active</a>
                </li>
                <li className="nav-item" onClick={()=>chooseTab(2)}>
                    <a className={"nav-link"+(tab===2? " active text-active-orange":" text-dark")} href="#d">Link</a>
                </li>
                <li className="nav-item" onClick={()=>chooseTab(3)}>
                    <a className={"nav-link"+(tab===3? " active text-active-orange":" text-dark")} href="#d">Link</a>
                </li>
                <li className="nav-item" onClick={()=>chooseTab(4)}>
                    <a className={"nav-link"+(tab===4? " active text-active-orange":" text-dark")}  href="#d">Disabled</a>
                </li>
            </ul>
        </div>
        <div className='w-md-75 pt-6'>
            <div className='rounded p-4 my-2 border'>
                <div className='row mb-4'>
                    <div className='col-md-3 col-sm-6 text-center'>
                        Paycode
                    </div>
                    <div className='col-md-3 col-sm-6 text-center' style={{borderLeft:"1px solid black"}}>
                        Order ID
                    </div>
                    <div className='col-md-3 col-sm-6 text-center' style={{borderLeft:"1px solid black"}}>
                        Tanggal
                    </div>
                    <div className='col-md-3 col-sm-6 text-center' style={{borderLeft:"1px solid black"}}>
                        Items
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-12 image-catalog'>
                        <img src={IMAGES_CATALOG+"flash-po-nendoroid-denji-chainsaw-man-re-release.jpg"} alt="search logo" className='w-100 ' style={{}}/>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='d-flex justify-content-between detail'>
                            <div id="" >
                                <p>Figure A</p>
                                <p>Harga</p>
                                <p>Jumlah</p>
                            </div>
                            <div>
                                <p>Total</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-md-3 col-12'>
                        <hr  className="d-block d-md-none"/>
                        <div className='d-flex h-100 w-100 align-items-center side'>
                            <div className="d-none d-md-block border-start h-100" style={{ }}>
                            {/* d-none md-block  */}
                            </div>
                            {/* <div className='w-auto'>

                            </div> */}
                            <p className='text-center w-100'>Status Paid</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
