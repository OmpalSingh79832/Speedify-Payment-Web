import React from 'react'
import "./MiniMicroAtm.css"
import MiniAtm from "../../../../img/minimicroatm-image.jpg"
export const MiniMicroAtm = () => {
    return (
        <div className="miniatm-section" >
            <div className='container shadow bg-white p-4 border-change-miniatm'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h2 className='miniatm-heading'>MICRO ATM / MINI ATM </h2>
                        <ul className='text-section-miniatm'>
                            <li>Micro ATM is basically a mini ATM that allows customers to swipe their debit cards for daily transactions. It works
                             like the handheld point of sale (POS) terminals which can be specifically used to disburse cash in remote locations or rural areas of the country. With the portable characteristic, banks can easily connect with their core banking system to provide different services. It is a doorstep mobile banking arrangement cum-mobile ATM device.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <img src={MiniAtm} alt=''className='miniatm-img'/>
                     </div>
                </div>

            </div>
        </div>
    )
}
