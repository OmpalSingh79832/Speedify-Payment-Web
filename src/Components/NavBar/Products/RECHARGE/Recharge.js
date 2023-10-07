import React from 'react'
import "./Recharge.css"
import RechargeImage from "../../../../img/recharge-image.png"
export const Recharge  = () => {
    return (
        <div className="recharge-section" >
            <div className='container shadow bg-white p-4 border-change-recharge'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h2 className='recharge-heading'>RECHARGE</h2>
                        <ul className='text-section-recharge'>
                            <li>Recharge System that floated to aggregate, commoditize and distribute the services in most convenient form to the consumers. The motto of the company is to give convenience and value to all its customers who are looking for online mobile recharge related services. As a corporate we are committed to develop new strategies and influence business transformations with smart thinking expertise. Our business expertise aims to address the prevailing gaps in various service sectors. All Types Of Recharges (SPECIAL, VALIDITY,3G & FLEXI) Mobile , DTH, Data Card,
                             Insurance, Gas, Electricity Bills, Post-Paid, Prepaid Etc. Offline Recharge System Through Any Sim Card.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <img src={RechargeImage} alt=''className='recharge-img'/>
                     </div>
                </div>

            </div>
        </div>
    )
}
