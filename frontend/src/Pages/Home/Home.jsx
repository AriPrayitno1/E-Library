import React, { useState } from 'react';
import "../Home/Home.css";
import all_book from '../../assets/all_book';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Item from '../../Components/Item/Item';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBook, setFilteredBook] = useState(all_book);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = all_book.filter(card => card.title.toLowerCase().includes(term));
    setFilteredBook(filteredData);
  };

  return (
    <div className='home'>
      <SearchBar onChange={handleSearchChange} value={searchTerm} />

      {searchTerm === '' ? (
        <>
          <h3>Koleksi Pendidikan Agama Islam</h3>
          <p>Merupakan daftar koleksi buku Pendidikan Agama Islam</p>
          <div className='displayCategorie'>
            {filteredBook.filter(item => item.categorie === "Pendidikan Agama Islam").map((item, i) => (
              <Item key={i} id={item.id} title={item.title} image={item.image} />
            ))}
          </div>

          <h3>Koleksi Matematika</h3>
          <p>Merupakan daftar koleksi buku Matematika</p>
          <div className='displayCategorie'>
            {filteredBook.filter(item => item.categorie === "Matematika").map((item, i) => (
              <Item key={i} id={item.id} title={item.title} image={item.image} />
            ))}
          </div>

          <h3>Koleksi Pendidikan Pancasila dan Seni Budaya</h3>
          <p>Merupakan daftar koleksi buku Pendidikan Pancasila dan Seni Budaya</p>
          <div className='displayCategorie'>
            {filteredBook.filter(item => item.categorie === "Pendidikan Pancasila dan Seni Budaya").map((item, i) => (
              <Item key={i} id={item.id} title={item.title} image={item.image} />
            ))}
          </div>

          <h3>Koleksi Seni Budaya dan Bahasa Inggris</h3>
          <p>Merupakan daftar koleksi buku Seni Budaya dan Bahasa Inggris</p>
          <div className='displayCategorie'>
            {filteredBook.filter(item => item.categorie === "Seni Budaya dan Bahasa Inggris").map((item, i) => (
              <Item key={i} id={item.id} title={item.title} image={item.image} />
            ))}
          </div>
        </>
      ) : (
        <div className='searchResult'>
          {filteredBook.map((item, i) => (
            <Item key={i} id={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
