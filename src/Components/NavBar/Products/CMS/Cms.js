import React from 'react'
import "./Cms.css"
import CmsImage from "../../../../img/cms-image.jpg"
export const Cms  = () => {
    return (
        <div className="cms-section" >
            <div className='container shadow bg-white p-4 border-change-cms'>
                <div className="row">
                    <div className="col-lg-6 ">
                        <h2 className='bbpsrecharge-heading'>CASE MANAGEMENT SYSTEM (CMS)</h2>
                        <ul className='text-section-cms'>
                            <li>Case management is a collaborative approach to managing cases or projects that involve multiple stakeholders and require extensive documentation and tracking.
                            Growing organizations will always benefit from workflow and process automation to streamline repetitive tasks. These tasks include day-to-day business activities such
                             as document routing, invoice approval and data entry.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <img src={CmsImage} alt=''className='cms-img'/>
                     </div>
                </div>

            </div>
        </div>
    )
}
