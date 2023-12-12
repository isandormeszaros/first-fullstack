import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './mix.css'; 

const Register = () => {

    const [passhow, setPassShow] = useState(false);
    const [inputdata, setInputData] = useState({
        fname : "",
        lname : "",
        email : "",
        password : ""
    })

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setInputData({...inputdata,[name]:value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const {fname, lname, email, password} = inputdata;

        if (fname === "" && lname === "" && email === "" && password === ""){
            toast.warning("Please start fill the data!");
        }
        else if(fname === ""){
            toast.error("Please enter your first name!");
        }
        else if(lname === ""){
            toast.error("Please enter your last name!");
        } 
        else if(email === ""){
            toast.error("Please enter your email!");
        }
        // else if((email.charAt(0) === "@" && email.indexOf("@") === 0)){
        //     toast.error("Please enter  @ valid email!");
        // }
        else if (email.startsWith("@")) {
            toast.error("Email can't start with letter @");
        }
        else if(!email.includes("@")){
            toast.error("Please enter valid email!");
        }
        else if(password === ""){
            toast.error("Please enter your password!");
        }
        else if(password.length < 6){
            toast.error("Password length minimum 6 character!");
        }
        else{
            toast.success(`${fname} ${lname} Registration Successful`);
        }
        console.log(inputdata)
    }

  return (
    <>
        <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Sign up</h1>
                <p style={{textAlign: "center"}}>We are glad that you will be using Detechted. We hope that you will get like it!</p>
            </div>
            <form>
            <div className="form_input">
                <label htmlFor="fname">First name</label>
                <input type="text" name="fname" placeholder='Enter your first name' onChange={handleChange} />
            </div>
            <div className="form_input">
                <label htmlFor="lname">Last name</label>
                <input type="text" name="lname" placeholder='Enter your last name' onChange={handleChange} />
            </div>
            <div className="form_input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter your email address' onChange={handleChange} />
            </div>
            <div className="form_input">
                <label htmlFor="password">Password</label>
                <div className="two">
                <input type={!passhow ? "password" : "text"} name="password" placeholder='Enter your password' onChange={handleChange} />
                <div className="showpass" onClick = {() => setPassShow(!passhow)}>
                {!passhow ? <FontAwesomeIcon icon={faEye} /> :  <FontAwesomeIcon icon={faEyeSlash} />}
                </div>
                </div>
            </div>
            <button className="btn" onClick={handleSubmit}>Sign up <FontAwesomeIcon icon={faArrowRight} /></button>
            <p>Do you have an account? <NavLink to="/login">Log in</NavLink> </p>
        </form>
        </div>
        <ToastContainer/>
     </section>
    </>
  )
}

export default Register
