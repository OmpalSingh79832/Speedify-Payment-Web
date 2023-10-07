import React,{useState} from 'react'
import "./Login.css"
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword] = useState({
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
<div className='container mt-4' style={{ minHeight: "90vh" }}>
<div className='w-50 card p-4 shadow' style={{margin:"auto"}}>

                <form >

                    <h5 className='text-center'>LOGIN FORM</h5>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" required />

                    </div>
                    <div className="mb-3 password-input position-relative">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input className="form-control " id="exampleInputPassword1" placeholder="Enter Your Password" required type={password.showPassword ? "text" : "password"}
                            value={password.password} onChange={(e) => setPassword(e.target.value)} />
                        <span className='show-hide' style={{position: "absolute",top: "37px",right:"10px"}} onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                             {password.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                        </span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label forgot" style={{
                            cursor: "pointer",
                            color: "blue",


                        }}
                            onClick={() => { navigate("/forgot-password") }}
                        >Forgot Password</label>

                    </div>


                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </form>
                <div className="row text-center new-user-login" >
                    <h6 className='new-user-login-border' >New User</h6>
                    <p className='border border-dark-subtle py-2 px-5 rounded mt-3' type="button" onClick={() => { navigate("/signup") }}>Create your new account</p>
                </div>
            </div>

</div>
  )
}

export default Login