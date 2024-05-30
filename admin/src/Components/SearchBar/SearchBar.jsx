import React from 'react'
import "./SearchBar.css"
import search_icon from "../../assets/search-icon.svg"

const SearchBar = (props) => {
  return (
    <div className='search-bar' style={props.style}>
        <input type="text" placeholder='Cari'/>
        <img src={search_icon}/>
    </div>
  )
}

export default SearchBar