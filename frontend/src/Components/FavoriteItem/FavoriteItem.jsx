import React, {useContext} from 'react'
import { BookContext } from '../../Context/BookContext'
import "./FavoriteItem.css"
import bookmark_icon from "../../assets/bookmark-icon.svg"

const FavoriteItem = () => {

  const {all_book, favoriteItems, addFavorite, 
        removeFavorite} = useContext(BookContext);

  return (
    <>
      {all_book.map((e) => {
        if(favoriteItems[e.id] > 0){
          return <div key={e.id}>
                  <div className='favorite-item'>
                    <img src={e.image} alt="" />
                    <p>{e.title}</p>
                    <img src={bookmark_icon} onClick={()=>{removeFavorite(e.id)}} />
                  </div>
          </div>
        }
      })}
    </>
  )
}

export default FavoriteItem