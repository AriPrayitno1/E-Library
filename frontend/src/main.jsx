import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import BookContextProvider from './Context/BookContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </React.StrictMode>,
)
