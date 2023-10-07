import React from 'react'
import "./SuperDistributor.css"
import Superdsr from "../../../../img/superdsr.png"
// import {BiRightArrowCircle} from "react-icons/bi"
export const SuperDistributor = () => {
  return (
    <div className="superdis-section" >
    <div className='container shadow bg-white p-4 border-change-superdis'>
    <div className="row">
        <div className="col-lg-5">
        <img src={Superdsr} alt='' className='superdis-img'/>
       
        </div>
        <div className="col-lg-7">
        <h2 className='superdis-heading'>Super Distributor</h2>
     
        <li>white label solution for B2B travel & recharge software is basically a ready-made and fully integrated website with your own domain name and logo, which makes branding very easy. As a reseller you will be free from concerns about needing to spend time and money on development. You can add your own branding and identity, and start business immediately. With your own white label you can provide your customers a prepackaged solution to meet their needs immediately. No doubt you are giving them a properly tested and proven platform for all profitable online services, it will add some extra smiles in your feedback. To achieve your business goals you need to get maximum from available resources and competencies. With a white label software you do not deviate from your core competency and business model. You have to just concentrate on marketing, 
        networking and customer care after all your network is the measurement of your net worth.</li>
  
        </div>
    </div>

</div>
    </div>
  )
}
