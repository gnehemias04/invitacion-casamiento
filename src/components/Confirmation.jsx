function Confirmation() {
  const phone = "5491122918433";

  const message = encodeURIComponent(
    "Hola, somos [nombre]. Queremos confirmar que vamos al casamiento de Yamila y Elias.",
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="min-h-[60vh] px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-700">
          Confirmación
        </p>

        <h2 className="font-great-vibes text-5xl text-[#7D1329] md:text-6xl">
          ¿Nos acompañás?
        </h2>

        <p className="mt-6 text-gray-600">
          Nos encantaría compartir este día tan especial con vos.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#7D1329] px-8 py-3 text-white shadow-md transition hover:scale-105">
          Confirmar asistencia 💕
        </a>
      </div>
    </section>
  );
}

export default Confirmation;
