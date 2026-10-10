import { useCountdown } from "../hooks/useCountdown";

export default function Hero({ nombres, inicio }) {
  const t = useCountdown(inicio);
  return (
    <section className="hero">
      <p>Feliz aniversario</p>
      <h1>{nombres.tu} ❤ {nombres.pareja}</h1>
      <p>Llevamos juntos</p>
      <div className="count">
        {Object.entries(t).map(([k, v]) => (
          <div key={k}><b>{v}</b><span>{k}</span></div>
        ))}
      </div>
    </section>
  );
}
