import React from 'react'
import "./Contactus.css"
const Contactus = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-7 my-5">
                        <div>
                            <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4302602681455!2d77.3113495243982!3d28.586866475689664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f5f436ef8d%3A0xb8c94814e742e91e!2sA%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1694763804737!5m2!1sen!2sin "  width="600" height="450" alt="" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h2 className='text-bold text-center'>Contact Us</h2>
                        <form action="https://formsubmit.co/49f7a447a3e3f5c30697aa54407bb432" method='POST' target='_blank'  className='form d-flex flex-column me-3'>
                            <input type="text" name="name" placeholder='Your Name' className='my-2 p-2' />
                            <input type="email" name="email" placeholder='Your Email' className='my-2 p-2' />
                            <input type="number" name="phone" placeholder='Your Number' className='my-2 p-2' />
                            <textarea name="message" id="" cols="40" rows="5" placeholder='message' className='my-2 p-2'></textarea>
                            <button className='btn btn-danger p-3 fs-5 w-100 my-3' type='submit' target='_blank'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus