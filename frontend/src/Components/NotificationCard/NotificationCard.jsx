import React from 'react'
import "../NotificationCard/NotificationCard.css"
import logo from "../../assets/logo.png"

const NotificationCard = () => {
  return (
    <>
        <div className='notification-card'>
            <img src={logo} alt="" />
            <p>3 Hari lagi pengembalian buku anda</p>
        </div>
    </>
  )
}

export default NotificationCard