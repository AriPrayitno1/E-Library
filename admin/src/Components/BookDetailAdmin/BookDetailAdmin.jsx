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
                    <p>Deskripsi:</p>
                    <p>Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Eligendi, veniam a? Numquam 
                    ratione doloremque cumque.</p>
                    <hr />
                    <h4>Ketersediaan:</h4>

                    <table className='book-status-location'>
                        <tr>
                            <td>No Rak: 1</td>
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
                                    <td className="label">Judul Seri</td>
                                    <td>:</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td className="label">No. Panggil</td>
                                    <td>:</td>
                                    <td>297.63 SYA p</td>
                                </tr>
                                <tr>
                                    <td className="label">Penerbit</td>
                                    <td>:</td>
                                    <td>London Rajawali Press., 2020</td>
                                </tr>
                                <tr>
                                    <td className="label">Deskripsi Fisik</td>
                                    <td>:</td>
                                    <td>Deskripsi Fisik</td>
                                </tr>
                                <tr>
                                    <td className="label">Bahasa</td>
                                    <td>:</td>
                                    <td>Inggris</td>
                                </tr>
                                <tr>
                                    <td className="label">ISBN/ISSN</td>
                                    <td>:</td>
                                    <td>978-623-231-561-7</td>
                                </tr>
                                <tr>
                                    <td className="label">Klasifikasi</td>
                                    <td>:</td>
                                    <td>297.63 SYA p</td>
                                </tr>
                                <tr>
                                    <td className="label">Tipe Isi</td>
                                    <td>:</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td className="label">Subjek</td>
                                    <td>:</td>
                                    <td>Multimedia</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='stock-info'>
                            <p>Ketersediaan</p>
                            <h2>3</h2>
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