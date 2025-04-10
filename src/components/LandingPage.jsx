import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/landing');
    window.location.reload(); 
  };

  return (
    <>
      <div className="ppdb-landing-bg">
        <div className="ppdb-landing-overlay">
          <div className="ppdb-landing-header">
            {!isLoggedIn ? (
              <>
                <button className="ppdb-btn" onClick={() => navigate('/register')}>Register</button>
                <button className="ppdb-btn" onClick={() => navigate('/login')}>Login</button>
              </>
            ) : (
              <button className="ppdb-btn" onClick={handleLogout}>Logout</button>
            )}
          </div>

          <div className="ppdb-landing-content">
            <h1>Selamat Datang di PPDB Pesantren PeTIK</h1>
            <p>Daftarkan dirimu sekarang untuk bergabung bersama kami!</p>
            <button onClick={() => navigate('/info')}>Daftar Sekarang</button>
          </div>
        </div>
      </div>

      <div className="ppdb-info-section">
        <h2>Mengapa Memilih Pesantren PeTIK?</h2>
        <div className="ppdb-card-container">
          <div className="ppdb-card">
            <img src="https://i0.wp.com/pwmu.co/wp-content/uploads/2024/11/ac5b38e8-db58-4c79-b057-f9bfc4fb26dc.jpeg?fit=640%2C366&ssl=1" alt="Pendidikan" />
            <h3>Pendidikan Berkualitas</h3>
            <p>Kurikulum berbasis agama dan teknologi modern.</p>
          </div>
          <div className="ppdb-card">
            <img src="https://osccdn.medcom.id/images/content/2023/11/26/bd8f69b2efee9471a0c1fe7642541030.jpg" alt="Lingkungan" />
            <h3>Lingkungan Islami</h3>
            <p>Membentuk karakter santri dengan nilai-nilai Islam.</p>
          </div>
          <div className="ppdb-card">
            <img src="https://static.schumacherhomes.com/umbraco/media/4r4pxnt5/image11.jpg?format=webp" alt="Teknologi" />
            <h3>Fasilitas Modern</h3>
            <p>Asrama, laboratorium, dan fasilitas lengkap untuk menunjang belajar.</p>
          </div>
        </div>
      </div>

      <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src="Guru.png" alt="Guru" className="about-image" />
        <p className="about-text">
          Kami Telah Memiliki 12 Generasi hingga Saat ini. Kami sangat terpelajar untuk mengajar IT.
          Pengalaman kami dengan dosen-dosen yang kompeten dan terpelajar.
          <br /><br />
          Sudah jelas kami berusaha yang terbaik untuk anak didik kami selama setahun dengan memberikan
          makanan yang sehat, bergizi, dan bernutrisi. Kami sangat senang menerima anak Anda.
        </p>
      </div>
    </div>

    </>
  );
};

export default LandingPage;
