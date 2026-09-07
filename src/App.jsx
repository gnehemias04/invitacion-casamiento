import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Event from "./components/Event";
import Confirmation from "./components/Confirmation";
import Gifts from "./components/Gifts";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="h-full w-full">
        <Hero />
        <Story />
        <Event />
        <Gifts />
        <Confirmation />
      </section>
    </>
  );
}

export default App;
