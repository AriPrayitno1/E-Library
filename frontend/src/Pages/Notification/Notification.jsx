import React from 'react'
import "../Notification/Notification.css"
import Navbar from '../../Components/Navbar/Navbar'
import NotificationCard from '../../Components/NotificationCard/NotificationCard'

const Notification = () => {
  return (
    <>
        <div className='notification-container'>
            <div className='notification'>
                <NotificationCard />
                
            </div>
        </div>
        
        <Navbar />
    </>
  )
}

export default Notification