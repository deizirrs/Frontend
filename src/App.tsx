import React from 'react'
import './App.css'
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<Sobre/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
