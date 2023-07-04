import "./Signup.css";

import { useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

import bighead from "../../../image+icon/bighead.svg" 
import twitter from "../../../image+icon/twitter.svg"

export const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatarURL:bighead
  });

  const { handleSignup, authSignupError } = useAuth();

  const [hidePassword, setHidePassword] = useState(true);
  return (
    <main className="login-page-container">
      
      <section className="login-form-container">
      <img src={twitter} alt={twitter} width="50px" height="41px"/>
        <h1 style={{fontWeight:"600"}}>SignUp with Twitter</h1>
        <form
          onSubmit={(e) => {
            handleSignup(e, signupForm);
            setSignupForm({
              firstName: "",
              lastName: "",
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
            });
          }}
         
        >
          <div className="container_all_input">
            <input
              placeholder="First Name"
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, firstName: e.target.value });
              }}
              className="container_input"
            />
          

          
            <input
              placeholder="Last Name"
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, lastName: e.target.value });
              }}
              className="container_input"
            />
          

          
            <input
              placeholder="Email"
              type="email"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, email: e.target.value });
              }}
              className="container_input"
            />
          

          
            <input
              placeholder="Username"
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, username: e.target.value });
              }}
              className="container_input"
            />
          

          
            
              <input
                minlength="8"
                placeholder="Password"
                type={!hidePassword ? "text" : "password"}
                required
                onChange={(e) => {
                  setSignupForm({ ...signupForm, password: e.target.value });
                }}
                className="container_input"
              />
              
            
          

          
              <input
                minlength="8"
                placeholder="Confirm Password"
                type={!hidePassword ? "text" : "password"}
                required
                onChange={(e) => {
                  setSignupForm({
                    ...signupForm,
                    confirmPassword: e.target.value,
                  });
                }}
                className="container_input"
              />
              
            
          </div>
          {authSignupError && (
            <div className="error-message">{authSignupError}</div>
          )}
          <div>
            <button type="submit" className="btn">
              SignUp
            </button>
          </div>
          <p style={{textAlign:"right",textDecoration:"none", marginTop:"10px",fontSize:"19px"}}>
            Click Here <Link to="/login" style={{color:"#1DA1F2",fontSize:"19px",fontWeight:"590"}}>Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
};
