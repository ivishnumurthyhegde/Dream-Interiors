import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Forms/Register';
import Login from './components/Forms/Login';
import Navbar from './components/NavBar/Navbar';
import HomePage from './components/HomePage/HomePage'
import BookService from './components/Forms/BookService';
import Profile from './components/Profile/Profile';
import Feedback from './components/Feedback/Feedback';


function App() {
  return (
   <>
     <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/services/book' element={<BookService />} />
        </Routes>
      </BrowserRouter>

   </>
  );
}

export default App;
