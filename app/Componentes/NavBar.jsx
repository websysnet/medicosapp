'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className='NavBar'>
      <div className='navContainer'>
        <div className='navBrand'>
          <Link href="/">🏥 MedicosApp</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`navMenu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" onClick={closeMenu}>🏠 Inicio</Link>
          </li>
          <li>
            <Link href="/medicos" onClick={closeMenu}>👨‍⚕️ Medicos</Link>
          </li>
          <li>
            <Link href="/pacientes" onClick={closeMenu}>🤕 Pacientes</Link>
          </li>
          <li>
            <Link href="/citas" onClick={closeMenu}>📅 Citas Medicas</Link>
          </li>
          <li>
            <Link href="/historial" onClick={closeMenu}>📋 Historial</Link>
          </li>
          <li>
            <Link href="/login" onClick={closeMenu}>🔐 Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
