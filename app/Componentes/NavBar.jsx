import React from 'react'
import Link from 'next/link';
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
        <nav className='NavBar'>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/medicos">Medicos</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
