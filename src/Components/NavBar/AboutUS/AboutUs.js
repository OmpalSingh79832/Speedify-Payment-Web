import React from 'react'
import "./AboutUs.css"
import AboutImage from "../../../img/about-image.gif"
const AboutUs = () => {
  return (
    <>
    <div className='container aboutus-bg '>
    <div className="row ">
        <div className="col-lg-5">
          <img src={AboutImage} alt=''  className='aboutus-img'/>
        </div>
        <div className="col-lg-7">
    <h1 className='aboutus-head'>Maya Web Technologies</h1>
     <ul>
        <li>Maya Web Technologies is a professional web services company In Noida (Delhi/ NCR), India. We design and build websites, provide internet marketing solutions and help businesses create their brand. Our Team works closely with your organization to develop a web site that is consistent with the history of your company and at the same time competent with today's technology.We are a creative and innovative in web design, development and our primary focus is to add new features that can lay down to ensure success for your online business.Creative web mart is committed in providing excellent Internet Domain Names Services with competitive prices.Hosting is like the intermediate between the website.Today’s world is the world innovation and
         creativity. Graphic Design is the combination of creativity, technical knowledge, and research skills.</li>
     </ul>
        </div>
    </div>    
    A step-by-step analysis on how hiring Maya Web Technologies can help you achieve rocket growth. Great communication can be the difference between rapid growth, or the slow death of your business.Every smart business owner understands that marketing and advertising is the key to the success and growth of his/her company. Yet many still think they can tackle their marketing needs in-house. But can you achieve extraordinary growth with an internal marketing team?
    </div>
    </>
  )
}

export default AboutUs