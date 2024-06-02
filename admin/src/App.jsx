import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import LoginSignupAdmin from './Pages/Login/LoginSignupAdmin'
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import Book from './Pages/Book/Book';
import TambahBuku from './Pages/TambahBuku/TambahBuku';
import Pengunjung from './Pages/Pengunjung/Pengunjung';
import DaftarPeminjam from './Pages/DaftarPeminjam/DaftarPeminjam';
import DaftarKunjungan from './Pages/DaftarKunjungan/DaftarKunjungan';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LoginSignupAdmin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/book' element={<Book />}>\
          <Route path=':bookId' element={<Book />}></Route>
        </Route>
        <Route path='/tambahBuku' element={<TambahBuku />}></Route>
        <Route path='/pengunjung' element={<Pengunjung />}></Route>
        <Route path='/kunjungan' element={<DaftarKunjungan />}></Route>
        <Route path='/peminjam' element={<DaftarPeminjam />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
