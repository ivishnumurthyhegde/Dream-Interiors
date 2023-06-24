import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Forms/Register';
import Login from './components/Forms/Login';
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
   <>
     <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

   </>
  );
}

export default App;
