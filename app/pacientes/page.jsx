import React from 'react'
import styles from './page.module.css'

export default function page() {

  const pacientes = [
    {
      id: 1,
      nombre: "Ana Lopez",
      edad: 32,
      telefono: "123-456-7890",
      enfermedad: "Hipertensión",
      emoji: "👩"
    },
    {
      id: 2,
      nombre: "Luis Martinez",
      edad: 45,
      telefono: "234-567-8901",
      enfermedad: "Diabetes",
      emoji: "👨"
    },
    {
      id: 3,
      nombre: "Sofia Torres",
      edad: 28,
      telefono: "345-678-9012",
      enfermedad: "Asma",
      emoji: "👩"
    },
    {
      id: 4,
      nombre: "Roberto Sanchez",
      edad: 55,
      telefono: "456-789-0123",
      enfermedad: "Artritis",
      emoji: "👨"
    },
    {
      id: 5,
      nombre: "Carmen Diaz",
      edad: 38,
      telefono: "567-890-1234",
      enfermedad: "Colesterol",
      emoji: "👩"
    }
  ];

  return (
    <div className={styles.divBody}>
      <h1>🤕 Pacientes</h1>
      <div className={styles.containerCards}>
        {pacientes.map((paciente) => (
          <div key={paciente.id} className={styles.card}>
            <div className={styles.emoji}>{paciente.emoji}</div>
            <h2>{paciente.nombre}</h2>
            <p className={styles.edad}>Edad: {paciente.edad} años</p>
            <p className={styles.enfermedad}>Condición: {paciente.enfermedad}</p>
            <p className={styles.telefono}>📞 {paciente.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
