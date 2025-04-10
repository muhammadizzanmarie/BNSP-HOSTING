import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Edit from './components/Edit'
import Registrasi from './components/Registrasi'
import LandingPage from './components/LandingPage'
import Proses from './components/Proses'
import Info from './components/Info'
import Grafik from './components/Grafik'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/registrasi" element={<Registrasi/>}/>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/proses" element={<Proses/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/grafik" element={<Grafik/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
