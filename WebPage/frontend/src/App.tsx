import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Paginas/Home';
import { Productos } from './Paginas/Productos';
import { Forms } from './Paginas/Forms';

import './App.css'
import './styles/plastisol.css'


function App() {
  return (

    <main className="pt-4">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={< Navigate to='/Home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/forms' element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
