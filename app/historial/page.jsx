import React from 'react'
import styles from './page.module.css'

export default function page() {

  const historialesClinico = [
    {
      id: 1,
      paciente: "Ana Lopez",
      edad: 32,
      medico: "Dr. Juan Perez",
      especialidad: "Cardiología",
      enfermedad: "Hipertensión",
      fecha: "10/10/2024",
      tratamiento: "Enalapril 10mg",
      estado: "En tratamiento",
      emoji: "❤️"
    },
    {
      id: 2,
      paciente: "Luis Martinez",
      edad: 45,
      medico: "Dra. Maria Gomez",
      especialidad: "Endocrinología",
      enfermedad: "Diabetes Tipo 2",
      fecha: "11/10/2024",
      tratamiento: "Metformina 500mg",
      estado: "Controlado",
      emoji: "💉"
    },
    {
      id: 3,
      paciente: "Sofia Torres",
      edad: 28,
      medico: "Dr. Carlos Ruiz",
      especialidad: "Neumología",
      enfermedad: "Asma",
      fecha: "12/10/2024",
      tratamiento: "Salbutamol inhaler",
      estado: "En tratamiento",
      emoji: "💨"
    },
    {
      id: 4,
      paciente: "Roberto Sanchez",
      edad: 55,
      medico: "Ana Martinez",
      especialidad: "Reumatología",
      enfermedad: "Artritis Reumatoide",
      fecha: "15/10/2024",
      tratamiento: "Ibuprofeno 400mg",
      estado: "En remisión",
      emoji: "🦴"
    },
    {
      id: 5,
      paciente: "Carmen Diaz",
      edad: 38,
      medico: "Luis Garcia",
      especialidad: "Cardiología",
      enfermedad: "Colesterol Alto",
      fecha: "18/10/2024",
      tratamiento: "Atorvastatina 20mg",
      estado: "Controlado",
      emoji: "🩸"
    },
    {
      id: 6,
      paciente: "Ana Lopez",
      edad: 32,
      medico: "Dr. Juan Perez",
      especialidad: "Cardiología",
      enfermedad: "Hipertensión",
      fecha: "25/10/2024",
      tratamiento: "Enalapril 10mg",
      estado: "Estable",
      emoji: "✅"
    }
  ];

  return (
    <div className={styles.divBody}>
      <h1>📋 Historial Clínico</h1>
      <div className={styles.containerCards}>
        {historialesClinico.map((historial) => (
          <div key={historial.id} className={styles.card}>
            <div className={styles.emoji}>{historial.emoji}</div>
            <h2>{historial.paciente}</h2>
            <div className={styles.infoGroup}>
              <p className={styles.label}>👤 Edad:</p>
              <p className={styles.value}>{historial.edad} años</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={styles.label}>👨‍⚕️ Médico:</p>
              <p className={styles.value}>{historial.medico}</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={styles.label}>🏥 Especialidad:</p>
              <p className={styles.value}>{historial.especialidad}</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={styles.label}>🩺 Enfermedad:</p>
              <p className={styles.value}>{historial.enfermedad}</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={styles.label}>💊 Tratamiento:</p>
              <p className={styles.value}>{historial.tratamiento}</p>
            </div>
            <div className={styles.infoGroup}>
              <p className={styles.label}>📅 Fecha:</p>
              <p className={styles.value}>{historial.fecha}</p>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.status}>{historial.estado}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
