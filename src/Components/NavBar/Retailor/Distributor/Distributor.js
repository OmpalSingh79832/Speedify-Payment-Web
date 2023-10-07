import React from 'react'
import "./Distributor.css"
import Distribut from "../../../../img/distributor-img.jpeg"
import {BiRightArrowCircle} from "react-icons/bi"
export const Distributor = () => {
  return (
    <div className="investor-section" >
    <div className='container shadow bg-white p-4 border-change-distributor'>
    <div className="row">
        <div className="col-lg-7 ">
        <h2 className='distributor-heading'>Distributor</h2>
        <ul className='text-section-distributor'  >
          <li ><BiRightArrowCircle className='right-arrow-distributor'/>Sourcing stock and negotiating best deals with suppliers and vendors.</li>
          <li><BiRightArrowCircle className='right-arrow-distributor'/>Scheduling workshops with new staff and sales representatives.</li>
          <li><BiRightArrowCircle className='right-arrow-distributor' />Assisting with the planning of product launches and brand events.</li>
          <li><BiRightArrowCircle className='right-arrow-distributor' />Performing regular inventory checks and maintaining stock levels.</li>
          <li><BiRightArrowCircle className='right-arrow-distributor' />Up with potential clients and offering top-notch customer service.</li>
          <li><BiRightArrowCircle className='right-arrow-distributor' />Moving more products and securing new clients each month.</li>
        </ul>
        </div>
        <div className="col-lg-5">
        <img src={Distribut} alt='' className='distribut-img'/>
       
        </div>
    </div>

</div>
    </div>
  )
}
