import React from 'react'
import "../LoginSignup/LoginSignup.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <>
      <div className='loginSignup-form'>
        <div className='logo'>
              <img src={logo} alt="" />
        </div>
        <div className='login-form'>
              <h3>Login into your account</h3>
              <input type="text" placeholder='Nama Siswa'/>
              <input type="text" placeholder='NIS'/>
              <Link to={"/home"}><button>LOGIN</button></Link>
        </div>
      </div>
    </>
  )
}

export default LoginSignup