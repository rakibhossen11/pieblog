import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePicture from './components/ProfilePicture';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';
import { Toaster } from 'react-hot-toast';
import Comments from './pages/admin/screens/comments/Comments';
import ManagePosts from './pages/admin/screens/posts/ManagePosts';
import EditPost from './pages/admin/screens/posts/EditPost';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';

function App() {

  return (
    <div className='App font-opensans'>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="articleDetail" element={<ArticleDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePicture />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path='comments' element={<Comments />} />
          <Route path='posts/manage' element={<ManagePosts />} />
          <Route path='posts/manage/edit/:slug' element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
