import React, { useContext } from 'react'
import { BookContext } from '../../Context/BookContext'
import { useParams } from 'react-router-dom'
import BookDetailAdmin from "../../Components/BookDetailAdmin/BookDetailAdmin"

const Book = () => {
    const {all_book} = useContext(BookContext)
    const {bookId} = useParams()
    const book = all_book.find((e) => e.id === Number(bookId))
  return (
    <div>
        <BookDetailAdmin book={book}/>
    </div>
  )
}

export default Book