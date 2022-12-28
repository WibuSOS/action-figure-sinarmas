import React, { useEffect, useState } from 'react'
import { IMAGES_CATALOG, API_URL, RUPIAH } from './../const'
import './../styles/custom.css'
import './../styles/Transaction.css'
import axios from 'axios'
export default function Transaction() {
    const [tab, setTab] = useState(1)
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                let find = "id_person="+localStorage.getItem("id") 
                if (tab === 1) {
                    find += ("&status=1")
                } else if (tab === 2) {
                    find += ("&status=2")
                }
                else if (tab === 3) {
                    find += ("&status=3")
                } else if (tab === 4) {
                    find += ("&status=4")
                } else if (tab === 5) {
                    find += ("&status=5")
                }
                const res = await axios.get(API_URL + "/history?" + find)
                setData(res.data)
            } catch (err) {

            }

        }
        getData()
    }, [tab])


    const status = (data) => {
        if (data === 1) {
            return "Await Payment"
        } else if (data === 2) {
            return "Expired"
        } else if (data === 3) {
            return "Paid"
        } else if (data === 4) {
            return "Sent"
        } else if (data === 5) {
            return "Finished"
        }
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const chooseTab = (i) => {
        setTab(i)
        // getData()
    }
    // const [value, setV] = useState(["1", "2","3","4","5,","dadad","dada","dadada","dadadsd","dadadadd","dadadasdasd","adadsads"])
    // const d= value.slice(0,3)
    return (
        <div className='container pt-2'>
            <h2 className='fw-bold ms-4'>Transaction</h2>
            <hr className='text-dark' />
            <div style={{ display: "flex" }} className="ms-4">
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
                    <li className="nav-item" onClick={() => chooseTab(1)}>
                        <a className={"nav-link" + (tab === 1 ? " active text-active-orange" : " text-dark")} aria-current="page" href="#d">Wait Payment</a>
                    </li>
                    <li className="nav-item" onClick={() => chooseTab(2)}>
                        <a className={"nav-link" + (tab === 2 ? " active text-active-orange" : " text-dark")} href="#d">Expired</a>
                    </li>
                    <li className="nav-item" onClick={() => chooseTab(3)}>
                        <a className={"nav-link" + (tab === 3 ? " active text-active-orange" : " text-dark")} href="#d">Paid</a>
                    </li>
                    <li className="nav-item" onClick={() => chooseTab(4)}>
                        <a className={"nav-link" + (tab === 4 ? " active text-active-orange" : " text-dark")} href="#d">Sent</a>
                    </li>
                    <li className="nav-item" onClick={() => chooseTab(5)}>
                        <a className={"nav-link" + (tab === 5 ? " active text-active-orange" : " text-dark")} href="#d">Finish</a>
                    </li>
                </ul>
            </div>
            <div className='w-md-75 pt-6'>
                {
                    data.length === 0 ? <div className='text-center mt-3'>
                        "Data Kosong"
                    </div> :
                        data.map(d => {
                            return (
                                <div className='rounded p-4 my-2 mb-3 border shadow'>
                                    <div className='row mb-4'>
                                        <div className='col-md-3 col-sm-6 text-center'>
                                            Paycode : {d.paycode}
                                        </div>
                                        <div className='col-md-3 col-sm-6 text-center' style={{ borderLeft: "1px solid black" }}>
                                            Order ID : {d.orderID}
                                        </div>
                                        <div className='col-md-3 col-sm-6 text-center' style={{ borderLeft: "1px solid black" }}>
                                            {new Date(d.tanggal.substring(0, 4) + "-" + d.tanggal.substring(4, 6) + "-" + d.tanggal.substring(6, 8)).toLocaleDateString("en-US", options)}
                                        </div>
                                        <div className='col-md-3 col-sm-6 text-center' style={{ borderLeft: "1px solid black" }}>
                                            {d.jumlah} Item{d.jumlah > 1 && "s"}
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-md-9">
                                            {

                                                d.detail.map(i => {
                                                    return (
                                                        <div className="row mb-2">
                                                            <div className="col-md-3 col-12 image-catalog">
                                                                <img src={IMAGES_CATALOG + i.gambar} alt="search logo" className='w-100 ' style={{}} />
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className='d-flex justify-content-between detail'>
                                                                    <div id="" >
                                                                        <p>{i.nama}</p>
                                                                        <p>{RUPIAH(i.harga)}</p>
                                                                        <p>{i.jumlah}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p>{RUPIAH(i.harga * i.jumlah)}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                        <div className='col-md-3 col-12'>
                                            <hr className="d-block d-md-none" />
                                            <div className='d-flex h-100 w-100 align-items-center side'>
                                                <div className="d-none d-md-block border-start h-100" style={{}}>
                                                    {/* d-none md-block  */}
                                                </div>
                                                {/* <div className='w-auto'>

                                        </div> */}
                                                <p className='text-center w-100'>Status {status(d.status)}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }


            </div>
        </div>
    )
}
