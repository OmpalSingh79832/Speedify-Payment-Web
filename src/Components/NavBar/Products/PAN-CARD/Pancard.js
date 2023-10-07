import React from 'react'
import "./Pancard.css"
import PanCardImage from "../../../../img/pancard-image.png"
export const Pancard  = () => {
    return (
        <div className="pancard-section" >
            <div className='container shadow bg-white p-4 border-change-pancard'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h2 className='pancard-heading'>PAN-CARD (UTI / NSDL)</h2>
                        <ul className='text-section-pancard'>
                            <li>The PAN system of identification is a computer-based system that assigns a unique identification number to every Indian tax-paying entity. Through this method, all tax-related information for a person is recorded against a single PAN number, which acts as the primary key for the storage of information.
                             This is shared across the country and hence no two people on tax-paying entities can have the same PAN.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <img src={PanCardImage} alt=''className='pancard-img'/>
                     </div>
                </div>

            </div>
        </div>
    )
}
