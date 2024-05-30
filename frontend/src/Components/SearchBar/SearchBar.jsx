import React from 'react'
import "../SearchBar/SearchBar.css"
import search_icon from "../../assets/search-icon.svg"

const SearchBar = (props) => {
  const {onChange, value} = props;
  return (
    <div className='search-bar'>
        <input type="text" placeholder='Cari' onChange={onChange} value={value}/>
        <img src={search_icon}/>
    </div>
  )
}

export default SearchBar