import React from 'react'
import { BsMouse } from "react-icons/bs"
import "./Home.css"
import B from "../../img/b.png"
function Home() {
  return (
    <>
      <div id="home">
        <h1 className='heading-home'>Best way to send money <br />and do Aadhaar based <br /> withdrawal</h1>
        <button className='home-btn'>Try for Free</button>
      </div>
      <img src={B} alt='' className='home-img' />
      <div className='mouse'>
        <a href="#para-homie"><BsMouse /></a>
      </div>
      <h1 className='banking-service'>Become a Banking & Financial service provider</h1>
      <div className='banking-service-line'> </div>
      <p className='para-home' id='para-homie' >Speedify Payment gives you an opportunity to turn your own shop into a Banking & Financial
        institution. Customers who do not have bank accounts and still want to transfer money using cash can do so at
        your shop. You can pay their utility bills,
        provide them insurance and earn in every service you give. Easy and effective!</p>

    </>
  )
}

export default Home