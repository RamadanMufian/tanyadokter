import React from 'react';

const artikelList = [
  {
    title: "Menjaga Kesehatan Mental di Era Modern",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2020/06/shutterstock_1378633727-700x467.jpg",
    description: "Pentingnya menjaga keseimbangan mental di tengah tekanan kehidupan modern.",
    link: "https://hellosehat.com/mental/kesehatan-mental/menjaga-kesehatan-mental-modern/",
    source: "HelloSehat"
  },
  {
    title: "Jenis-Jenis Jerawat yang Sering Muncul",
    image: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1634034455/attached_image/jenis-jenis-jerawat-ini-perlu-diusir-karena-merusak-penampilanmu-0-alodokter.jpg",
    description: "Kulit sehat tidak datang dengan sendirinya. Untuk mendapatkannya, Anda harus menjaga kesehatan kulit",
    link: "https://www.alodokter.com/jenis-jenis-jerawat-ini-perlu-diusir-karena-merusak-penampilanmu",
    source: "alodokter.com"
  },
  {
    title: "12 Pilihan Buah Warna Hijau yang Kaya Kandungan Gizi",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2025/04/b12e88c7-buah-warna-hijau.jpg?w=384&q=100",
    description: "Daftar buah-buahan warna hijau dan manfaatnya.",
    link: "https://hellosehat.com/nutrisi/fakta-gizi/buah-warna-hijau/",
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
    title: "5 Kriteria Wajib untuk Perawat Lansia",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2021/04/10c350b5-perawat-lansia.jpg?w=384&q=100",
    description: "Hal-hal yang perlu diperhatikan sebelum memilih perawat lansia.",
    link: "https://hellosehat.com/parenting/manula/perawat-lansia/",
    source: "HelloSehat"
  },
  {
    title: "Perbedaan Zat Besi Heme & Nonheme",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2025/03/f5dea4ba-zat-besi-heme-dan-nonheme.jpg?w=384&q=100",
    description: "Apa beda zat besi dari hewan dan tumbuhan, mana lebih baik?",
    link: "https://hellosehat.com/nutrisi/fakta-gizi/zat-besi-heme-dan-nonheme/",
    source: "HelloSehat"
  },
  {
    title: "9 Faktor Risiko Penularan Pneumonia",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2021/05/0b35a8a3-faktor-risiko-pneumonia.jpg?w=384&q=100",
    description: "Waspadai faktor-faktor yang memicu penyebaran pneumonia.",
    link: "https://hellosehat.com/pernapasan/pneumonia/faktor-risiko-pneumonia/",
    source: "HelloSehat"
  },
  {
    title: "Cegah Otak Membusuk: Brain Rot",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2023/06/6ffdd236-shutterstock_1572906352-650x434.jpg",
    description: "Bahaya brain rot dan bagaimana cara menghindarinya.",
    link: "https://hellosehat.com/mental/gangguan-mental/brain-rot/",
    source: "HelloSehat"
  },
  {
    title: "Masalah Ini Mengintai Anda yang Kurang Tidur",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2019/01/bahaya-kurang-tidur.jpg?w=384&q=100",
    description: "Beragam efek dan bahaya kurang tidur bagi kesehatan",
    link: "https://hellosehat.com/pola-tidur/gangguan-tidur/efek-kurang-tidur/",
    source: "HelloSehat"
  },
  {
    title: "8 Cara agar Anak Nafsu Makan dan Tidak Pilih-Pilih Makanan",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2025/04/4f11610d-agar-anak-nafsu-makan.jpg?w=384&q=100",
    description: "Berikut beberapa cara menambah nafsu makan anak yang bisa orangtua lakukan",
    link: "http://hellosehat.com/parenting/anak-6-sampai-9-tahun/gizi-anak/nafsu-makan-anak/",
    source: "HelloSehat"
  },
  {
    title: "Panduan Mengatasi Stres Kerja di Era Digital",
    image: "https://cdn.hellosehat.com/wp-content/uploads/2021/01/07794158-kesehatan-mental.jpg?w=384&q=100",
    description: "Cara efektif mengatasi stres kerja di dunia digital yang serba cepat.",
    link: "https://hellosehat.com/mental/kesehatan-mental/stres-kerja-era-digital/",
    source: "HelloSehat"
  },
  {
    title: "10 Tips Untuk Meningkatkan Kualitas Hidup Lansia",
    image: "https://media.geriatri.id/img/article/1744854969-10-tips-untuk-meningkatkan-kualitas-hidup-lansia-FotoGID-170425.jpg",
    description: "Berikut beberapa tips untuk membantu mereka menjalani hidup yang lebih sehat dan bahagia",
    link: "https://www.geriatri.id/artikel/3260/10-tips-untuk-meningkatkan-kualitas-hidup-lansia",
    source: "geriatri.id"
  }
];

const Artikel = () => {
  return (
    <div className="artikel-container">
      <h1 className="artikel-title">Artikel Kesehatan</h1>
      <p className="artikel-description">Baca Artikel Kesehatan Terbaru</p>
      <div className="artikel-grid">
        {artikelList.map((artikel, index) => (
          <div className="artikel-card" key={index}>
            <img src={artikel.image} alt={artikel.title} className="artikel-image" />
            <div className="artikel-content">
              <h2 className="artikel-subtitle">{artikel.title}</h2>
              <p>{artikel.description}</p>
              <a href={artikel.link} target="_blank" rel="noopener noreferrer">
                <button className="artikel-button">Baca selengkapnya</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artikel;
