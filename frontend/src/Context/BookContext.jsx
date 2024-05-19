import React, {createContext} from 'react'
import all_book from "../assets/all_book"

export const BookContext = createContext(null);

const BookContextProvider = (props) => {
    
    const contextValue = {all_book};

    return(
        <BookContext.Provider value={contextValue}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider