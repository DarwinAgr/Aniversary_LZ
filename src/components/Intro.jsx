export default function Intro({ titulo, boton, onOpen, abierto }) {
  return (
    <div className={"intro" + (abierto ? " out" : "")}>
      <div className="env">💌</div>
      <h2>{titulo}</h2>
      <button onClick={onOpen}>{boton}</button>
    </div>
  );
}
