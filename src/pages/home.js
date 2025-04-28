import React from 'react';

function Home() {
 
  const artikelList = [
      {
        title: "Menjaga Kesehatan Mental di Era Modern",
        image: "https://cdn.hellosehat.com/wp-content/uploads/2020/06/shutterstock_1378633727-700x467.jpg",
        description: "Pentingnya menjaga keseimbangan mental di tengah tekanan kehidupan modern.",
        link: "https://hellosehat.com/mental/kesehatan-mental/menjaga-kesehatan-mental-modern/",
        source: "HelloSehat"
      },
      {
        title: "Tanda Kamu Butuh Konsultasi Psikolog",
        image: "https://cdn.hellosehat.com/wp-content/uploads/2017/05/butuh-konsultasi-psikologi-701x467.jpg",
        description: "Kenali tanda-tanda stres dan kapan waktu yang tepat konsultasi.",
        link: "https://hellosehat.com/mental/kesehatan-mental/kapan-harus-ke-psikolog/",
        source: "HelloSehat"
      },
      {
        title: "12 Pilihan Buah Warna Hijau yang Kaya Kandungan Gizi",
        image: "https://cdn.hellosehat.com/wp-content/uploads/2025/04/b12e88c7-buah-warna-hijau.jpg?w=384&q=100",
        description: "Daftar buah-buahan warna hijau dan manfaatnya.",
        link: "https://hellosehat.com/nutrisi/fakta-gizi/buah-warna-hijau/",
        source: "HelloSehat"
      },
  ];

  const ArticleCard = ({ image, title, description }) => (
    <div className="article-card">
      <img 
        src={image} 
        alt={title} 
        className="article-image"
      />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Selamat Datang di Ayo Konsul</h1>
          <h2>Tempat terbaik untuk konsultasi kesehatan secara online, cepat, dan terpercaya.</h2>
          <p>
            Bersama Ayo Konsul, kamu bisa ngobrol langsung dengan dokter profesional kapan pun kamu butuh. Yuk mulai langkah sehatmu hari ini!
          </p>
          <a href="/konsultasi" className="btn">Konsultasi Sekarang</a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src={require('../images/quick.jpg')} alt="Quick Response from Doctors" />
          <h3>Fast Doctor Response</h3>
          <p>Tak perlu menunggu lama, dokter kami siap merespons pertanyaan kesehatan Anda dalam hitungan menit.</p>
          <a href="/konsultasi" className="btn">Konsultasi Sekarang</a>
        </div>
        <div className="feature">
          <img src={require('../images/online.jpeg')} alt="Online Consultation" />
          <h3>24/7 Online Consultation</h3>
          <p>Konsultasi kapan pun dibutuhkan pagi, siang, malam, bahkan saat darurat. Dokter selalu tersedia tanpa henti.</p>
          <a href="/konsultasi" className="btn">Konsultasi Sekarang</a>
        </div>
        <div className="feature">
          <img src={require('../images/affordable.jpg')} alt="Affordable Consultation" />
          <h3>Affordable Consultation</h3>
          <p>Nikmati layanan konsultasi medis profesional dengan biaya yang ramah di kantong. Kesehatan tetap prioritas tanpa harus mahal.</p>
          <a href="/konsultasi" className="btn">Konsultasi Sekarang</a>
        </div>
      </section>

      <section className="about">
        <div className="about-hero">
          <img src={require('../images/logo2.png')} alt="logo" className="logo-abouthome" />
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
            <p>Tingkat penilaian pasien</p>
          </div>
          <div className="stats-item">
            <h3>600+</h3>
            <p>Dokter siap melayani kapanpun.</p>
          </div>
        </div>
      </section>

      <section className="articles">
        <h2>Artikel Kesehatan Terbaru</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {artikelList.map((artikel, index) => (
            <ArticleCard key={index} {...artikel} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/artikel" className="btn-articles-home">Lihat Semua Artikel</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
