import { useEffect, useState } from "react";
import { content as c } from "./config/content";
import { hearts } from "./utils/hearts";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
//import Reasons from "./components/Reasons";
import Letter from "./components/Letter";
import Question from "./components/Question";

export default function App() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    hearts(15);
    const id = setInterval(() => hearts(1), 900);
    return () => clearInterval(id);
  }, [abierto]);

  return (
    <>
      <Intro {...c.intro} abierto={abierto} onOpen={() => setAbierto(true)} />
      <main>
        <Hero nombres={c.nombres} inicio={c.inicio} />
        <Timeline eventos={c.historia} />
        <Gallery fotos={c.galeria} />
        {/* <Reasons razones={c.razones} /> */}
        <Letter texto={c.carta} />
        <Question cfg={c.pregunta} />
      </main>
      <footer>{c.pie}</footer>
    </>
  );
}
