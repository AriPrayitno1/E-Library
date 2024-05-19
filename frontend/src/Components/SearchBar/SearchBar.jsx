import React from 'react'
import "../SearchBar/SearchBar.css"
import search_icon from "../../assets/search-icon.svg"

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <input type="text" placeholder='Cari'/>
        <img src={search_icon}/>
    </div>
  )
}

export default SearchBar