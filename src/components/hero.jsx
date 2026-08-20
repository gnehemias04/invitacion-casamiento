import { useRef, useState } from "react";

function Hero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center gap-6 bg-pink-50 px-6 py-10">
      <audio ref={audioRef} loop>
        <source src="/Perfect.mp3" type="audio/mpeg" />
      </audio>

      <div className="text-center">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-pink-700">
          Nuestra boda
        </p>

        <h1 className="font-great-vibes text-6xl text-black md:text-8xl">
          Yamila y Elias
        </h1>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-pink-700">
          19/10/2026
        </p>
      </div>

      <img
        src="/dibujado-mano-ilustracion-dibujos-animados-boda_23-2150850790.avif"
        alt="Ilustración de una boda"
        className="w-[85%] max-w-md rounded-4xl"
      />

      <button
        onClick={toggleMusic}
        className="group flex items-center gap-3 rounded-full border border-pink-300 bg-white/70 px-6 py-3 text-pink-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
      >
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-sm ${
            isPlaying ? "animate-pulse" : ""
          }`}
        >
          {isPlaying ? "❚❚" : "♪"}
        </span>

        <span className="font-serif text-sm tracking-wide">
          {isPlaying ? "Pausar canción" : "Nuestra canción"}
        </span>
      </button>

      <div className="max-w-xl text-center font-great-vibes text-2xl text-gray-700 md:text-3xl">
        <p>
          “Así que no son ya más dos, sino una sola carne; por tanto, lo que
          Dios juntó, no lo separe el hombre.”
        </p>

        <p className="mt-3 text-xl text-pink-700">Mateo 19:6</p>
      </div>
    </section>
  );
}

export default Hero;
