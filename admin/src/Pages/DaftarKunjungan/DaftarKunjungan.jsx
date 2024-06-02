import React from 'react'
import smk_logo from "../../assets/smk-logo.png"
import Banner from '../../Components/Banner/Banner'
import Footer from "../../Components/Footer/Footer"
import TabelKunjungan from "../../Components/TabelKunjungan/TabelKunjungan"

const DaftarKunjungan = () => {
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

        <TabelKunjungan />

        <Footer />
    </>
  )
}

export default DaftarKunjungan