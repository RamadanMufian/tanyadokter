import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatDokter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = window.location.hash.replace('#', ''); 

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); 

  const handleChatClick = (doctorName, specialization) => {
    navigate('/pesan', { state: { doctorName, doctorSpecialization: specialization } });
  };

  const doctorsData = {
    "Dokter Psikologi": [
      { name: "dr. Arini Putri", description: "Spesialis psikologi dengan pengalaman dalam terapi perilaku kognitif.", image: require('../images/dokter1.jpg') }, 
      { name: "dr. Budi Santoso", description: "Dokter psikologi dengan pengalaman dalam menangani gangguan kecemasan.", image: require('../images/dokter2.jpg')  },
      { name: "dr. Rina Sari", description: "Spesialis psikologi anak dan dewasa dengan pendekatan terapi keluarga.", image: require('../images/dokter3.jpg') },
      { name: "dr. Deni Kurniawan", description: "Bantuan psikologi untuk masalah hubungan interpersonal.", image: require('../images/dokter4.jpg')  },
    ],
    "Dokter Umum": [
      { name: "dr. Jessica Purnama", description: "Dokter umum berpengalaman menangani berbagai keluhan medis ringan.", image: require('../images/dokter5.jpg')  },
      { name: "dr. Andika Jo", description: "Menangani penyakit umum dan memberikan pengobatan dasar yang efisien.", image: require('../images/dokter6.jpg') },
      { name: "dr. Lami Putri", description: "Spesialis penyakit umum dengan pengalaman lebih dari 10 tahun.", 
      image: require('../images/dokter7.jpg')  },
      { name: "dr. Kelvin Prasetyo", description: "Dokter umum yang berfokus pada pencegahan penyakit dan vaksinasi.", image: require('../images/dokter8.jpg')  },
    ],
    "Dokter Gizi": [
      { name: "dr. Andi Widodo", description: "Dokter ahli dalam gizi dan diet sehat.", image: require('../images/dokter9.jpg') },
      { name: "dr. Siti Aminah", description: "Spesialis diet dan program penurunan berat badan.", image: require('../images/dokter10.jpg') },
      { name: "dr. Budi Prasetyo", description: "Ahli dalam gizi untuk diabetes dan penyakit metabolik.", image: require('../images/dokter11.jpg')  },
      { name: "dr. Liza Pramesti", description: "Perawatan gizi untuk ibu hamil dan anak.", image: require('../images/dokter12.jpg') },
    ],
        "Dokter Kulit & Kecantikan": [
          { name: "dr. Liana Putri", description: "Spesialis kulit dengan keahlian di perawatan wajah.", image: require('../images/dokter13.jpg')  },
          { name: "dr. Andi Santoso", description: "Perawatan dermatologis untuk kulit yang sehat.", image: require('../images/dokter14.jpg') },
          { name: "dr. Indra Sari", description: "Perawatan kulit untuk masalah jerawat dan penuaan.", image: require('../images/dokter15.jpg')  },
          { name: "dr. Rio Kurniawan", description: "Dokter kecantikan untuk perawatan kulit dan rambut.", image: require('../images/dokter16.jpg')  },
        ],
        "Dokter Anak": [
          { name: "dr. Maria Putri", description: "Spesialis anak dengan pengalaman dalam perawatan bayi dan balita.", image: require('../images/dokter17.jpg') },
          { name: "dr. Steven Santoso", description: "Perawatan medis untuk anak-anak dengan kondisi umum dan spesifik.", image: require('../images/dokter18.jpg')  },
          { name: "dr. Eliza Sari", description: "Penyakit anak dan pencegahan infeksi.", image: require('../images/dokter19.jpg')  },
          { name: "dr. Jonathan Kurniawan", description: "Dokter spesialis anak dengan perhatian pada tumbuh kembang anak.", image: require('../images/dokter20.jpg')  },
        ],
        "Dokter Lansia": [
          { name: "dr. Amanda Putri", description: "Spesialis lansia dengan pengalaman dalam perawatan geriatrik.", image: require('../images/dokter21.jpg') },
          { name: "dr. Michael Santoso", description: "Perawatan medis untuk pasien lansia dengan berbagai penyakit degeneratif.", image: require('../images/dokter22.jpg')  },
          { name: "dr. Vanessa Sari", description: "Penyakit kronis pada lansia dan pengelolaan perawatan paliatif.", image: require('../images/dokter23.jpg') },
          { name: "dr. Alex Kurniawan", description: "Dokter spesialis lansia dengan pendekatan holistik dalam perawatan geriatri.", image: require('../images/dokter24.jpg')  },
        ],
        "Dokter Penyakit Dalam": [
          { name: "dr. Clara Putri", description: "Dokter spesialis penyakit dalam dengan pengalaman 15 tahun.", image: require('../images/dokter25.jpg')  },
          { name: "dr. Hendrik Santoso", description: "Pengobatan penyakit dalam umum dan gangguan metabolik.", image: require('../images/dokter26.jpg') },
          { name: "dr. Sabrina Sari", description: "Spesialis penyakit dalam dan pengelolaan penyakit jantung.", image: require('../images/dokter27.jpg') },
          { name: "dr. Fabian Kurniawan", description: "Dokter penyakit dalam berfokus pada hipertensi dan diabetes.", image: require('../images/dokter28.jpg')  },
        ],
        "Dokter Keluarga": [
          { name: "dr. Nadia Putri", description: "Dokter keluarga dengan pendekatan preventif untuk seluruh anggota keluarga.", image: require('../images/dokter29.jpg')  },
          { name: "dr. William Santoso", description: "Perawatan kesehatan keluarga dan pencegahan penyakit menular.", image: require('../images/dokter30.jpg') },
          { name: "dr. Gabriella Sari", description: "Dokter keluarga dengan pengalaman dalam merawat anak hingga dewasa.", image: require('../images/dokter31.jpg') },
          { name: "dr. Caleb Kurniawan", description: "Perawatan untuk keluarga dengan pendekatan holistik dan integratif.", image: require('../images/dokter32.jpg')  },
        ],
        "Dokter THT": [
          { name: "dr. Felicia Putri", description: "Dokter THT dengan keahlian di pengobatan gangguan pendengaran.", image: require('../images/dokter33.jpg') },
          { name: "dr. Thomas Santoso", description: "Spesialis dalam penanganan gangguan pernapasan dan sinusitis.", image: require('../images/dokter34.jpg')  },
          { name: "dr. Larissa Sari", description: "Penanganan penyakit THT umum seperti amandel dan radang tenggorokan.", image: require('../images/dokter35.jpg') },
          { name: "dr. Samuel Kurniawan", description: "Perawatan penyakit THT seperti vertigo dan gangguan pendengaran.", image: require('../images/dokter36.jpg') },
        ],
      };
      
      

  return (
    <div className="chat-dokter-container">
      <h2>Cari Dokter atau Spesialisasi</h2>

      {Object.keys(doctorsData).map((specialization) => (
        <div key={specialization} className="specialization-section" id={specialization.replace(/ /g, '').replace(/&/g, 'and')}>
          <h3>{specialization}</h3>
          <div className="doctor-cards">
            {doctorsData[specialization].map((doctor, index) => (
              <div key={index} className="doctor-card">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                <h4>{doctor.name}</h4>
                <p>{doctor.description}</p>
                <button onClick={() => handleChatClick(doctor.name, specialization)}>Chat Dokter</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatDokter;
