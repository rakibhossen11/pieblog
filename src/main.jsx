import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/home/HomePage.jsx'
import RegisterPage from './pages/register/RegisterPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegisterPage />
  </React.StrictMode>,
)
