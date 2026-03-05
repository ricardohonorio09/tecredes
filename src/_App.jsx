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
  return (
    <Router>
      <div className="container-fluid topo">
        <nav className="mb-2 d-flex justify-content-center flex-wrap">
          {/* O NavLink aplica a classe "active" automaticamente se a rota coincidir */}
          <NavLink to="/" className={({ isActive }) => `btn-tech me-2 ${isActive ? 'active' : ''}`} end>
            Unidades Curriculares
          </NavLink>
          
          <NavLink to="/avaliacao" className={({ isActive }) => `btn-tech me-2 ${isActive ? 'active' : ''}`}>
            Avaliação
          </NavLink>
          
          <NavLink to="/faltas" className={({ isActive }) => `btn-tech me-2 ${isActive ? 'active' : ''}`}>
            Faltas
          </NavLink>
          
          <NavLink to="/informacoes" className={({ isActive }) => `btn-tech me-2 ${isActive ? 'active' : ''}`}>
            Informações
          </NavLink>
          <NavLink to="/bibliografia" className={({ isActive }) => `btn-tech me-2 ${isActive ? 'active' : ''}`}>
            Bibliografia
          </NavLink>
          
          <NavLink to="/downloads" className={({ isActive }) => `btn-tech me-2 ${isActive ? 'active' : ''}`}>
            Downloads
          </NavLink>

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