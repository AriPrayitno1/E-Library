import React from 'react'
import "../Footer/Footer.css"
import smk_logo from "../../assets/smk-logo.png"

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='logo'>
              <img src={smk_logo} alt="" />
              <h5>Perpustakaan SMKN 6 Kota Jambi</h5>
              <p>Informasi</p>
              <p>Bantuan</p>
              <p>Pustakawan</p>
            </div>

            <div className='about'>
              <h3>Tentang Kami</h3>
              <p>As a complete Library Management System, SLiMS
              (Senayan Library Management System) has many
              features that will help libraries and librarians to do
              their job easily and quickly. Follow this link to show
              some features provided by SLiMS.</p>
            </div>
        </div>
    </>
  )
}

export default Footer