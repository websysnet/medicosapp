'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Por ahora solo simulamos el login
    alert(`¡Bienvenido! 🎉\nEmail: ${email}`)
    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1 className={styles.emoji}>🏥</h1>
          <h1 className={styles.title}>MedicosApp</h1>
          <p className={styles.subtitle}>Sistema de Gestión Médica</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              📧 Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              🔐 Contraseña
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.rememberMe}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recuérdame en este dispositivo</label>
          </div>

          <button type="submit" className={styles.loginBtn}>
            ✨ Iniciar Sesión
          </button>
        </form>

        <div className={styles.divider}>
          <span>o</span>
        </div>

        <div className={styles.socialLogin}>
          <button className={styles.socialBtn}>
            👤 Continuar con Google
          </button>
          <button className={styles.socialBtn}>
            💼 Continuar con Microsoft
          </button>
        </div>

        <div className={styles.footer}>
          <p className={styles.link}>
            ¿Olvidaste tu contraseña? <a href="#forgot">Recuperarla</a>
          </p>
          <p className={styles.link}>
            ¿No tienes cuenta? <a href="#register">Crear una nueva</a>
          </p>
        </div>

        <div className={styles.helpSection}>
          <p>❓ ¿Necesitas ayuda?</p>
          <p className={styles.helpText}>📞 Contáctanos: +34 123 456 789</p>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.featureEmoji}>👨‍⚕️</span>
          <h3>Médicos</h3>
          <p>Acceso a profesionales sanitarios</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureEmoji}>📅</span>
          <h3>Citas</h3>
          <p>Reserva tus citas médicas</p>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureEmoji}>📋</span>
          <h3>Historial</h3>
          <p>Tu información médica segura</p>
        </div>
      </div>
    </div>
  )
}
