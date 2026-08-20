import { useState } from "react";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Hero from "./components/hero";
import Story from "./components/Story";
import Event from "./Event";
import Confirmation from "./Confirmation";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-full w-full">
        <Hero />
        <Story />
        <Event />
        <Confirmation />
      </section>
    </>
  );
}

export default App;
