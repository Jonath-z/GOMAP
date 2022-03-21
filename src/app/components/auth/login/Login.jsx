import React from 'react';
import "./login.css";
import {
  Link 
} from "react-router-dom";

const Login = () => {
  return (
    <div class="login">
      <div class="login-screen">
        
          <div class="app-title">
              <h1>Login</h1>
          </div>

          <div class="login-form">
              <div class="control-group">
                <input type="text" class="login-field" value="" placeholder="username" id="login-name" required/>
                <label class="login-field-icon fui-user" for="login-name"></label>
              </div>

              <div class="control-group">
                <input type="password" class="login-field" value="" placeholder="password" id="login-pass"/>
                <label class="login-field-icon fui-lock" for="login-pass"></label>
              </div>

              <Link to='/forgot'>
                <a href="#" class="login-link" style={{textAlign:"right",marginRight:"  10px", marginBottom:"10px"}}>Forgotten password</a>
              </Link>

              <a class="btn btn-primary btn-large btn-block" href="#">login</a>

              <Link to='/register'>
                <a class="login-link">Register now</a>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Login