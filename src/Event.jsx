import { useEffect, useState } from "react";

function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-16T21:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[url('/bg1.png')] bg-cover px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-700">
          El gran día
        </p>

        <h2 className="font-great-vibes text-5xl text-[#7D1329] md:text-6xl">
          Fecha y lugar
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* FECHA */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="font-great-vibes text-4xl text-[#7D1329]">Fecha</h3>

            <p className="mt-4 text-lg text-gray-700">16 de Octubre de 2026</p>

            <p className="mt-2 text-gray-500">21:00 hs</p>
            <img
              src="/schedule.png"
              alt=""
              className="mt-6  w-full rounded-2xl  shadow-sm "
            />

            {/* CUENTA REGRESIVA */}
            <div className="mt-8 grid grid-cols-4 gap-2">
              <div>
                <p className="text-2xl font-semibold text-[#7D1329]">
                  {timeLeft.days}
                </p>
                <span className="text-xs text-gray-500">días</span>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#7D1329]">
                  {timeLeft.hours}
                </p>
                <span className="text-xs text-gray-500">horas</span>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#7D1329]">
                  {timeLeft.minutes}
                </p>
                <span className="text-xs text-gray-500">min</span>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#7D1329]">
                  {timeLeft.seconds}
                </p>
                <span className="text-xs text-gray-500">seg</span>
              </div>
            </div>
          </div>

          {/* LUGAR */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="font-great-vibes text-4xl text-[#7D1329]">Lugar</h3>

            <p className="mt-4 text-lg text-gray-700">Quinta Santa Ana</p>

            <img
              src="/images.jpg"
              alt="Lugar donde se realizará el casamiento"
              className="mt-6 h-48 w-full rounded-2xl object-cover shadow-sm md:h-56"
            />

            <p className="mt-2 text-gray-500">
              Av. Eva Duarte de Perón 1505, Guernica, Provincia de Buenos Aires
            </p>

            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YJxivARjHARiOBTIGCAAQRRg8Mg8IARAuGCcYrwEYxwEYjgUyBggCEEUYOTIPCAMQABhDGMkDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgxNDk5ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ar&sa=X&geocode=KfcZ-8YA1aKVMb1dgMGFAwcj&daddr=Av.+Eva+Duarte+de+Per%C3%B3n+1505,+B1862+Guernica,+Provincia+de+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-[#7D1329] px-5 py-2 text-sm text-white transition hover:scale-105">
              Ver ubicación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
