import { useState } from "react";
import { hearts } from "../utils/hearts";

export default function Question({ cfg }) {
  const [ganado, setGanado] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const huir = (e) => { e.preventDefault?.(); setPos({ x: Math.random() * 160 - 80, y: Math.random() * 80 - 40 }); };
  const aceptar = () => { setGanado(true); hearts(50); setInterval(() => hearts(3), 500); };

  return (
    <section className="ask">
      <h2>{cfg.texto}</h2>
      {ganado ? (
        <p className="win">{cfg.final}</p>
      ) : (
        <div className="btns">
          <button onClick={aceptar}>{cfg.si}</button>
          <button className="no" style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
                  onMouseEnter={huir} onTouchStart={huir} onClick={huir}>{cfg.no}</button>
        </div>
      )}
    </section>
  );
}
