import React from 'react'
import {Link} from 'react-router-dom'
import "../Login/LoginSignupAdmin.css"
import smk_logo from "../../assets/smk-logo.png"
import Banner from '../../Components/Banner/Banner'
import Footer from "../../Components/Footer/Footer"

const LoginSignupAdmin = () => {
  return (
    <>
        <div className='header'>
            <div className='header-logo'>
                <img src={smk_logo} alt="" />
                <h4>Perpustakaan SMKN 6 Kota Jambi</h4>
            </div>
            <ul className='header-menu'>
                <li>Informasi</li>
                <li>Bantuan</li>
                <li>Pustakawan</li>
            </ul>
        </div>

        <Banner style={{height: '180px'}}/>

        <div className='login-admin-container'>
            <div className='login-header'>
                <p>E - LIBRARY SMKN 6 KOTA JAMBI</p>
            </div>

            <hr />
            
            <div className='login-form-admin'>
                <label htmlFor="username">Nama Pengguna</label>
                <input type="text" name='username'/>
                <label htmlFor="password">Kata Sandi</label>
                <input type="text" name='username'/>
                <Link to="/dashboard"><button>Masuk</button></Link>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default LoginSignupAdmin