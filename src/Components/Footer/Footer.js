import React from 'react'
import Logo from "../../img/logo.jpeg"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { VscGithubInverted } from "react-icons/vsc"
import { HiWifi } from "react-icons/hi"
import App from "../../img/appstore.png"
import Google from "../../img/googleplay.png"
import { useNavigate } from "react-router-dom"
import "./Footer.css"
function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footer-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <a href="#home">
              <img src={Logo} onClick={() => navigate("/")} alt='' className='Logo-footer' /></a>
            <p className='para-footer'>Speedify Payment has been catering to millions of low and moderate-income Indians by providing
              them with a cash-in point to convert their cash to digital and make payments for an array of services.</p>

          </div>

          <div className='col-lg-4 product-footer'>
            <h6 className='developer-prod'> Products </h6>
            <p className='prod-footer1' onClick={() => navigate('/dmt')}>Domestic Money Transfer (DMT)</p>
            <p className='prod-footer1' onClick={() => navigate('/casewithdrawal')}>Cash Withdrawal</p>
            <p className='prod-footer1' onClick={() => navigate('/bbps')}>BBPS Recharge</p>
            <p className='prod-footer1' onClick={() => navigate('/cms')}>Case Management System (CMS)</p>
            <p className='prod-footer1' onClick={() => navigate('/recharge')}>Recharge</p>
            <p className='prod-footer1' onClick={() => navigate('/pancard')}>Pan-Card (UTI / NSDL)</p>
            <p className='prod-footer1' onClick={() => navigate('/aeps')}>AePS</p>
            <p className='prod-footer1' onClick={() => navigate('/minimicroatm')}>Micro ATM / Mini ATM</p>
          </div>
          <div className='col-lg-2'>
            <h6 className='company-footer'>COMPANY</h6>
            <p className='prod-footer1' onClick={() => navigate('/aboutus')}>About Us</p>
            <p className='prod-footer1' onClick={() => navigate('/faqs')}>FAQs</p>
            <p className='prod-footer1'>Terms & Condition</p>
            <p className='prod-footer1'>Privacy Policy</p>
          </div>
          <div className='col-lg-2'>
            <h6 style={{ marginTop: "50px", color: "rgb(19 18 18)", fontWeight: "700", marginBottom: "15px" }}>Download The App</h6>
            <img src={Google} alt='' style={{ width: "120px", height: "50px", cursor: "pointer", marginTop: "0px", marginBottom: "10px" }} /><br />
            <img src={App} alt='' style={{ height: "50px", width: "120px", cursor: "pointer" }} /><br />

            <p className='follow-footer'>Follow Us</p>

            <FaFacebook className='footer-icon' />
            <FaLinkedin className='footer-icon' />
            <FaSquareTwitter className='footer-icon' />
            <VscGithubInverted className='footer-icon' />
            <HiWifi className='footer-icon' />

          </div>
        </div>


      </div>
      <p className='all-reserved-footer' >&copy;2023 Speedify Payment. All rights reserved</p>
    </div>
  )
}

export default Footer