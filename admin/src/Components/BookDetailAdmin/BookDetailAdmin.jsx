import React, { useContext, useState } from 'react'
import "../BookDetailAdmin/BookDetailAdmin.css"
import { BookContext } from '../../Context/BookContext'
import smk_logo from '../../assets/smk-logo.png'
import SearchBar from "../SearchBar/SearchBar"
import Banner from '../Banner/Banner'
import FormPeminjaman from '../FormPeminjaman/FormPeminjaman'
import FormEditBuku from '../FormEditBuku/FormEditBuku'
import Footer from '../Footer/Footer'

const BookDetailAdmin = (props) => {

    const [isBorrowBook, setIsBorrowBook] = useState(false);
    const [isEditBook, setIsEditBook] = useState(false);

    const {addFavorite} = useContext(BookContext)
    const {book} = props

    const handleEditClick = () => {
        setIsBorrowBook(false); // Reset isBorrowBook state
        setIsEditBook(true);
    };

    const handleBorrowClick = () => {
        setIsEditBook(false); // Reset isEditBook state
        setIsBorrowBook(true);
    };

  return (
    <div>
      <div className='bookDetail-admin-container'>
        <div className='header'>
            <div className='header-logo'>
                <img src={smk_logo} alt="" />
                <h4>Perpustakaan SMKN 6 Kota Jambi</h4>
            </div>
            <ul className='header-menu'>
                <li>Informasi</li>
                <li>Bantuan</li>
                <li>Pustakawan</li>
            </ul>
        </div>

        <Banner style={{height: '180px'}}/>

        <div className='search-bar-component'>
            <SearchBar style={{width: '400px'}} />
        </div>

        <div className='bookDetail-admin-info'>
            <div className='book-info'>
                <img src={book.image} alt="" />

                <div className=''>
                    <h2>{book.title}</h2>
                    <hr />
                    <h4>Ketersediaan:</h4>

                    <table className='book-status-location'>
                        <tr>
                            <td>Lokasi Rak: {book.categorie}</td>
                            <td>Perpustakaan SMKN 6 Jambi</td>
                            <td>Tersedia</td>
                        </tr>
                    </table>

                    {!(isBorrowBook || isEditBook) && (
                        <div className='book-profile'>
                        <h2>Informasi Detail</h2>
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

                        <div className='stock-info'>
                            <p>Ketersediaan</p>
                            <h2>{book.stock}</h2>
                        </div>
                        </div>
                    )}
                    
                    {isBorrowBook && <FormPeminjaman />}
                    {isEditBook && <FormEditBuku />}

                    <hr />

                    <div className='edit-peminjaman-btn'>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={handleBorrowClick}>Peminjaman</button>
                    </div>
                </div>                
            </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetailAdmin