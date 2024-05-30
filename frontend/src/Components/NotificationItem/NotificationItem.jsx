import React from 'react'
import "./NotificationItem.css"
import logo from "../../assets/logo.png"

const NotificationItem = () => {
  return (
    <>
        <div className='notification-item'>
            <img src={logo} alt="" />
            <p>3 Hari lagi pengembalian buku anda</p>
        </div>
    </>
  )
}

export default NotificationItem