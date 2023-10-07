import React from 'react'
import "./BbpsRecharge.css"
import Bharatrecharge from "../../../../img/bharat-recharge.png"
export const BbpsRecharge  = () => {
    return (
        <div className="bbpsrecharge-section" >
            <div className='container shadow bg-white p-4 border-change-bbpsrecharge'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h2 className='bbpsrecharge-heading'>BBPS RECHARGE</h2>
                        <ul className='text-section-bbpsrecharge'>
                            <li>Bharat Bill Payment System (BBPS), developed by the National Payments Corporation of India, is an integrated online platform for utility bill payments. The platform provides an interoperable service through a digital and network of agents i.e. bank internet banking, mobile
                                banking and retail shops for the consumer to do a bill payment, at one place, anytime and anywhere.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <img src={Bharatrecharge} alt=''className='bbpsrecharge-img'/>
                     </div>
                </div>

            </div>
        </div>
    )
}
