import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Edit.css';

const Proses = () => {
  const navigate = useNavigate();

  return (
    <div className="form-container proses-container">
      {/* Tombol panah kembali */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{ marginRight: '5px' }}
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 7.5H14.5A.5.5 0 0 1 15 8z"
          />
        </svg>
      </button>

      <h2>Pendaftaran Sedang Diproses</h2>
      <div className="success-icon">✅</div>
      <p>
        Terima kasih telah mendaftar. Data kamu telah berhasil dikirim dan akan segera diproses oleh panitia PPDB.
      </p>
      <button onClick={() => navigate('/landing')} style={{ marginTop: '20px' }}>
        Lihat Balik Ke Halaman Home
      </button>
    </div>
  );
};

export default Proses;
