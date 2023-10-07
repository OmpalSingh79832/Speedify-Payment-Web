import React from 'react'
import "./Made.css"
import Retailor from "../../img/retailer.jpg"
import Distributor from "../../img/distributor.jpg"
import { TbPointFilled } from "react-icons/tb"
function Made() {
    return (

        <>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <p>Individual | Retailer | Distributor | Super Distributor | Channel Partner</p>
                <h2 style={{ color: "gray" }}>Made for everyone</h2>
                <div className='banking-service-linee'> </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6' style={{ marginTop: "70px" }}>
                        <h3 style={{ color: "gray", marginBottom: "10px" }} >Retailer</h3>
                        <p>Our retailer partners use Speedify Payment proprietary platform 'Connect' and partner services to offer cash based and assisted commerce services. This
                            provides a great earning potential and the freedom of running their own business with minimal investment.</p>
                        <button style={{ backgroundColor: "skyblue", borderRadius: "10px", border: "none", padding: "6px" }}>Join over 1,50,000 retailers</button> <br />
                        <div style={{ display: "flex" }}>
                            <button className='made-contact-btn'>Contact Sales</button>
                            <p className='learn-more-text'>   Learn more about retail products  ...</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={Retailor} alt='' className='retailor-image' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={Distributor} alt='' className='distributor-image' />
                    </div>
                    <div className='col-lg-6' style={{ marginTop: "70px" }}>
                        <h3 style={{ color: "gray", marginBottom: "10px" }} >Distributor</h3>
                        <p> An entity who purchases bulk amounts of product from a manufacturer and distributes it either directly
                            to consumers or to retailers who then sell to the consumer.
                            A distributor is a key component of the Supply Chain Model used by both Manufacturers and Retailers because it allows a company to
                            specialize or focus operations on its primary strengths of either producing goods or selling to consumers.</p>

                        <div style={{ display: "flex" }}>
                            <button className='view-ducument-btn' >View Documentation</button>

                        </div>
                    </div>

                </div>
            </div>
            <div className='baground'>
                <div className='container '>
                    <div className='w-75 justify-content-between all-systematic' style={{ margin: "auto" }}>

                        <p className='button-design'><TbPointFilled />Individual</p>
                        <p className='button-design'><TbPointFilled />Retailers</p>
                        <p className='button-design'><TbPointFilled />Distributors</p>
                        <p className='button-design'><TbPointFilled />Super Distributor</p>
                        <p className='button-design'><TbPointFilled />Channel Partner</p>
                    </div>
                    <h1 className='covered'>No matter what your business is we’ve got you covered</h1>
                </div>
            </div>
        </>
    )
}

export default Made

