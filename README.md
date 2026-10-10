# Web de aniversario 💌

## Requisitos
Node.js 18+ (https://nodejs.org)

## Usar
    npm install
    npm run dev       # desarrollo en http://localhost:5173
    npm run build     # genera la carpeta /dist lista para publicar

## Personalizar
- Textos, fecha, nombres, razones, carta: `src/config/content.js`
- Fotos: copiarlas a `public/photos/` y referenciarlas por nombre en `content.js`
  (en `historia[].foto` o en `galeria`)
- Colores: variables al inicio de `src/styles/global.css`

## Publicar gratis
Arrastra la carpeta `dist` a https://app.netlify.com/drop o súbela a Vercel / GitHub Pages.

## Estructura
    src/
      config/content.js   ← todo el contenido
      components/         ← una pieza visual por archivo
      hooks/              ← lógica reutilizable (contador, scroll)
      utils/              ← ayudantes (fotos, corazones)
      styles/global.css   ← estilos y tema
      App.jsx             ← orden de las secciones
