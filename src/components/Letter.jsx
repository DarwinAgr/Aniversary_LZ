import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

// Escribe la carta letra por letra cuando llega a pantalla.
export default function Letter({ texto }) {
  const [ref, visto] = useInView(0.3);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visto) return;
    const id = setInterval(() => setN((x) => (x >= texto.length ? (clearInterval(id), x) : x + 1)), 35);
    return () => clearInterval(id);
  }, [visto, texto]);
  return (
    <section>
      <h2>Una carta para ti</h2>
      <div ref={ref} className="letter">{texto.slice(0, n)}</div>
    </section>
  );
}
