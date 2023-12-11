import React from 'react'
import './CSS/LoginSignup.css'
export default function LoginSignup() {
  return (
    <div className='loginSignup'>

      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name ..' name="" id="" />
          <input type="email" placeholder='Your Email ..' name="" id="" />
          <input type="password" placeholder='Your Password ..' name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already Have An Acount? <span>Login Here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p className='mt-3'>i agree to the terms of use & privacy policy.</p>
        </div>
     
     
     
     
      </div>







    </div>
  )
}
