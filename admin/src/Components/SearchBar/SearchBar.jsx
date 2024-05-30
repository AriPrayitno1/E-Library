import React from 'react'
import "./SearchBar.css"
import search_icon from "../../assets/search-icon.svg"

const SearchBar = (props) => {
  const {onChange, value} = props;

  return (
    <div className='search-bar' style={props.style}>
        <input type="text" placeholder='Cari' onChange={onChange} value={value}/>
        <img src={search_icon}/>
    </div>
  )
}

export default SearchBar