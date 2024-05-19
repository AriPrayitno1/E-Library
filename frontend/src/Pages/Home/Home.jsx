import React from 'react'
import "../Home/Home.css"
import all_book from '../../assets/all_book'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Item from '../../Components/Item/Item'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <div className='home'>
        <SearchBar />
        <h3>Koleksi Perhotelan</h3>
        <p>Merupakan daftar koleksi - koleksi yang berkaitan dengan bidang Perhotelan</p>
          <div className='displayCategorie'>
            {all_book.map((item, i) => {
                if(item.categorie === "perhotelan"){
                  return <Item key={i} id={item.id} title={item.title} image={item.image}/>
                }
            })}
          </div>

        <h3>Koleksi Multimedia</h3>
        <p>Merupakan daftar koleksi - koleksi yang berkaitan dengan bidang Multimedia</p>
          <div className='displayCategorie'>
            {all_book.map((item, i) => {
                if(item.categorie === "multimedia"){
                  return <Item key={i} id={item.id} title={item.title} image={item.image}/>
                }
            })}
          </div>

        <h3>Koleksi Tata Boga</h3>
        <p>Merupakan daftar koleksi - koleksi yang berkaitan dengan bidang Tata Boga</p>
          <div className='displayCategorie'>
            {all_book.map((item, i) => {
                if(item.categorie === "tata boga"){
                  return <Item key={i} id={item.id} title={item.title} image={item.image}/>
                }
            })}
          </div>
      </div>  
      <Navbar />
    </>
  )
}

export default Home