import React from 'react'
import "./DsRetailor.css"
import Dsretailor from "../../../../img/dsretailor.webp"
export const DsRetailor = () => {
  return (
    <div className="dsretailor-section" >
    <div className='container shadow bg-white p-4 border-change-dsretailor'>
    <div className="row">
        <div className="col-lg-6 ">
        <h2 className='dsretailor-heading'>DS Retailor</h2>
        <ul className='text-section-dsretailor'  >
         <li>We are searching for a reliable distributor to join our team. The distributor’s responsibilities include negotiating 
            with vendors and suppliers, inspecting and receiving goods, conducting market research, 
            and updating records. You should be able to identify new business opportunities and also provide staff training.
            To be successful as a distributor, you should be able to improve relationships with suppliers and keep abreast of market
            trends. Outstanding candidates should be friendly, well-organized, and able to focus under pressure. Be wary of those who overlook important details.</li>
        </ul>
        </div>
        <div className="col-lg-6">
        <img src={Dsretailor} alt='' className='dsretailor-img'/>
       
        </div>
    </div>

</div>
    </div>
  )
}
