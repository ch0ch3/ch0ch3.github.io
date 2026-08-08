# Zealous Laguna Auto Studio

Sitio público de Zealous Laguna Auto Studio. La primera versión presenta el
negocio, sus servicios confirmados y rutas directas de conversión por WhatsApp.

## Stack

- Next.js con App Router y exportación estática
- React
- TypeScript en modo estricto
- Tailwind CSS
- ESLint
- npm

La rama de desarrollo es `redesign-nextjs`. La rama `main` activa el deployment
de producción y solo debe actualizarse como parte de una publicación autorizada.

## Requisitos locales

- Node.js 20.9.0 o posterior
- npm

## Instalación

```bash
npm ci
```

## Ejecución local

```bash
npm run dev
```

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

`npm run build` genera una exportación estática en `out/`.

## Configuración y recursos

- La configuración editable del negocio está en `src/config/site.ts`.
- Los logos futuros deben colocarse en `public/brand/`.
- Las fotografías futuras deben colocarse en `public/images/`; la galería tiene
  su espacio reservado en `public/images/gallery/`.
- `public/CNAME` conserva el dominio personalizado
  `www.zealouslaguna.mx` y debe quedar incluido como `out/CNAME`.

## Deployment

El workflow `.github/workflows/deploy-pages.yml` instala las dependencias,
ejecuta el build estático y publica `out/` en GitHub Pages cuando cambia `main`.

## Información pendiente

Antes de ampliar el contenido comercial deben confirmarse:

- Correo público
- Dirección, Google Maps y horarios
- Redes sociales
- Enlace de citas
- Precios, promociones y testimonios
- Políticas aplicables

La carpeta `legacy-site/` conserva temporalmente el sitio personal anterior y
no forma parte de la nueva publicación. Su eliminación requiere una tarea y una
revisión separadas.
