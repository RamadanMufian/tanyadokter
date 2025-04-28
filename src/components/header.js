import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <img src={require('../images/logo2.png')} alt="Affordable Consultation" className="logo" /> 
      <h1>Ayo Konsul</h1>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/artikel">Artikel</Link></li>
          <li><Link to="/konsultasi">Konsultasi</Link></li>
          <li><Link to="/tentang">Tentang Kami</Link></li>
          <li><Link to="/chatdokter">Chat Dokter</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
