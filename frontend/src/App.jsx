import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Home from "./Pages/Home/Home";
import Search from './Pages/Search/Search';
import Notification from './Pages/Notification/Notification';
import Book from "../src/Pages/Book/Book"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <LoginSignup /> */}
        <Route path='/' element={<LoginSignup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/notification' element={<Notification />}></Route>

        <Route path='/book' element={<Book />}>\
          <Route path=':bookId' element={<Book />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
