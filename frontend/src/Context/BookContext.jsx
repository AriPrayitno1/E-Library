import React, {createContext, useState} from 'react'
import all_book from "../assets/all_book"

export const BookContext = createContext(null);

const getDefaultFavorite = () => {
    let favorite = {}
    for (let index = 0; index < all_book.length; index++){
        favorite[index] = 0;
    }
    return favorite;
}

const BookContextProvider = (props) => {

    const [favoriteItems, setFavoriteItems] = useState(getDefaultFavorite())

    const addFavorite = (itemId) => {
        setFavoriteItems((prev) => ({...prev, [itemId]: prev[itemId]=1}))
    }
    
    const removeFavorite = (itemId) => {
        setFavoriteItems((prev) => ({...prev, [itemId]: prev[itemId]=0}))
    }

    const contextValue = {all_book, favoriteItems, addFavorite, removeFavorite};

    return(
        <BookContext.Provider value={contextValue}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider