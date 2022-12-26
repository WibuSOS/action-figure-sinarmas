import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/custom.css'
import { ICONS } from '../const'

export default function Header() {
    if (localStorage.getItem('name') == null) {
        return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFB13D", }}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand ms-5"><img src={ICONS + "profile1.png"} alt="dd" style={{ width: "40px", height: "40px", marginRight: "15px" }} /> Bandai.Com</Link>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FFB13D", }}>
                <div className="container-fluid">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand ms-5"><img src={ICONS + "profile1.png"} alt="dd" style={{ width: "40px", height: "40px", marginRight: "15px" }} /> Bandai.Com</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div style={{ width: "40%", backgroundColor: "white", alignItems: "center", position: "relative", }} className="rounded d-flex ms-4 px-2 py-1">
                            <img src={ICONS + "search-interface-symbol.png"} alt="search logo" style={{ position: "absolute", width: "25px", height: "25px", }} />
                            <input className="w-100 remove-border" style={{ padding: "0 0 0 43px", borderTopStyle: "hidden", borderRightStyle: "hidden", borderStyle: "hidden" }} type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" aria-current="page" style={{ border: "none", backgroundColor: "#FFB13D" }}><img src={ICONS + "shopping-cart-free-icon-font.png"} alt="dd" style={{ width: "28px", height: "28px", }} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className="nav-link" style={{ border: "none", backgroundColor: "#FFB13D" }}><img src={ICONS + "file-invoice-dollar-free-icon-font.png"} alt="dd" style={{ width: "28px", height: "28px" }} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bookmark" className="nav-link" style={{ border: "none", backgroundColor: "#FFB13D" }}><img src={ICONS + "bookmark-free-icon-font.png"} alt="dd" style={{ width: "28px", height: "28px", }} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link" style={{ padding: "2px 0 0 0" }}><img src={ICONS + "user02.png"} alt="dd" style={{ width: "40px", height: "40px" }} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
