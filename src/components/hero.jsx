import { useRef, useState } from "react";
/*Hero */

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
    <section className="min-h-screen w-full flex flex-col items-center justify-center gap-6 bg-[url('/bg.png')] md:bg-[url('/bg1.png')] bg-cover px-6 py-10">
      <audio ref={audioRef} loop>
        <source src="/up.mp3" type="audio/mpeg" />
      </audio>

      <div className="text-center">
        <p className="mb-2 mt-15 text-sm uppercase tracking-[0.3em] text-pink-700">
          Nuestra boda
        </p>

        <h1 className="font-great-vibes text-6xl text-[#7D1329] md:text-8xl">
          Yamila y Elias
        </h1>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-pink-700">
          19/10/2026
        </p>
      </div>

      <img
        src="/yami-eli.jpeg"
        alt="Ilustración de una boda"
        className="w-[85%] max-w-md "
      />

      <button
        onClick={toggleMusic}
        className="group flex items-center gap-3 rounded-full border border-[#7D1329] bg-white/70 px-6 py-3 text-[#7D1329] shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-sm ${
            isPlaying ? "animate-pulse" : ""
          }`}>
          {isPlaying ? "❚❚" : "♪"}
        </span>

        <span className="font-serif text-sm tracking-wide">
          {isPlaying ? "Pausar canción" : "Nuestra canción"}
        </span>
      </button>

      <div className="bg-white rounded-2xl p-2 max-w-xl text-center font-great-vibes text-2xl text-gray-700 md:text-3xl">
        <p>“El amor es la medida de nuestra fé.”</p>

        <p className="mt-3 text-xl text-[#7D1329]">Dieter F. Uchtdorf</p>
      </div>
    </section>
  );
}

export default Hero;
