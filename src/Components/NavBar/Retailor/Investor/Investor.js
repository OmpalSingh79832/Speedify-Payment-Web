import React from 'react'
import "./Investor.css"
import Pnvestor from "../../../../img/investor.jpg"
import {BiRightArrowCircle} from "react-icons/bi"
export const Investor = () => {
  return (
    <div className="investor-section" >
    <div className='container shadow bg-white p-4 border-change'>
    <div className="row">
        <div className="col-lg-6 ">
        <h2 className='investor-heading'>Grow and multiply your money</h2>
        <ul className='text-section-investor'  >
          <li ><BiRightArrowCircle style={{fontSize:"25px", marginRight:"10px",backgroundColor:"rgb(44, 92, 235)",borderRadius:"50%",color:"white"}}/>Navigate flawlessly with just a click</li>
          <li><BiRightArrowCircle style={{fontSize:"25px", marginRight:"10px",backgroundColor:"rgb(44, 92, 235)",borderRadius:"50%",color:"white"}}/>Intuitive Interface: Easy dashboard</li>
          <li><BiRightArrowCircle style={{fontSize:"25px", marginRight:"10px",backgroundColor:"rgb(44, 92, 235)",borderRadius:"50%",color:"white"}}/>Track & optimize your investments</li>
          <li><BiRightArrowCircle style={{fontSize:"25px", marginRight:"10px",backgroundColor:"rgb(44, 92, 235)",borderRadius:"50%",color:"white"}}/>Explore multiple investment options with ease</li>
          <li><BiRightArrowCircle style={{fontSize:"25px", marginRight:"10px",backgroundColor:"rgb(44, 92, 235)",borderRadius:"50%",color:"white"}}/>Short-term corporate bond funds</li>
          <li><BiRightArrowCircle style={{fontSize:"25px", marginRight:"10px",backgroundColor:"rgb(44, 92, 235)",borderRadius:"50%",color:"white"}}/>Dividend stock funds</li>
        </ul>
        </div>
        <div className="col-lg-6">
        <img src={Pnvestor} alt='' className='investor-img'/>
       
        </div>
    </div>

</div>
    </div>
  )
}
