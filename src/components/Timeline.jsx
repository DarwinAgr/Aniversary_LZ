import Reveal from "./Reveal";
import { photo } from "../utils/photo";

export default function Timeline({ eventos }) {
  return (
    <section>
      <h2>Nuestra historia</h2>
      <div className="tl">
        {eventos.map((e) => (
          <Reveal key={e.fecha} className="ev">
            <small>{e.fecha}</small>
            <h3>{e.titulo}</h3>
            <p>{e.texto}</p>
            {e.foto && <img src={photo(e.foto)} alt={e.titulo} loading="lazy" />}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
