import React, { useState } from 'react'
import "./Signup.css"
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const [address,setAddress]=useState()
    const [password, setPassword] = useState({
        password: "",
        showPassword: false,
    })
    const navigate=useNavigate()
    // pass
    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
<div className='container my-4' style={{ minHeight: "90vh" }}>
               <div className='w-50 card p-4 shadow' style={{margin:"auto"}}>

              
                <form>
                    <h5 className='text-center'>REGISTER FORM</h5>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Your Name" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" required />

                    </div>
                   
                    <div className="my-3 password-input position-relative">
                        <label htmlFor="exampleInputPassword1" className="form-label has-float-label">Password</label>
                        <input className="form-control " id="exampleInputPassword1" placeholder="Enter Your Password" required type={password.showPassword ? "text" : "password"}
                            value={password.password} onChange={(e) => setPassword(e.target.value)} />
                        <span className='show-hide' style={{position: "absolute",top: "37px",right:"10px"}} onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {password.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                        </span>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone1" placeholder="Enter Your Phone Number" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress1" placeholder="Enter Your Address" required />
                    </div>
                  

                    <button type="submit" className="btn-primary1 mb-3">Register</button>
                    <p className='my-3'>Already have an account? <span type="button" className='text-primary forget' onClick={() => { navigate("/login") }}>Sign in</span></p>
                </form>
                </div>
            </div>
  )
}

export default Signup