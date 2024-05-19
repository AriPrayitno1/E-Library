import React from 'react'
import "../CrudMenu/CrudMenu.css"
import crud_icon from "../../assets/crud-icon.png"

const CrudMenu = (props) => {
  return (
    <>
        <div className='crud-icon'>
            <img src={crud_icon} alt="" />
            <p>{props.menu}</p>
        </div>
    </>
  )
}

export default CrudMenu