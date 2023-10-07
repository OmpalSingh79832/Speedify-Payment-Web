import React from 'react'
import "./Aeps.css"
import AepsImage from "../../../../img/aeps-image.jpg"
export const Aeps  = () => {
    return (
        <div className="aeps-section" >
            <div className='container shadow bg-white p-4 border-change-aeps'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h2 className='aeps-heading'>Aadhaar Enabled Payment System (AEPS)</h2>
                        <ul className='text-section-aeps'>
                            <li>To empower a bank customer to use Aadhaar as his/her identity to access his/ her respective Aadhaar enabled bank account and perform basic banking transactions like cash deposit, cash withdrawal, Intrabank or interbank fund transfer, balance enquiry and obtain a mini statement through a Business Correspondent
                                To sub-serve the goal of Government of India (GoI) and Reserve Bank of India (RBI) in furthering Financial Inclusion.
                                To sub-serve the goal of RBI in electronification of retail payments.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <img src={AepsImage} alt=''className='aeps-img'/>
                     </div>
                </div>

            </div>
        </div>
    )
}
