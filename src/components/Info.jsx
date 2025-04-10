import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css'; // CSS custom

const Info = () => {
  const navigate = useNavigate();

  return (
    <div className="info-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      <header className="info-header">
        <h1>Informasi Pendaftaran Siswa Baru</h1>
        <p>Selamat datang di halaman resmi informasi pendaftaran <strong>Sekolah Unggulan PeTIK</strong>.</p>
      </header>

      <section className="info-section">
        <h2>Tentang Sekolah Kami</h2>
        <p>
          Sekolah Unggulan PeTIK adalah lembaga pendidikan yang berfokus pada pembentukan karakter dan kualitas akademik.
          Kami didukung oleh tenaga pengajar profesional, kurikulum berbasis teknologi dan akhlak mulia, serta berbagai fasilitas lengkap
          untuk menunjang proses belajar-mengajar secara optimal.
        </p>
      </section>

      <section className="info-section">
        <h2>Alur Pendaftaran</h2>
        <ol>
          <li>Buka halaman <strong>Pendaftaran</strong> pada menu utama.</li>
          <li>Isi formulir pendaftaran dengan lengkap dan benar.</li>
          <li>Pastikan semua data sudah sesuai dan valid (termasuk NISN, nomor HP, dan tanggal lahir).</li>
          <li>Upload dokumen yang dibutuhkan dan klik tombol <strong>Daftar Sekarang</strong>.</li>
          <li>Tunggu email konfirmasi dari pihak sekolah.</li>
        </ol>
      </section>

      <section className="info-section">
        <h2>Persyaratan Pendaftaran</h2>
        <ul>
          <li>Scan Akta Kelahiran dan Kartu Keluarga</li>
          <li>Scan Rapor Semester Terakhir</li>
          <li>Pas Foto ukuran 3x4 (background merah/biru)</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Jadwal Pendaftaran</h2>
        <ul>
          <li><strong>Pendaftaran Dibuka:</strong> 1 Mei 2025</li>
          <li><strong>Pendaftaran Ditutup:</strong> 30 Juni 2025</li>
          <li><strong>Pengumuman:</strong> 5 Juli 2025</li>
          <li><strong>Daftar Ulang:</strong> 6 – 10 Juli 2025</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Fasilitas Unggulan</h2>
        <ul>
          <li>Laboratorium Komputer dan IPA</li>
          <li>Perpustakaan Digital</li>
          <li>Ruang Kelas Ber-AC</li>
          <li>Ekstrakurikuler Beragam (Coding, English Club, Robotics, dll)</li>
          <li>Asrama Siswa (Boarding School)</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Hubungi Kami</h2>
        <p>
          Untuk informasi lebih lanjut, hubungi kami di:
          <br /><strong>Email:</strong> info@IjanKepsekGanteng.sch.id
          <br /><strong>Telepon:</strong> 0821-1234-5678
        </p>
      </section>

      <section className="info-section" style={{ textAlign: 'center' }}>
        <button
          className="register-btn"
          onClick={() => navigate('/registrasi')}
        >
          Daftar Sekarang
        </button>
      </section>
    </div>
  );
};

export default Info;
