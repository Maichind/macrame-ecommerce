export default function FAQPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="bg-pink-50 rounded-2xl p-10 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-600">
            Encuentra aquí respuestas rápidas a las dudas más comunes.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <details className="group bg-white border rounded-lg shadow-sm p-5">
          <summary className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center">
            ¿Cuáles son los métodos de pago?
            <span className="ml-2 text-pink-500 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Aceptamos transferencias bancarias, pagos con tarjeta de crédito/débito y 
            pago contra entrega en algunas ciudades.
          </p>
        </details>

        <details className="group bg-white border rounded-lg shadow-sm p-5">
          <summary className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center">
            ¿Cuánto tardan los envíos?
            <span className="ml-2 text-pink-500 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Los tiempos de entrega dependen de la ubicación:
            <br />- Ciudades principales: 2 a 5 días hábiles.
            <br />- Municipios: 4 a 8 días hábiles.
            <br />- Zonas rurales: hasta 12 días hábiles.
          </p>
        </details>

        <details className="group bg-white border rounded-lg shadow-sm p-5">
          <summary className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center">
            ¿Puedo hacer cambios o devoluciones?
            <span className="ml-2 text-pink-500 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Sí, aceptamos cambios y devoluciones dentro de los primeros 15 días
            después de la compra, siempre y cuando el producto esté en perfectas condiciones 
            y con su empaque original.
          </p>
        </details>
      </div>

      <div className="bg-pink-100 rounded-xl p-6 mt-12 text-center shadow-sm">
        <p className="text-sm text-gray-700">
          ¿No encontraste la respuesta que buscabas?  
          Escríbenos a <span className="font-semibold">contacto@tumarca.com</span>.
        </p>
      </div>
    </section>
  );
}
