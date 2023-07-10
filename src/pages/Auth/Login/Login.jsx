import "./Login.css";

import { useState } from "react";

import { Link } from "react-router-dom";

import twitter from "../../../image+icon/twitter.svg"

import { useAuth } from "../../../contexts/AuthProvider";

export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { handleLogin, authError } = useAuth();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  return (
    <div>
    <main className="login-page-container">
      <section className="login-form-container">
        <img src={twitter} alt={twitter} width="50px" height="41px"/>
        <h1 style={{fontWeight:650,color:"white"}}>Login with Twitter</h1>

        <form
          onSubmit={(e) => {
            handleLogin(e, loginForm.username, loginForm.password);
            setLoginForm({ username: "", password: "" });
          }}
          
        >
          <div className="container_all_input">
            <input
            className="container_input"
              placeholder="Username"
              value={loginForm.username}
              required
              onChange={(e) =>
                setLoginForm({
                  ...loginForm,
                  username: e.target.value,
                })
              }
              id="username"
              type="text"
            />
        
          
              <input className="container_input"
                placeholder="Password"
                minLength="8"
                value={loginForm.password}
                required
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
                id="password"
                type={!hidePassword ? "text" : "password"}
              />
              
            
          </div>
          
          <div className="btn-container">
            <button type="submit" className="btn">
              {" "}
              Login
            </button>
            <button className="btn"
              onClick={(e) => {
                handleLogin(e, "rohitmane9022", "12345678");
                setLoginForm({ username: "", password: "" });
              }}
            >
             
                Login as a Guest
              
            </button>
          </div>
          <p style={{textAlign:"right",textDecoration:"none", marginTop:"10px",fontSize:"19px",color:"white"}}>Click Here <Link to="/signup" style={{color:"#1DA1F2",fontSize:"19px",fontWeight:"590"}}>Signup</Link></p>
        </form>
      </section>
    </main>
    </div>
  );
};
