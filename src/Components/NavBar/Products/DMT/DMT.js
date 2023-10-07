import React from 'react'
import "./DMT.css"
import DmtImage from "../../../../img/dmt.jpg"
export const DMT = () => {
  return (
    <div className="dmt-section" >
    <div className='container shadow bg-white p-4 border-change-dmt'>
    <div className="row">
        <div className="col-lg-6 ">
        <h2 className='dmt-heading'>DOMESTIC MONEY TRANSFER</h2>
        <ul className='text-section-dmt'  >
         <li>In the age of the internet, the methods of sending money have changed and become more convenient. Today, you can opt for an electronic transfer of funds and remit money from anywhere. While facilities like Wire Transfers allow you to send funds across international borders electronically, you can just as easily initiate instant domestic fund transfers as well. With Domestic Money 
         Transfers (DMT), you can conduct funds transfers within banks in India. To learn more, continue reading.</li>
        </ul>
        </div>
        <div className="col-lg-6">
        <img src={DmtImage} alt='' className='dmt-img'/>
       
        </div>
    </div>

</div>
    </div>
  )
}
