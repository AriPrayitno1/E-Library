import React from 'react'
import "../Notification/Notification.css"
import NotificationItem from '../../Components/NotificationItem/NotificationItem'

const Notification = () => {
  return (
    <>
        <div className='notification-container'>
            <div className='notification'>
                <NotificationItem />
                
            </div>
        </div>
    </>
  )
}

export default Notification