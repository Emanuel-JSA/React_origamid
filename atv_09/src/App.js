import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Produtos from './Components/Produtos';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produto from './Components/Produto';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content_body">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
