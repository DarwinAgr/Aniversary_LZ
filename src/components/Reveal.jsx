import { useInView } from "../hooks/useInView";

// Envuelve cualquier cosa para que aparezca con animación al hacer scroll.
export default function Reveal({ children, className = "" }) {
  const [ref, visto] = useInView();
  return <div ref={ref} className={`reveal ${visto ? "show" : ""} ${className}`}>{children}</div>;
}
