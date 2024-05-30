import React from 'react'
import "../Item/Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <Link to={`/book/${props.id}`}>
        <div className='item' style={props.style}>
            <img src={props.image} alt="" />
            <p>{props.title}</p>
        </div>
    </Link>
    
  )
}

export default Item