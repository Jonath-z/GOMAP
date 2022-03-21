import React from 'react'
import { Link } from 'react-router-dom';
import "./register.css";
const Register = () => {
  return (
    <div className="register">
        
        <div className="register-screen">
            <div className="app-title">
                <h1>Register</h1>
            </div>

            <div className="register-form">
                <div className="control-group">
                    <input type="text" className="register-field" value="" placeholder="username" id="register-name" required/>
                    <label className="register-field-icon fui-user" for="register-name"></label>
                </div>

                <div className="control-group">
                    <input type="email" className="register-field" value="" placeholder="email" id="register-email" required/>
                    <label className="register-field-icon fui-user" for="register-name"></label>
                </div>

                <div className="control-group">
                    <input type="password" className="register-field" value="" placeholder="password" id="register-pass"/>
                    <label className="register-field-icon fui-lock" for="register-pass"></label>
                </div>

                <a className="btn btn-primary btn-large btn-block" href="#">register</a>

                <Link to='/login'>
                    <a className="register-link">login now</a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register