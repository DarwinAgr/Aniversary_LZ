// Convierte "foto.jpg" en la ruta correcta dentro de /public/photos
export const photo = (name) => `${import.meta.env.BASE_URL}photos/${name}`;
