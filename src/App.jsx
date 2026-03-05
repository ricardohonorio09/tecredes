import { useState } from 'react'
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom"; // Trocamos Link por NavLink
import Ucs from './pages/ucs';
import Faltas from './pages/faltas';
import Bibliografia from './pages/bibliografia';
import Informacoes from './pages/informacoes';
import Avaliacao from './pages/avaliacao';
import Downloads from './pages/downloads';

import './App.css'

function App() {
  const fecharMenu = () => {
    const menu = document.getElementById('navbarNav');
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  };

  return (
    <Router>
      <div className="container-fluid topo">
        <nav className="navbar navbar-expand-lg bg-body-white">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto me-auto">
                <NavLink to="/" onClick={fecharMenu} className={({ isActive }) => `nav-item btn-tech me-2 ${isActive ? 'active' : ''}`} end>
                  Unidades Curriculares
                </NavLink>

                <NavLink to="/avaliacao" onClick={fecharMenu} className={({ isActive }) => `nav-item btn-tech me-2 ${isActive ? 'active' : ''}`}>
                  Avaliação
                </NavLink>

                <NavLink to="/faltas" onClick={fecharMenu} className={({ isActive }) => `nav-item btn-tech me-2 ${isActive ? 'active' : ''}`}>
                  Faltas
                </NavLink>

                <NavLink to="/informacoes" onClick={fecharMenu} className={({ isActive }) => `nav-item btn-tech me-2 ${isActive ? 'active' : ''}`}>
                  Informações
                </NavLink>
                
                <NavLink to="/bibliografia" onClick={fecharMenu} className={({ isActive }) => `nav-item btn-tech me-2 ${isActive ? 'active' : ''}`}>
                  Bibliografia
                </NavLink>

                <NavLink to="/downloads" onClick={fecharMenu} className={({ isActive }) => `nav-item btn-tech me-2 ${isActive ? 'active' : ''}`}>
                  Downloads
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>



        <Routes>
          <Route path="/" element={<Ucs />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
          <Route path="/faltas" element={<Faltas />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/bibliografia" element={<Bibliografia />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App