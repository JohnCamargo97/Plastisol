import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { Perfil } from './Paginas/Perfil';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Navigate to='/Home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
