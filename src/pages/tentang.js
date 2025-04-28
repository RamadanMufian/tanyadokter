import React from 'react';

function About() {
  return (
    <div className="about">
     <section className="about">
      
        <div className="about-hero">
        <img src={require('../images/logo2.png')} alt="Affordable Consultation" className="logo-about" />
        <h1>Ayo Konsul sebagai Platform Penyedia Konsultasi Online</h1>
          <p>Kami percaya bahwa akses terhadap layanan kesehatan yang berkualitas adalah hak setiap individu. Ayo Konsul hadir sebagai jembatan antara masyarakat dan tenaga medis profesional, memungkinkan siapa pun untuk berkonsultasi dengan dokter secara mudah, cepat, dan aman hanya melalui perangkat digital.</p>
        </div>

        <div className="about-info">
          <p>
          Sejak didirikan pada Juni 2020, Ayo Konsul hadir sebagai solusi inovatif untuk memperluas akses layanan kesehatan di seluruh Indonesia. Melalui platform yang dirancang agar mudah digunakan oleh siapa saja, kami memungkinkan masyarakat untuk berkonsultasi langsung dengan dokter kapan pun dibutuhkan dan dari mana pun, cukup melalui ponsel atau komputer
          </p>
          <p>
          Sejak awal, kami berkomitmen untuk memastikan setiap pasien mendapatkan layanan yang tidak hanya cepat, tetapi juga terpercaya. Kami bekerja sama dengan dokter-dokter berlisensi dan terdaftar resmi, yang memiliki izin praktik yang sah, agar Anda dapat berkonsultasi dengan tenang, tahu bahwa Anda berada di tangan yang tepat
          </p>
        </div>

        <div className="stats">
          <div className="stats-item">
            <h3>500.000+</h3>
            <p>Pasien sudah mendapatkan bantuan kami.</p>
          </div>
          <div className="stats-item">
            <h3>4.9 / 5</h3>
            <p>Tingkat penilaian dari pasien.</p>
          </div>
          <div className="stats-item">
            <h3>600+</h3>
            <p>Dokter siap melayani kapanpun.</p>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default About;
