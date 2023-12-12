import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import './mix.css'; 


const Login = () => {

    const [email, setEamil] = useState("");
    const sendOtp = (e)=>{
        e.preventDefault();

        if(email === ""){
            toast.error("Please enter your email!");
        }
        else if(!email.includes("@")){
            toast.warning("Please enter a valid email!");
        }
        else{
            toast.success("Login Successful!");
        }
    };


    return(
    <>
     <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Welcome Back, Log in</h1>
                <p>Hi, we are you glad you are back. Please Login!</p>
            </div>
            <form>
            <div className="form_input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" onChange={(e) => setEamil(e.target.value)} placeholder='Enter your email address'></input>
            </div>
            <button className="btn" onClick={sendOtp}>Login here</button>
            <p>Don't have an account? <NavLink to="/register">Sign up</NavLink> </p>
        </form>
        </div>
        <ToastContainer />
     </section>
    </>
    )
}

export default Login;
