import React from 'react'
import "./Favorite.css"
import FavoriteItem from "../../Components/FavoriteItem/FavoriteItem"

const Favorite = () => {
  return (
    <>
      <div className='favorite-container'>
        <div className='favorite'>
          <FavoriteItem />
        </div>
      </div>
    </>
  )
}

export default Favorite