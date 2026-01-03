import React from 'react'
import styles from './page.module.css'

export default function page() {

  const citas = [
    {
      id: 1,
      tipo: "Consulta General",
      medico: "Dr. Juan Perez",
      paciente: "Ana Lopez",
      fecha: "10/10/2024",
      hora: "10:00 AM",
      emoji: "❤️"
    },
    {
      id: 2,
      tipo: "Control de Diabetes",
      medico: "Dra. Maria Gomez",
      paciente: "Luis Martinez",
      fecha: "11/10/2024",
      hora: "02:00 PM",
      emoji: "💉"
    },
    {
      id: 3,
      tipo: "Revisión Cardiológica",
      medico: "Dr. Carlos Ruiz",
      paciente: "Sofia Torres",
      fecha: "12/10/2024",
      hora: "09:00 AM",
      emoji: "🫀"
    },
    {
      id: 4,
      tipo: "Examen Oftalmológico",
      medico: "Ana Martinez",
      paciente: "Roberto Sanchez",
      fecha: "15/10/2024",
      hora: "03:30 PM",
      emoji: "👁️"
    },
    {
      id: 5,
      tipo: "Consulta Dermatológica",
      medico: "Luis Garcia",
      paciente: "Carmen Diaz",
      fecha: "18/10/2024",
      hora: "11:00 AM",
      emoji: "🩺"
    }
  ];

  return (
    <div className={styles.divBody}>
      <h1>📅 Citas Medicas</h1>
      <div className={styles.containerCards}>
        {citas.map((cita) => (
          <div key={cita.id} className={styles.card}>
            <div className={styles.emoji}>{cita.emoji}</div>
            <h2>{cita.tipo}</h2>
            <p className={styles.medico}>👨‍⚕️ Dr/a. {cita.medico}</p>
            <p className={styles.paciente}>Paciente: {cita.paciente}</p>
            <p className={styles.fecha}>📅 {cita.fecha}</p>
            <p className={styles.hora}>🕐 {cita.hora}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
