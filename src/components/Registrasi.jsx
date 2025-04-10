import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Edit.css'; // CSS tetap pakai yang sama

const Registrasi = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nm_pendaftar: '',
    alamat: '',
    jenis_kelamin: '',
    no_hp: '',
    asal_sekolah: '',
    jurusan: '',
    tgl_lahir: '',
    nisn: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Hanya huruf untuk nama
    if (name === 'nm_pendaftar' && /[^A-Za-z\s]/.test(value)) {
      return;
    }

    // Hanya angka untuk no_hp dan nisn
    if ((name === 'no_hp' || name === 'nisn') && /[^0-9]/.test(value)) {
      return;
    }

    // Maksimal 10 digit untuk NISN
    if (name === 'nisn' && value.length > 10) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi panjang NISN harus tepat 10 digit
    if (formData.nisn.length !== 10) {
      alert("NISN harus tepat 10 digit!");
      return;
    }

    try {
      await axios.post('http://localhost:4200/api/pendaftar', formData);
      navigate('/proses');
    } catch (err) {
      console.error('Gagal tambah data:', err);
    }
  };

  return (
    <div className="form-container">
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

      <h2>Formulir Pendaftaran</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nm_pendaftar"
          value={formData.nm_pendaftar}
          onChange={handleChange}
          placeholder="Nama"
          required
        />
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          placeholder="Alamat"
          required
        />
        <select
          name="jenis_kelamin"
          value={formData.jenis_kelamin}
          onChange={handleChange}
          required
        >
          <option value="">-- Pilih Jenis Kelamin --</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input
          type="text"
          name="no_hp"
          value={formData.no_hp}
          onChange={handleChange}
          placeholder="No HP"
          required
        />
        <input
          type="text"
          name="asal_sekolah"
          value={formData.asal_sekolah}
          onChange={handleChange}
          placeholder="Asal Sekolah"
          required
        />
        <select
          name="jurusan"
          value={formData.jurusan}
          onChange={handleChange}
          required
        >
          <option value="">-- Pilih Jurusan --</option>
          <option value="Pemrograman Web">Pemrograman Web</option>
          <option value="Pemrograman Mobile">Pemrograman Mobile</option>
          <option value="Jaringan">Jaringan</option>
        </select>
        <input
          type="date"
          name="tgl_lahir"
          value={formData.tgl_lahir}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nisn"
          value={formData.nisn}
          onChange={handleChange}
          placeholder="NISN (10 digit)"
          required
        />
        <button type="submit">Daftar Sekarang</button>
      </form>
    </div>
  );
};

export default Registrasi;
