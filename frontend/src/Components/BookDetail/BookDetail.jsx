import React, { useContext } from 'react'
import "./BookDetail.css"
import { BookContext } from '../../Context/BookContext'
import Navbar from '../Navbar/Navbar'
import SearchBar from "../SearchBar/SearchBar"

const BookDetail = (props) => {
    const {all_book} = useContext(BookContext)
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
            <p>Deskripsi:</p>
            <p>Lorem, ipsum dolor sit amet 
              consectetur adipisicing elit. 
              Eligendi, veniam a? Numquam 
              ratione doloremque cumque.</p>
            <hr />
            <h4>Lokasi Buku : Rak 1</h4>
          </div>
        </div>

        <div className='book-profile'>
          <h4>Informasi Detail</h4>
          <table>
            <tbody>
              <tr>
                <td class="label">Judul Seri</td>
                <td>:</td>
                <td>-</td>
              </tr>
              <tr>
                <td class="label">No. Panggil</td>
                <td>:</td>
                <td>297.63 SYA p</td>
              </tr>
              <tr>
                <td class="label">Penerbit</td>
                <td>:</td>
                <td>London Rajawali Press., 2020</td>
              </tr>
              <tr>
                <td class="label">Deskripsi Fisik</td>
                <td>:</td>
                <td>Deskripsi Fisik</td>
              </tr>
              <tr>
                <td class="label">Bahasa</td>
                <td>:</td>
                <td>Inggris</td>
              </tr>
              <tr>
                <td class="label">ISBN/ISSN</td>
                <td>:</td>
                <td>978-623-231-561-7</td>
              </tr>
              <tr>
                <td class="label">Klasifikasi</td>
                <td>:</td>
                <td>297.63 SYA p</td>
              </tr>
              <tr>
                <td class="label">Tipe Isi</td>
                <td>:</td>
                <td>Text</td>
              </tr>
              <tr>
                <td class="label">Subjek</td>
                <td>:</td>
                <td>Multimedia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='stock-info'>
          <h3>Stok Buku</h3>
          <button>{book.stock}</button>
        </div>
      </div>
      <Navbar />
    </div>
    
  )
}

export default BookDetail