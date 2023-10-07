import React from 'react'
import "./Benifit.css"
import Instant from "../../img/instant.png"
import Industry from "../../img/industry.png"
import Seamless from "../../img/seamless.jpeg"
import Api from "../../img/gif-4.gif"
import Document from "../../img/gif-3.gif"
import Logo from "../../img/logo.jpeg"
function Benifit() {
  return (
    <div className='background'>
      <h1 className='banking-service'>Benefits</h1>
      <div className='banking-service-linee'> </div>
      <div className='row'>
        <div className='col-lg-4 '>
          <img src={Instant} alt='' className='instant-1' />
          <h5 className='heading1'>Instant retailer onboarding</h5>
        </div>
        <div className='col-lg-4  '>
          <img src={Industry} alt='' className='instant-2' />
          <h5 className='heading2'>Industry-leading success rates</h5>
        </div>
        <div className='col-lg-4'>
          <img src={Seamless} alt='' className='instant-3' />
          <h5 className='heading3'>Seamless integration with all the service</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 text-center'>
          <div className='w-75' style={{ margin: "auto" }}>
            <img src={Api} alt='' className='document1' />
            <h4 className='my-3 '>Easy Integration</h4>
            <p className='para-int1 '>Our API is well-documented and easy to understand. Integrating is as easy as it can get. We provide 24x7 manual integration
              support just in case, leaving no stone unturned to make the integration process seamless.</p>
          </div>
        </div>
        <div className='col-lg-6 text-center'>
          <img src={Document} alt='' className='document2' />
          <div className='w-75' style={{ margin: "auto" }}>
            <h4 className='my-3' >AEPS</h4>
            <p className='para-int2 '>Here you can transfer funds, make payments, deposit cash, make withdrawals, make enquiry about bank balance, etc. It also allows customers to make payments using their Aadhaar number and by providing Aadhaar verification at point of Sale (PoS) or micro ATMs .</p>
          </div>
        </div>
      </div>
      <div>
        <img src={Logo} alt='' className='paragraph' />
        <h3 className='text-center' style={{ marginTop: "20px", color: "gray" }}>SPEEDIFY PAYMENT</h3>
        <p className='containt'>We use the same APIs here at Speedify Payment! Every API call is secured with one-time-use tokens generated using asymmetric cryptography. Our open-source libraries make it extremely easy & error-proof</p>
      </div>
    </div>
  )
}

export default Benifit