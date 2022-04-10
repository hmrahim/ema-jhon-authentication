import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css"
import {useState} from "react"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"


const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cPassword,setCPassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const handleEmail = e => {
        setEmail(e.target.value)


    }
    const handlePassword = e => {
        setPassword(e.target.value)

    }
    const handleCpassword = e => {
        setCPassword(e.target.value)

    }
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate("/")
    }

    const submit = e=>{
        e.preventDefault()
        if(password !== cPassword){
            setError("Password dose not match")
        }else{
            createUserWithEmailAndPassword(email,password)
            
        }
        

    }
    
    return (
        <div className="login-container">
      <h2>Sign up</h2>
      <form action="" onSubmit={submit}>
      <div className="inpur-group">
        <label htmlFor="">Email</label>
        <input onBlur={handleEmail} type="text" placeholder="Email" name="" id="" />
      </div>
      <div className="inpur-group">
        <label htmlFor="">Password</label>
        <input onBlur={handlePassword} type="text" placeholder="Password" name="" id="" />
      </div>
      <div className="inpur-group">
        <label htmlFor="">Confirm Password</label>
        <input onBlur={handleCpassword} type="text" placeholder="Confirm Password" name="" id="" />
      </div>
      <div className="inpur-group">
        <input type="submit" value="Signup" name="" id="" />
      </div>
      </form>
      <p style={{color:"red"}}>{error}</p>
      <p>
        already have an account ? <Link to="/login">Login</Link>
      </p>
      <p>or</p>
      <div className="third-party-auth">
        <p>Continue with google</p>
      </div>
    </div>
    );
};

export default Signup;