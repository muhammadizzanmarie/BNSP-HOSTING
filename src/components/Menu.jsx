import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Menu.css';

const Menu = () => {
  const [pendaftar, setPendaftar] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:4200/api/pendaftar');
      setPendaftar(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4200/api/pendaftar/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {

    localStorage.removeItem('token');


    window.location.href = '/landing';
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/grafik">Pendaftar</a></li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h2>Data Pendaftar</h2>
          <button className="btn-registrasi" onClick={() => window.location.href = '/registrasi'}>
            + Registrasi Baru
          </button>
        </header>

        <div className="pendaftar-list">
          {pendaftar.map((data) => (
            <div key={data.id_pendaftar} className="pendaftar-card">
              <p><strong>Nama:</strong> {data.nm_pendaftar}</p>
              <p><strong>Alamat:</strong> {data.alamat}</p>
              <p><strong>Jenis Kelamin:</strong> {data.jenis_kelamin}</p>
              <p><strong>No HP:</strong> {data.no_hp}</p>
              <p><strong>Asal Sekolah:</strong> {data.asal_sekolah}</p>
              <p><strong>Jurusan:</strong> {data.jurusan}</p>
              <p><strong>Tgl Lahir:</strong> {data.tgl_lahir}</p>
              <p><strong>NISN:</strong> {data.nisn}</p>
              <div className="action-buttons">
                <button 
                  onClick={() => window.location.href = `/edit/${data.id_pendaftar}`} 
                  className="btn-edit"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(data.id_pendaftar)} 
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
