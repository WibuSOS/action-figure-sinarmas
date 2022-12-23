import React from 'react'
import './../styles/custom.css'
// import
import { ICONS } from './../const'
const url = "http://localhost:3006/"
export default function Header() {
    if(localStorage.getItem('name')==null)
    {
        return(
            
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFB13D", }}>
            <div className="container-fluid">
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand ms-5" href="#id"><img src={ICONS + "profile1.png"} alt={"dd"} style={{ width: "40px", height: "40px", marginRight: "15px" }} /> Bandai.Com</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#w" style={{ padding: "2px 0 0 0" }}><img src={ICONS + "user02.png"} alt={"dd"} style={{ width: "40px", height: "40px" }} /></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        )
    }
    else{
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFB13D", }}>
            <div className="container-fluid">
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand ms-5" href="#id"><img src={ICONS + "profile1.png"} alt={"dd"} style={{ width: "40px", height: "40px", marginRight: "15px" }} /> Bandai.Com</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div style={{ width: "40%", backgroundColor: "white", alignItems: "center", position: "relative", }} className="rounded d-flex ms-4 px-2 py-1">
                        <img src={ICONS + "search-interface-symbol.png"} alt="search logo" style={{ position: "fixed", width: "25px", height: "25px", }} />
                        <input className="w-100 remove-border" style={{ padding: "0 0 0 43px", borderTopStyle: "hidden", borderRightStyle: "hidden", borderStyle: "hidden" }} type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            url !== "" && <>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#www"><img src={ICONS + "shopping-cart-free-icon-font.png"} alt={"dd"} style={{ width: "28px", height: "28px", }} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#wa"><img src={ICONS + "file-invoice-dollar-free-icon-font.png"} alt={"dd"} style={{ width: "28px", height: "28px" }} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#we"><img src={ICONS + "bookmark-free-icon-font.png"} alt={"dd"} style={{ width: "28px", height: "28px", }} /></a>
                                </li>
                            </>
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="#w" style={{ padding: "2px 0 0 0" }}><img src={ICONS + "user02.png"} alt={"dd"} style={{ width: "40px", height: "40px" }} /></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
    }
}
