// import { useState } from "react";
// import { hearts } from "../utils/hearts";

// export default function Reasons({ razones }) {
//   const [abiertas, setAbiertas] = useState(new Set());
//   const toggle = (i) => {
//     const s = new Set(abiertas);
//     s.has(i) ? s.delete(i) : (s.add(i), hearts(3));
//     setAbiertas(s);
//   };
//   return (
//     <section>
//       <h2>Razones por las que te amo</h2>
//       <p className="hint">Toca cada corazón</p>
//       <div className="reasons">
//         {razones.map((r, i) => (
//           <div key={i} className={"r" + (abiertas.has(i) ? " open" : "")} onClick={() => toggle(i)}>
//             {abiertas.has(i) ? r : `💗 ${i + 1}`}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
