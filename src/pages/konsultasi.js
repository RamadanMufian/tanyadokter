import React from 'react';
import { Link } from 'react-router-dom';

const Konsultasi = () => {
  const pilihan = [
    {
      id: 1,
      nama: 'Konsultasi Psikolog',
      image: require('../images/psikologi.png') ,
      link: '/chatdokter#DokterPsikologi',
    },
    {
      id: 2,
      nama: 'Konsultasi Dokter Umum',
      image: require('../images/umum.png'),
      link: '/chatdokter#DokterUmum',
    },
    {
      id: 3,
      nama: 'Konsultasi Gizi',
      image: require('../images/gizi.png'),
      link: '/chatdokter#DokterGizi',
    },
    {
      id: 4,
      nama: 'Konsultasi Kulit & Kecantikan',
      image: require('../images/kulit.png'),
      link: '/chatdokter#DokterKulitandKecantikan',
    },
    {
      id: 5,
      nama: 'Konsultasi Anak',
      image: require('../images/anak.png'),
      link: '/chatdokter#DokterAnak',
    },
    {
      id: 6,
      nama: 'Konsultasi Lansia',
      image: require('../images/grandparents.png'),
      link: '/chatdokter#DokterLansia',
    },
    {
      id: 7,
      nama: 'Konsultasi Keluarga',
      image: require('../images/family.png'),
      link: '/chatdokter#DokterKeluarga',
    },
    {
      id: 8,
      nama: 'Konsultasi Penyakit Dalam',
      image: require('../images/organ.png'),
      link: '/chatdokter#DokterPenyakitDalam',
    },
    {
      id: 9,
      nama: 'Konsultasi THT',
      image: require('../images/tht.png'),
      link: '/chatdokter#DokterTHT',
    }
  ];

  return (
    <div className="konsultasi-container">
      <h2>Pilih Jenis Konsultasi</h2>
      <p>Silakan klik jenis konsultasi yang kamu butuhkan.</p>

      <div className="konsultasi-grid">
        {pilihan.map((item) => (
          <Link key={item.id} to={item.link} className="konsultasi-card">
            <img src={item.image} alt={item.nama} />
            <p>{item.nama}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Konsultasi;
