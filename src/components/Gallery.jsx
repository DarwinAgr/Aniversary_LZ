import { useState } from "react";
import { photo } from "../utils/photo";

export default function Gallery({ fotos }) {
  const [abierta, setAbierta] = useState(null);
  if (!fotos.length) return null; // si no hay fotos, la sección no se muestra
  return (
    <section>
      <h2>Nuestros momentos</h2>
      <div className="gallery">
        {fotos.map((f) => (
          <figure key={f.foto} onClick={() => setAbierta(f)}>
            <img src={photo(f.foto)} alt={f.pie || ""} loading="lazy" />
            {f.pie && <figcaption>{f.pie}</figcaption>}
          </figure>
        ))}
      </div>
      {abierta && (
        <div className="lightbox" onClick={() => setAbierta(null)}>
          <img src={photo(abierta.foto)} alt={abierta.pie || ""} />
        </div>
      )}
    </section>
  );
}
