import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            🏥 Bienvenido a MedicosApp
          </h1>
          <p className={styles.subtitle}>
            Tu plataforma integral de gestión médica
          </p>
          <p className={styles.description}>
            Conecta con profesionales sanitarios, reserva citas y accede a tu historial médico de forma segura
          </p>
          <div className={styles.heroButtons}>
            <Link href="/login" className={styles.btnPrimary}>
              ✨ Iniciar Sesión
            </Link>
            <Link href="/medicos" className={styles.btnSecondary}>
              👨‍⚕️ Explorar Médicos
            </Link>
          </div>
        </div>
        <div className={styles.heroEmoji}>
          🏥
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>✨ Nuestras Características</h2>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>👨‍⚕️</span>
            <h3>Gestión de Médicos</h3>
            <p>Accede a un catálogo completo de profesionales sanitarios especializados en diferentes áreas.</p>
            <Link href="/medicos" className={styles.featureLink}>Explorar →</Link>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🤕</span>
            <h3>Gestión de Pacientes</h3>
            <p>Mantén tu información médica personal de forma segura y accesible en un solo lugar.</p>
            <Link href="/pacientes" className={styles.featureLink}>Ver Pacientes →</Link>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>📅</span>
            <h3>Sistema de Citas</h3>
            <p>Reserva, gestiona y controla tus citas médicas de manera rápida y sencilla.</p>
            <Link href="/citas" className={styles.featureLink}>Ver Citas →</Link>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>📋</span>
            <h3>Historial Clínico</h3>
            <p>Accede a tu completo historial médico con diagnósticos, tratamientos y evolución.</p>
            <Link href="/historial" className={styles.featureLink}>Ver Historial →</Link>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🔐</span>
            <h3>Seguridad</h3>
            <p>Tus datos médicos están protegidos con los más altos estándares de seguridad.</p>
            <button className={styles.featureLink}>Más info →</button>
          </div>

          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>📱</span>
            <h3>Acceso Desde Cualquier Lugar</h3>
            <p>Accede a tus información médica desde tu ordenador, tablet o móvil en cualquier momento.</p>
            <button className={styles.featureLink}>Más info →</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.stat}>
          <h3>👨‍⚕️ 500+</h3>
          <p>Médicos disponibles</p>
        </div>
        <div className={styles.stat}>
          <h3>🤝 10,000+</h3>
          <p>Pacientes activos</p>
        </div>
        <div className={styles.stat}>
          <h3>📅 50,000+</h3>
          <p>Citas realizadas</p>
        </div>
        <div className={styles.stat}>
          <h3>⭐ 4.9/5</h3>
          <p>Calificación promedio</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>¿Listo para comenzar?</h2>
        <p>Únete a miles de usuarios que confían en MedicosApp para su salud</p>
        <Link href="/login" className={styles.ctaButton}>
          🚀 Crear Cuenta Ahora
        </Link>
      </section>

      {/* Footer Info */}
      <section className={styles.info}>
        <div className={styles.infoBox}>
          <h3>💬 Soporte 24/7</h3>
          <p>Nuestro equipo está disponible para ayudarte en cualquier momento</p>
          <p className={styles.contact}>📞 +34 123 456 789</p>
        </div>
        <div className={styles.infoBox}>
          <h3>🏥 Acreditación</h3>
          <p>MedicosApp cuenta con todas las certificaciones de salud digital requeridas</p>
          <p className={styles.contact}>✓ Certificado ISO 27001</p>
        </div>
        <div className={styles.infoBox}>
          <h3>🔒 Privacidad</h3>
          <p>Cumplimos con RGPD y todas las normativas de protección de datos</p>
          <p className={styles.contact}>✓ Datos encriptados</p>
        </div>
      </section>
    </div>
  );
}
