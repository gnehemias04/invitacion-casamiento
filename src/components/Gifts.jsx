import { useState } from "react";
function Gifts() {
  const [copied, setCopied] = useState(false);
  const [copiedCbu, setCopiedCbu] = useState(false);
  const alias = "elias-ems";
  const cbu = "0000003100021732693283";
  const copyAlias = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const copyCbu = () => {
    navigator.clipboard.writeText(cbu);
    setCopiedCbu(true);
    setTimeout(() => {
      setCopiedCbu(false);
    }, 2000);
  };
  return (
    <section className="bg-pink-50 px-6 py-20">
      {" "}
      <div className="mx-auto max-w-2xl text-center">
        {" "}
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-700">
          {" "}
          Regalos{" "}
        </p>{" "}
        <h2 className="font-great-vibes text-5xl text-gray-900 md:text-6xl">
          {" "}
          Un detalle para nosotros{" "}
        </h2>{" "}
        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-gray-600">
          {" "}
          Si desean hacernos un regalo, pueden hacerlo mediante transferencia
          bancaria. 💕 Cada aporte, sin importar el monto, será recibido con
          mucho cariño y nos ayudará a comenzar esta nueva etapa juntos. 💕{" "}
        </p>{" "}
        <div className="mt-10 grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 md:items-center">
          {" "}
          {/* DATOS DE TRANSFERENCIA */}{" "}
          <div className="text-left">
            {" "}
            <h3 className="text-center font-great-vibes text-4xl text-pink-700">
              {" "}
              Datos bancarios{" "}
            </h3>{" "}
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              {" "}
              <div>
                {" "}
                <span className="font-semibold text-gray-800">
                  {" "}
                  Titular:{" "}
                </span>{" "}
                <p>Elias Emanuel Sosa</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="font-semibold text-gray-800">
                  {" "}
                  Banco:{" "}
                </span>{" "}
                <p>Mercado Pago</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="font-semibold text-gray-800">
                  {" "}
                  Alias:{" "}
                </span>{" "}
                <div className="mt-1 flex items-center gap-2">
                  {" "}
                  <span className="font-medium text-pink-700">
                    {" "}
                    {alias}{" "}
                  </span>{" "}
                  <button
                    onClick={copyAlias}
                    className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-700 transition hover:bg-pink-200">
                    {" "}
                    {copied ? "¡Copiado!" : "Copiar"}{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="font-semibold text-gray-800"> CBU: </span>{" "}
                <div className="mt-1 flex items-center gap-2">
                  {" "}
                  <span>{cbu}</span>{" "}
                  <button
                    onClick={copyCbu}
                    className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-700 transition hover:bg-pink-200">
                    {" "}
                    {copiedCbu ? "¡Copiado!" : "Copiar"}{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* QR */}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
export default Gifts;
