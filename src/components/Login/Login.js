import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathName || "/"

  const [signInWithEmailAndPassword, user, loading, errors] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate(from);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      setError("Fiend cannot be empty");
    } else {
      signInWithEmailAndPassword(email, password);
     setError("")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="" onSubmit={submit}>
        <div className="inpur-group">
          <label htmlFor="">Email</label>
          <input
            onBlur={handleEmail}
            type="text"
            placeholder="Email"
            name=""
            id=""
          />
        </div>
        <div className="inpur-group">
          <label htmlFor="">Password</label>
          <input
            onBlur={handlePassword}
            type="text"
            placeholder="Password"
            name=""
            id=""
          />
        </div>

        <div className="inpur-group">
          <input type="submit" value="Login" name="" id="" />
        </div>
      </form>
      <p style={{ color: "red" }}>
        {errors?.message}
        {error}
      </p>
      <p>
        New to ema-jhon ? <Link to="/signup">Create an account</Link>
      </p>
      <div className="line">
        <div className="lines"></div>
        <p>or</p>
        <div className="lines"></div>
      </div>

      <div className="third-party-auth">
        <p>Continue with google</p>
      </div>
    </div>
  );
};

export default Login;
