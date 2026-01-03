import React from 'react'
import styles from './page.module.css'

export default function page() {

  const medicos = [
    {
      id: 1,
      nombre: "Juan Perez",
      especialidad: "Cardiología",
      telefono: "123-456-7890",
      emoji: "❤️"
    },
    {
      id: 2,
      nombre: "Maria Gomez",
      especialidad: "Pediatría",
      telefono: "234-567-8901",
      emoji: "👶"
    },
    {
      id: 3,
      nombre: "Carlos Ruiz",
      especialidad: "Neurología",
      telefono: "345-678-9012",
      emoji: "🧠"
    },
    {
      id: 4,
      nombre: "Ana Martinez",
      especialidad: "Dermatología",
      telefono: "456-789-0123",
      emoji: "🩺"
    },
    {
      id: 5,
      nombre: "Luis Garcia",
      especialidad: "Oftalmología",
      telefono: "567-890-1234",
      emoji: "👁️"
    }
  ];

  return (
    <div className={styles.divBody}>
        <h1>👨‍⚕️ Medicos</h1>
        <div className={styles.containerCards}>
            {medicos.map((medico) => (
              <div key={medico.id} className={styles.card}>
                <div className={styles.emoji}>{medico.emoji}</div>
                <h2>{medico.nombre}</h2>
                <p className={styles.especialidad}>{medico.especialidad}</p>
                <p className={styles.telefono}>📞 {medico.telefono}</p>
              </div>
            ))}
        </div>
    </div>
  )
}
