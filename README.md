# Nova Navigation Components v1.0.0


Una colección de componentes React para crear barras de navegación responsivas y personalizables. El paquete incluye un header de navegación minimalista y enlaces personalizables con efectos visuales.


## Componentes Principales

### NovaNavHeaderMinimal


Un componente de header de navegación responsivo que se adapta automáticamente entre vistas de escritorio y móvil.

Características

Diseño responsivo con menú hamburguesa para móvil
Soporte para logo y enlaces de navegación
Personalizable mediante props y variables CSS
Animaciones suaves en transiciones

### Uso Básico

import NovaNavHeaderMinimal from './NovaNavHeaderMinimal';

function App() {
  return (
    <NovaNavHeaderMinimal className="custom-header" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nova-navigation">
        {/* Contenido de navegación */}
      </nav>
    </NovaNavHeaderMinimal>
  );
}

### NovaLink

Un componente para crear enlaces de navegación con efectos visuales y soporte para iconos.

Características
Efectos hover con animación de subrayado
Soporte para iconos
Estado activo
Totalmente personalizable
Props
href (string, requerido): URL del enlace
label (string, requerido): Texto del enlace
icon (element, opcional): Componente de icono
isActive (boolean, opcional): Estado activo del enlace
className (string, opcional): Clases CSS adicionales
onClick (function, opcional): Manejador de eventos click


Uso Básico

Personalización
El componente utiliza variables CSS personalizables definidas en NovaStyles.css. Las principales variables incluyen:

:root {
  --nova-bg-color: #ffffff;          /* Color de fondo del header */
  --nova-text-color: #333;           /* Color del texto */
  --nova-hover-color: #007bff;       /* Color hover */
  --nova-mobile-breakpoint: 768px;   /* Punto de quiebre móvil */
  /* ... más variables disponibles ... */
}


Breakpoints
Móvil: < 768px
Escritorio: ≥ 768px
Instalación
Copiar los componentes en tu proyecto:
NovaNavHeaderMinimal.js
NovaLink.js
NovaStyles.css
Importar los componentes donde se necesiten
Asegurarse de tener las dependencias necesarias:
React
PropTypes
react-icons (si se usan iconos)
Dependencias
React 16.8+ (hooks)
PropTypes
react-icons (opcional)

### Ejemplo Completo

import React from "react";
import NovaNavHeaderMinimal from "./NovaNavHeaderMinimal";
import NovaLink from "./NovaLink";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <NovaNavHeaderMinimal className="custom-header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nova-navigation">
        <NovaLink 
          href="/"
          label="Home"
          icon={<FaHome />}
          isActive={true}
        />
        <NovaLink 
          href="/about"
          label="About"
          icon={<FaInfoCircle />}
        />
        <NovaLink 
          href="/contact"
          label="Contact"
          icon={<FaEnvelope />}
        />
      </nav>
    </NovaNavHeaderMinimal>
  );
}

Próximas Características (TODO)
Soporte para submenús
Temas predefinidos
Animaciones personalizables
Soporte para navegación anidada
Licencia
MIT
---
Para más información o reportar problemas, por favor crear un issue en el repositorio.
