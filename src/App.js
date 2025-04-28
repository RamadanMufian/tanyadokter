import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Artikel from './pages/artikel';
import Konsultasi from './pages/konsultasi';
import Tentang from './pages/tentang';
import ChatDokter from './pages/chatdokter';  // Import halaman chat dokter
import Pesan from './pages/pesan';  // Corrected file name

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Halaman utama */}
            <Route path="/" element={<Home />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/konsultasi" element={<Konsultasi />} />
            <Route path="/tentang" element={<Tentang />} />

            {/* Halaman Chat Dokter */}
            <Route path="/chatdokter" element={<ChatDokter />} />

            {/* Halaman Form Kirim Pesan */}
            <Route path="/pesan" element={<Pesan />} />  {/* Corrected path */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
