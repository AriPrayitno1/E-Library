import React from 'react'
import './TambahBuku.css'
import smk_logo from "../../assets/smk-logo.png"
import Banner from '../../Components/Banner/Banner'
import Footer from "../../Components/Footer/Footer"
import FormTambahBuku from '../../Components/FormTambahBuku/FormTambahBuku'

const TambahBuku = () => {
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

        <FormTambahBuku />

        <Footer />
    </>
  )
}

export default TambahBuku