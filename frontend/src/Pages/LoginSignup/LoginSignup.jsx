import React, { useState } from 'react'
import "../LoginSignup/LoginSignup.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const LoginSignup = () => {

  const [userIsRegistered, setuserIsRegistered] = useState(false)

  return (
    <>
      <div className='loginSignup-form'>
        <div className='logo'>
              <img src={logo} alt="" />
        </div>
        <div className='login-form'>
              <h3>Masuk Sebagai:</h3>
              <Link to={"/home"}><button className='anggota-btn'>Anggota</button></Link>
              <a href='http://localhost:5173/'><button className='admin-btn'>Admin</button></a>
        </div>
      </div>
    </>
  )
}

export default LoginSignup