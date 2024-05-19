import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
import home_icon from "../../assets/home-icon.svg"
import search_icon from "../../assets/search-icon.svg"
import menu_icon from "../../assets/menu-icon.svg"
import notification_icon from "../../assets/notification-icon.svg"

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div>
        <div className='nav-menu'>
          <Link to="/home" onClick={()=>{setMenu("home")}}>
            <img src={home_icon} alt="" />
          </Link>
          <Link to="/search" onClick={()=>{setMenu("search")}}>
            <img src={search_icon} alt="" />
          </Link>
          <Link to="/menu" onClick={()=>{setMenu("menu")}}>
            <img src={menu_icon} alt="" />
          </Link>
          <Link to="/notification" onClick={()=>{setMenu("notification")}}>
            <img src={notification_icon} alt="" />
          </Link>
        </div>
    </div>
  )
}

export default Navbar