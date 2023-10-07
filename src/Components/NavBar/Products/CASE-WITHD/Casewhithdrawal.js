import React from 'react'
import "./Casewithdrawal.css"
import CaseImage from "../../../../img/case-img.webp"
export const Casewithdrawal = () => {
  return (
    <div className="Casewithd-section" >
    <div className='container shadow bg-white p-4 border-change-Casewithd'>
    <div className="row">
        <div className="col-lg-6 ">
        <h2 className='Casewithd-heading'>CASH WITHDRAWAL</h2>
        <ul className='text-section-Casewithd'  >
         <li> Aadhaar Enabled Payment System (AEPS) is a payment service that allows a bank customer to use Aadhaar as his/her identity to access his/her Aadhaar enabled bank account and perform basic banking
          transactions like balance enquiry, cash withdrawal, remittances through a Business Correspondent.</li>
        </ul>
        </div>
        <div className="col-lg-6">
        <img src={CaseImage} alt='' className='Casewithd-img'/>
       
        </div>
    </div>

</div>
    </div>
  )
}
