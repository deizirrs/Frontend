import React from "react";
import "./App.css";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/home/Home";
import Sobre from "./paginas/sobre/Sobre";
import Login from "./paginas/login/Login";
import Cadastrar from "./paginas/cadastrousuario/CadastroUsuario";
import Contatos from "./paginas/contatos/Contatos";
import CadastroTemas from "./componentes/temas/cadastrotemas/CadastroTemas";
import CadastroPostagem from "./componentes/postagens/cadastroPostagem/CadastroPostagem";
import ListaTemas from "./componentes/temas/listatemas/ListaTemas";
import ListaPostagem from "./componentes/postagens/listapostagens/ListaPostagem";
import { Provider } from "react-redux";
import store from "./store/Store";
import { ToastContainer } from "react-toastify";
import Perfil from "./componentes/perfil/verPerfil/Perfil";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";
import AtualizarPerfil from "./componentes/perfil/atualizarPerfil/AtualizarPerfil";
import DeletaTemas from "./componentes/temas/deletatemas/DeletaTemas";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/formularioTema" element={<CadastroTemas />} />
            <Route path="/formularioTema/:id" element={<CadastroTemas />} />
            <Route path="/deletaTemas/:id" element={<DeletaTemas />} />
            <Route path="/temas/:id" element={<CadastroTemas />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />}/>
            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/atualizar-perfil" element={<AtualizarPerfil />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
