import React from 'react'
import "../Search/Search.css"
import all_book from '../../assets/all_book'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'

const Search = () => {
  return (
    <>
        <div className='search'>
            <SearchBar />
            {all_book.map((item, i)=>{
                return <Card key={i} id={item.id} title={item.title} image={item.image}/>
            })}
        </div>
        <Navbar />
    </>
  )
}

export default Search