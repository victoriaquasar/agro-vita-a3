import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { AboutUs } from './pages/AboutUs/AboutUs'
import "./global/styles/global.css"
import { Contact } from './pages/Contact/Contact'
import { Infos } from './pages/Infos/Infos'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/infos" element={<Infos />} />
    </Routes>
  </BrowserRouter>
);