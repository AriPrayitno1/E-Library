import React, { useContext } from 'react'
import "./BookDetail.css"
import { BookContext } from '../../Context/BookContext'
import SearchBar from "../SearchBar/SearchBar"

const BookDetail = (props) => {

    const {addFavorite} = useContext(BookContext)
    const {book} = props

  return (
    <div>
      <div className='bookDetail'>
        <SearchBar />

        <div className='book-info'>
          <img src={book.image} alt="" />

          <div>
            <h4>{book.title}</h4>
            <hr />
            <h4>Lokasi Rak : {book.categorie}</h4>
          </div>
        </div>

        <div className='book-profile'>
          <h4>Informasi Detail</h4>
          <table>
            <tbody>
              <tr>
                <td className="label">Penulis</td>
                <td>:</td>
                <td>{book.writer}</td>
              </tr>
              <tr>
                <td className="label">Penerbit</td>
                <td>:</td>
                <td>{book.publisher}</td>
              </tr>
              <tr>
                <td className="label">ISBN</td>
                <td>:</td>
                <td>{book.ISBN}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='stock-info'>
          <h3>Stok Buku</h3>
          <button>{book.stock}</button>
        </div>
      </div>
    </div>
    
  )
}

export default BookDetail