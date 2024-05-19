import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import LoginSignupAdmin from './Pages/Login/LoginSignupAdmin'
import Dashboard from '../src/Pages/Dashboard/Dashboard'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginSignupAdmin />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
