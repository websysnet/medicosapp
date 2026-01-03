import React from 'react'
import Link from 'next/link';
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
        <nav className='NavBar'>
            <ul>
                <li>
                    <Link href="/">🏠 Inicio</Link>
                </li>
                <li>
                    <Link href="/medicos">👨‍⚕️ Medicos</Link>
                </li>
                <li>
                    <Link href="/pacientes">🤕 Pacientes</Link>
                </li>
                <li>
                    <Link href="/citas">📅 Citas Medicas</Link>
                </li>
                 <li>
                    <Link href="/historial">📋 Historial</Link>
                </li>
                <li>
                    <Link href="/login">🔐 Login</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
