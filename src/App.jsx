import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePicture from './components/ProfilePicture';

function App() {

  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route index path='/register' element={<RegisterPage />} />
        <Route index path='/login' element={<LoginPage />} />
        <Route index path='/profile' element={<ProfilePicture />} />
      </Routes>
    </div>
  )
}

export default App
