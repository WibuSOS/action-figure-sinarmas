import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/custom.css'
import { ICONS } from '../const'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useStore } from '../context/UserContext';

export default function Header() {
    const navigate = useNavigate();
    const { state, dispatch } = useStore()

    const FindProduct = (input) => {
        dispatch({ type: "search", payload: input })
    }

    if (localStorage.getItem('name') == null) {
    }
    else {
        const logout = () => {
            localStorage.removeItem('name');
            localStorage.removeItem('id');
            dispatch({ type: "delete" });
            navigate('/');
        }
        return (
            <nav className="navbar navbar-expand-lg background-nav">
                <div className="container-fluid">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand ms-5"><img src={ICONS + "profile1.png"} alt="dd" className='img-profile' /> Sobat Pega</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div style={{ width: "40%", backgroundColor: "white", alignItems: "center", position: "relative", }} className="rounded d-flex ms-4 px-2 py-1">
                            <img src={ICONS + "search-interface-symbol.png"} alt="search logo" style={{ position: "absolute", width: "25px", height: "25px", }} />
                            <input onChange={(e) => FindProduct(e.target.value)} className="w-100 remove-border" style={{ padding: "0 0 0 43px", borderTopStyle: "hidden", borderRightStyle: "hidden", borderStyle: "hidden" }} type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" aria-current="page" >
                                    <img src={ICONS + "shopping-cart-free-icon-font.png"} alt="dd" className='img-nav' />
                                    <span class="position-absolute top-10 start-1 translate-middle badge rounded-pill bg-danger">
                                        {state.cart > 0 ? state.cart : ''}
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className="nav-link" >
                                    <img src={ICONS + "file-invoice-dollar-free-icon-font.png"} alt="dd" className='img-nav' />
                                    <span class="position-absolute top-10 start-1 translate-middle badge rounded-pill bg-danger">
                                        {state.history > 0 ? state.history : ''}
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bookmark" className="nav-link img-link">
                                    <img src={ICONS + "bookmark-free-icon-font.png"} alt="dd" className='img-nav' />
                                    <span class="position-absolute top-10 start-1 translate-middle badge rounded-pill bg-danger">
                                        {state.bookmark > 0 ? state.bookmark : ''}
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavDropdown title={<img src={ICONS + "user-free-icon-font.png"} className="img-NavDropdown" alt="dd" />} id="basic-nav-dropdown" className="p-0 nav-link">
                                    <NavDropdown.Item>
                                        <Link to="/address" className='img-font'>
                                            <img src={ICONS + "address2.png"}alt="address" className='img-dropdown img-font' />Address
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <p onClick={() => logout()}><img src={ICONS + "log-out.png"} alt="dd" className='img-dropdown' />   Log Out</p>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
