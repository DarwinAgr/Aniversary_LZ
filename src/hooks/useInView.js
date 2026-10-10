import { useEffect, useRef, useState } from "react";

// Devuelve [ref, visto]; `visto` pasa a true la primera vez que el elemento entra en pantalla.
export function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visto, setVisto] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setVisto(true), io.disconnect()), { threshold });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visto];
}
