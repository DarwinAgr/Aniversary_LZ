import { useEffect, useState } from "react";

// Tiempo transcurrido desde `inicio`, actualizado cada segundo.
export function useCountdown(inicio) {
  const calc = () => {
    const s = Math.max(0, ((Date.now() - new Date(inicio)) / 1000) | 0);
    return { días: (s / 86400) | 0, horas: ((s % 86400) / 3600) | 0, min: ((s % 3600) / 60) | 0, seg: s % 60 };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, [inicio]);
  return t;
}
