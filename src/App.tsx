import React from 'react'
import './App.css'
import Navbar from './componentes/estaticos/navbar/Navbar'
import Footer from './componentes/estaticos/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Login from './paginas/login/Login'
import Cadastrar from './paginas/cadastrousuario/CadastroUsuario'
import Contatos from './paginas/contatos/Contatos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/contatos' element={<Contatos/>}/>



          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
