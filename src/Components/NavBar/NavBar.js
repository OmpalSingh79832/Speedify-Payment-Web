import "./NavBar.css";
import React, { useState } from "react";
import Logo from "../../img/logo.jpeg";
import { FiPhoneForwarded } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
function NavBar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar">
                <div className='d-flex w-100 justify-content-between navbar-container'>
                    <img src={Logo} alt="" className='nav-logo' onClick={() => navigate("/")} />
                    <div className={click ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-list">
                            <li className="nav-item dropdown ">
                                <span className="dropdown-text">Retailers</span>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={() => navigate("/investor")}>Investor</li>
                                    <li className="dropdown-item" onClick={() => navigate("/super-distributer")}>Super Distributor</li>
                                    <li className="dropdown-item" onClick={() => navigate('/distributor')}>Distributor</li>
                                    <li className="dropdown-item" onClick={() => navigate('/dsretailor')}>DS Retailer</li>
                                    <li className="dropdown-item" onClick={() => navigate('/dsretailor')}>Retailer</li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="dropdown-text">Products</span>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" onClick={() => navigate('/dmt')}>Domestic Money Transfer (DMT) </li>
                                    <li className="dropdown-item" onClick={() => navigate('/casewithdrawal')}>Cash Withdrawal</li>
                                    <li className="dropdown-item" onClick={() => navigate('/bbps')}>BBPS Recharge</li>
                                    <li className="dropdown-item" onClick={() => navigate('/cms')}>Case Management System (CMS)</li>
                                    <li className="dropdown-item" onClick={() => navigate('/recharge')}>Recharge</li>
                                    <li className="dropdown-item" onClick={() => navigate('/pancard')}>Pan-Card (UTI / NSDL)</li>
                                    <li className="dropdown-item" onClick={() => navigate('/aeps')}>AePS </li>
                                    <li className="dropdown-item" onClick={() => navigate('/minimicroatm')}>Micro ATM / Mini ATM</li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate('/aboutus')}>About Us</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="dropdown-text" onClick={() => navigate('/contactus')}>Contact Us</span>
                            </li>
                            <li className="nav-item nav-contact"><FiPhoneForwarded style={{ color: "#c93f3f", marginRight: "10px", fontSize: "20px" }} />+91 9315969524</li>
                            <li className="nav-item dropdown">
                                {/* <span className="dropdown-text" onClick={() => navigate('/signup')}>SignUp</span> */}
                                {/* <span className="dropdown-text" onClick={() => navigate('/login')}>SignUp</span> */}
                            </li>
                        </ul>
                    </div>
                    <div className='me-4 custum-button-responsive'>
                        <button class="custom-btn btn-15" onClick={() => navigate('/signup')}>Sign-Up</button>
                        <button class="custom-btn btn-15" onClick={() => navigate('/login')}>Login</button>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <IoMdClose /> : <GiHamburgerMenu />}
                    </div>
                </div>

            </nav>
            <hr className="hr-line" />
        </>
    )
}

export default NavBar