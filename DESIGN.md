---
name: Zealous Laguna Auto Studio
description: Precisión automotriz real con una identidad editorial de alto contraste.
colors:
  brand-red: "#e60909"
  brand-red-bright: "#ff3434"
  brand-red-dark: "#b50000"
  carbon: "#080808"
  carbon-raised: "#121212"
  warm-ivory: "#f2f0ea"
  warm-white: "#fbfaf7"
  ink: "#111111"
  ink-muted: "#625f59"
  on-dark: "#f8f6f0"
  on-dark-muted: "#b9b5ad"
  technical-border: "#cbc7bd"
typography:
  display:
    fontFamily: "Arial Narrow, Avenir Next Condensed, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 11vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Arial Narrow, Avenir Next Condensed, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.65rem, 8.5vw, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(0.98rem, 3.8vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Arial Narrow, Avenir Next Condensed, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.12em"
spacing:
  page-inline: "clamp(1rem, 4vw, 4.5rem)"
  section-block: "clamp(6rem, 12vw, 11rem)"
  control-min-height: "3.65rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-red}"
    textColor: "#ffffff"
    rounded: "0"
    padding: "0.95rem 1.35rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "0"
    padding: "0.95rem 1.35rem"
---

# Design System: Zealous Laguna Auto Studio

## Overview

**Creative North Star: "El taller bajo luz de inspección"**

La identidad se inspira en el momento en que una superficie automotriz se examina bajo luz controlada: carbón profundo, áreas marfil limpias, líneas precisas y rojo Zealous reservado para decisiones y señales importantes. La fotografía real del taller aporta la prueba; la interfaz organiza esa evidencia con una retícula editorial clara.

El sistema debe sentirse automotriz, técnico y humano. No utiliza cromados digitales, neón, vidrio, falsas texturas metálicas ni fotografía genérica para fabricar autoridad.

**Key Characteristics:**

- Alto contraste entre capítulos oscuros y marfil.
- Titulares condensados, amplios y de máximo tres líneas en el hero.
- Logo oficial siempre utilizado como activo; nunca reconstruido con texto.
- Bordes rectos de un píxel y cuadrículas sin huecos.
- Fotografía real, con encuadre deliberado y sin exponer innecesariamente a vecinos.

## Colors

La estrategia es restringida: neutros cálidos y carbón con un único acento rojo.

### Primary

- **Rojo Zealous** (`#e60909`): acciones principales y elementos de identidad de gran tamaño.
- **Rojo Señal** (`#ff3434`): texto rojo pequeño sobre carbón y estados de hover donde se requiere mayor contraste.
- **Rojo Técnico** (`#b50000`): etiquetas pequeñas sobre fondos claros.

### Neutral

- **Carbón de Taller** (`#080808`): hero, historia, contacto y fondos de alto contraste.
- **Marfil Técnico** (`#f2f0ea`): servicios y superficies editoriales claras.
- **Blanco Cálido** (`#fbfaf7`): header y superficies elevadas.
- **Tinta** (`#111111`): titulares y bordes sobre marfil.
- **Gris de Lectura** (`#625f59` / `#b9b5ad`): texto secundario según la superficie.

**The Signal Red Rule.** El rojo identifica marca, acción o estado; no se usa como relleno decorativo general.

## Typography

**Display Font:** pila condensada local basada en Arial Narrow y Avenir Next Condensed.

**Body Font:** pila sans-serif del sistema.

**Character:** los titulares se comportan como rotulación automotriz: compactos, directos y de alto peso. El cuerpo prioriza lectura y mensajes de conversión sin jerga.

### Hierarchy

- **Display** (900, hasta `6rem`, `0.88–0.92`): grandes declaraciones de marca y cierre.
- **Headline** (900, hasta `5.75rem`, `0.92`): títulos de capítulos y servicios.
- **Title** (900, `1.75–2.75rem`, `0.95`): nombres de servicios.
- **Body** (400–650, `0.98–2.25rem`, `1.35–1.75`): argumentos, historia y descripciones; medida máxima aproximada de 58 caracteres en hero y 48rem en narrativa.
- **Label** (900, `0.65–0.86rem`, espaciado positivo, mayúsculas): botones, navegación y metadatos funcionales.

**The Three-Line Hero Rule.** El titular principal se divide deliberadamente en tres líneas como máximo y nunca se encierra en una columna estrecha.

La pila display actual es una solución local impuesta por la restricción de no añadir fuentes externas. No se considera sustituto del wordmark oficial ni debe utilizarse para reconstruirlo.

## Layout

El contenido utiliza un ancho máximo de `90rem`, padding horizontal fluido y capítulos con `clamp(6rem, 12vw, 11rem)` de separación vertical. En escritorio, el hero se divide 52/48 entre mensaje y fachada real; por debajo de `64rem` se apila para preservar el encuadre de la fotografía vertical.

La cuadrícula de servicios es exacta: tres columnas por dos filas en escritorio, dos columnas en tablet y una columna en móvil. Usa flujo denso y no admite celdas vacías. La historia usa doce columnas en escritorio con título sticky y lectura en la mitad derecha.

Los objetivos interactivos tienen al menos `44px` de altura. El sitio inicia en `320px`, no permite overflow horizontal y respeta `prefers-reduced-motion`.

## Elevation & Depth

El sistema es plano por defecto. La profundidad proviene de cambios de superficie, fotografía, superposición tonal del hero y bordes de un píxel. No se utilizan sombras de tarjetas ni logotipos superpuestos sobre fotografías que ya contienen la marca.

**The Flat Workshop Rule.** La jerarquía se resuelve con escala, contraste y retícula, no con paneles flotantes.

## Shapes

La geometría es rectangular, sin radios decorativos. Los bordes de un píxel recuerdan planos de paneles y delimitan servicios. La única silueta expresiva es la “A” roja oficial, utilizada entre dos líneas como separador de marca.

## Components

### Buttons

- **Shape:** rectangular, sin radio, altura mínima de `3.65rem`.
- **Primary:** rojo Zealous con texto blanco, peso 900 y mayúsculas.
- **Secondary:** transparente con borde blanco translúcido sobre carbón.
- **Hover / Focus:** cambio tonal breve; focus visible de tres píxeles con separación de cuatro píxeles.

### Service Registry

- **Structure:** número secuencial, nombre corto, título, descripción y enlace específico de WhatsApp.
- **Background:** marfil en reposo; carbón en hover o `focus-within` en dispositivos que soportan hover.
- **Border:** un píxel, sin sombra ni radio.
- **Internal Padding:** `1.25–2rem` según el viewport.

### Navigation

Header sticky de blanco cálido con logo oficial a la izquierda y cuatro rutas visibles. En móvil, el logo ocupa su propia fila y la navegación se distribuye en cuatro objetivos de ancho equivalente.

### Brand Divider

Activo oficial formado por dos líneas rojas y la “A” central. Se usa en transiciones de capítulo y nunca se reconstruye con caracteres o CSS aproximado.

## Do's and Don'ts

### Do:

- **Do** usar el logo y la “A” desde los activos oficiales con sus proporciones intactas.
- **Do** utilizar fotografías reales del taller, vehículos y procesos.
- **Do** mantener textos comerciales breves, verificables y orientados a una evaluación por WhatsApp.
- **Do** alternar carbón y marfil para crear capítulos claramente diferenciados.
- **Do** conservar todos los controles accesibles por teclado y con objetivos mínimos de `44px`.

### Don't:

- **Don't** publicar dirección, horarios, correo, redes, precios, promociones o garantías sin confirmación.
- **Don't** usar fotografías genéricas de motores, volantes o autos que no representen el servicio descrito.
- **Don't** reconstruir el logo con una fuente ni deformar sus activos.
- **Don't** añadir gradientes de texto, glassmorphism, neón, 3D, radios decorativos o sombras de tarjeta.
- **Don't** forzar una fotografía vertical a cubrir un hero panorámico si el recorte elimina la evidencia del taller.
