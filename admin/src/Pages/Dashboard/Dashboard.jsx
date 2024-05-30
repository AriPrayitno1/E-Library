import React, {useState} from 'react'
import "../Dashboard/Dashboard.css"
import smk_logo from "../../assets/smk-logo.png"
import all_book from "../../assets/all_book"
import Item from "../../Components/Item/Item"
import Banner from '../../Components/Banner/Banner'
import SearchBar from '../../Components/SearchBar/SearchBar'
import CrudMenu from '../../Components/CrudMenu/CrudMenu'
import Footer from "../../Components/Footer/Footer"
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBook, setFilteredBook] = useState(all_book);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = all_book.filter(card => card.title.toLowerCase().includes(term));
    setFilteredBook(filteredData);
  };

  return (
    <>
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
            <SearchBar style={{width: '400px'}} onChange={handleSearchChange} value={searchTerm}/>
        </div>

        <div className='dashboard-container'>
          <div className='crud-menu-container'>
            <h3>Kelola Buku, Kunjungan dan Data Peminjaman Siswa</h3>
            <div className='crud-menu'>
              <Link to={'/tambahBuku'}>
                <CrudMenu menu="Tambah Buku"/>
              </Link>
              <Link to={'/peminjam'}>
                <CrudMenu menu="Tabel Peminjaman"/>
              </Link>
              <Link to={'/pengunjung'}>
                <CrudMenu menu="Pengunjung"/>
              </Link>
              <CrudMenu menu="Data Kunjungan"/>
            </div>
          </div>

          <div className='collection-book'>
            <h3>Koleksi Pendidikan Agama Islam</h3>
            <p>Merupakan daftar koleksi buku Pendidikan Agama Islam</p>
              <div className='display-categorie'>
                <Link to={'/tambahBuku'}>
                  <button>+</button>
                </Link>
                {all_book.map((item, i) => {
                    if(item.categorie === "Pendidikan Agama Islam"){
                      return <Item key={i} id={item.id} title={item.title} image={item.image} />
                    }
                })}
              </div>
          </div>

          <div className='collection-book'>
            <h3>Koleksi Matematika</h3>
            <p>Merupakan daftar koleksi buku Matematika</p>
              <div className='display-categorie'>
                <Link to={'/tambahBuku'}>
                  <button>+</button>
                </Link>
                {all_book.map((item, i) => {
                    if(item.categorie === "Matematika"){
                      return <Item key={i} id={item.id} title={item.title} image={item.image} />
                    }
                })}
              </div>
          </div>

          <div className='collection-book'>
            <h3>Koleksi Pendidikan Pancasila dan Seni Budaya</h3>
            <p>Merupakan daftar koleksi buku Pendidikan Pancasila dan Seni Budaya</p>
              <div className='display-categorie'>
                <Link to={'/tambahBuku'}>
                  <button>+</button>
                </Link>
                {all_book.map((item, i) => {
                    if(item.categorie === "Pendidikan Pancasila dan Seni Budaya"){
                      return <Item key={i} id={item.id} title={item.title} image={item.image} />
                    }
                })}
              </div>
          </div>

          <div className='collection-book'>
            <h3>Koleksi Seni Budaya dan Bahasa Inggris</h3>
            <p>Merupakan daftar koleksi buku Seni Budaya dan Bahasa Inggris</p>
              <div className='display-categorie'>
                <Link to={'/tambahBuku'}>
                  <button>+</button>
                </Link>
                {all_book.map((item, i) => {
                    if(item.categorie === "Seni Budaya dan Bahasa Inggris"){
                      return <Item key={i} id={item.id} title={item.title} image={item.image} />
                    }
                })}
              </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Dashboard