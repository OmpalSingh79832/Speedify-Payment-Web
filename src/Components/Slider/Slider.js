import Transfer from "../../img/bharat-recharge.png"
import Aadhar from "../../img/aadhar.jpeg"
import Bill from "../../img/bill-payment.png"
import Insurance from "../../img/insurance.jpeg"
import Satyamev from "../../img/satyamev.png"
import Lion from "../../img/lion.png"
import Ministry from "../../img/ministry.png"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./Slider.css"

import { Autoplay, Navigation } from 'swiper/modules';

export default function Carasoul() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div className='container slider-container d-flex '>
            <div className='col-lg-6'>
              <img src={Transfer} alt='' className='img-transfer' /></div>
            <div className='col-lg-6 right-text'>
              <h4>Money Transfer</h4>
              <p>Transfer money instantly to any bank<br />account in India  using cash from <br /> Customer. </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container slider-container d-flex'>
            <div className='col-lg-6'>
              <img src={Aadhar} alt='' className='img-transfer' /></div>
            <div className='col-lg-6 right-text'>
              <h4>Aadhar Banking</h4>
              <p>Allow your Customer to withdraw cash &<br />transfer money at your doorstep with just <br />the
                fingerprint  & Aadhar number. </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container slider-container d-flex'>
            <div className='col-lg-6'>
              <img src={Bill} alt='' className='img-transfer' /></div>
            <div className='col-lg-6 right-text'>
              <h4>Utility Bill Payment</h4>
              <p>Pay utility bills for 100+ billers in India<br />using Speedify Payment plateform.All under<br /> one roof. <br /></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container slider-container d-flex'>
            <div className='col-lg-6'>
              <img src={Insurance} alt='' className='img-transfer' /></div>
            <div className='col-lg-6 right-text'>
              <h4>Sell Insurance</h4>
              <p>Low cost, simple paperwork & easy claim<br />process makes our insurance policies<br />the
                best choice for your customers.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <h1 className='banking-service'>We proudly make in India</h1>
      <div className='banking-service-line'> </div>
      <div className="row prod-img">
        <div className="col-lg-4"><img src={Satyamev} alt="" className="styamev-image" /></div>
        <div className="col-lg-4"> <img src={Lion} alt="" className="lion-image-io" /></div>
        <div className="col-lg-4"><img src={Ministry} alt="" className="ministry-image-io" /></div>
      </div>
    </>
  );
}