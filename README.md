# 🏥 MedicosApp - Aplicación Médica Integral

> Una moderna plataforma web para la gestión de información médica, pacientes, citas y historiales clínicos.

## 🌟 Características Principales

### 👨‍⚕️ Gestión de Médicos
- **Catálogo completo** de médicos disponibles
- **Especialidades variadas**: Cardiología, Pediatría, Neurología, Dermatología, Oftalmología
- **Información de contacto** para cada profesional
- Interfaz visual con **cards interactivas** y gradientes atractivos

### 🤕 Gestión de Pacientes
- **Base de datos de pacientes** con información personal
- Registro de **edades y condiciones médicas**
- **Teléfono de contacto** para cada paciente
- Diseño responsivo con cards en gradiente púrpura

### 📅 Sistema de Citas
- **Programación de citas médicas**
- Información del médico tratante y paciente
- **Horarios y fechas** claramente especificados
- Vista de citas con categorización por tipo de consulta

### 📋 Historial Clínico
- **Registro detallado** del historial médico de cada paciente
- Información de **diagnósticos, tratamientos y medicamentos**
- **Estado actual** de cada condición (En tratamiento, Controlado, etc.)
- Cards amplios y bien estructurados para fácil lectura

## 🎨 Diseño Visual

- **Paleta de colores moderna**:
  - 🟣 Púrpura: Pacientes e Historial
  - 💚 Verde-Azulado: Médicos
  - 🔵 Azul Cian: Citas
  
- **Componentes interactivos**:
  - Efectos hover en cards
  - Emojis representativos en cada sección
  - Navegación intuitiva con NavBar decorado

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org) 
- **Lenguaje**: JavaScript/JSX
- **Estilos**: CSS Modules
- **Componentes**: React

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd medicosapp
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
medicosapp/
├── app/
│   ├── Componentes/
│   │   ├── NavBar.jsx
│   │   └── NavBar.css
│   ├── medicos/
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── pacientes/
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── citas/
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── historial/
│   │   ├── page.jsx
│   │   └── page.module.css
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── public/
├── package.json
└── next.config.mjs
```

## 🧭 Navegación

El NavBar principal incluye las siguientes opciones:

| Opción | Emoji | Descripción |
|--------|-------|-------------|
| Inicio | 🏠 | Página principal |
| Médicos | 👨‍⚕️ | Listado de profesionales |
| Pacientes | 🤕 | Base de datos de pacientes |
| Citas Médicas | 📅 | Sistema de citas |
| Historial | 📋 | Historial clínico |
| Login | 🔐 | Acceso a la plataforma |

## 📊 Datos de Ejemplo

La aplicación incluye datos de ejemplo para:
- **5 Médicos** con sus especialidades
- **5 Pacientes** con información personal
- **5 Citas médicas** programadas
- **6 Registros históricos** del historial clínico

## ✨ Características Destacadas

✅ Interfaz moderna y responsiva  
✅ Cards interactivos con efectos hover  
✅ Emojis descriptivos en todas las secciones  
✅ Diseño mobile-friendly  
✅ Navegación intuitiva  
✅ Información organizada y accesible  

## 🔮 Próximas Mejoras

- [ ] Autenticación de usuarios
- [ ] Base de datos persistente
- [ ] Formularios para agregar nuevos registros
- [ ] Búsqueda y filtrado avanzado
- [ ] Exportación de datos
- [ ] Sistema de notificaciones
- [ ] Panel de administrador

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ para la gestión de información médica.

---

**¡Gracias por usar MedicosApp!** 🏥✨
