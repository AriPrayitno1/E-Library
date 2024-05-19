import React from 'react'
import "../Banner/Banner.css"
import banner from "../../assets/banner.png"

const Banner = (props) => {
  return (
    <>
        <img src={banner} className='banner' style={props.style} />
    </>
  )
}

export default Banner