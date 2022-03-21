import React from 'react'
import "./forgot.css";

const Forgot = () => {
  return (
    <div className="forgot">
    <div className="forgot-screen">
        <div className="app-title">
            <h1>Forgot</h1>
        </div>

        <div className="forgot-form">

            <div className="control-group">
            <input type="email" className="forgot-field" value="" placeholder="email" id="forgot-email" required/>
            <label className="forgot-field-icon fui-user" for="forgot-name"></label>
            </div>
            <a className="btn btn-primary btn-large btn-block" href="#">submit</a>
        </div>
    </div>
</div>
  )
}

export default Forgot