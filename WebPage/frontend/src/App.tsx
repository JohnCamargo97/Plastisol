import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { Perfil } from './Paginas/Perfil';
import { Header } from './Componentes/Header';

import './App.css'


function App() {
  return (

    <main className='px-8 pt-4'>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={< Navigate to='/Home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/navbar' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
