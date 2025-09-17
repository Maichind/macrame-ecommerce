export default function ShippingPoliciesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="bg-pink-50 rounded-2xl p-10 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Políticas de Envío
          </h1>
          <p className="text-gray-600">
            Conoce los tiempos, costos y condiciones de nuestros envíos.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            1. Tiempos de Entrega
          </h2>
          <p>
            Los pedidos son procesados en un plazo de 1 a 3 días hábiles tras la confirmación 
            del pago. Los tiempos de entrega varían según la ubicación:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Ciudades principales: 2 a 5 días hábiles.</li>
            <li>Otras ciudades y municipios: 4 a 8 días hábiles.</li>
            <li>Zonas rurales o de difícil acceso: hasta 12 días hábiles.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            2. Empresas de Mensajería
          </h2>
          <p>
            Trabajamos con empresas de mensajería reconocidas en Colombia para asegurar 
            entregas confiables. Una vez despachado el pedido, recibirás un número de guía 
            para rastrear tu envío.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            3. Costos de Envío
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>El costo de envío depende de la ciudad y del peso del paquete.</li>
            <li>Ofrecemos <span className="font-semibold">envío gratis</span> en compras superiores a $200.000 COP.</li>
            <li>El costo exacto se calculará antes de finalizar la compra.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            4. Condiciones Especiales
          </h2>
          <p>
            Durante temporadas altas (Navidad, promociones especiales, etc.), los tiempos 
            de entrega pueden extenderse. Te recomendamos realizar tus pedidos con anticipación.
          </p>
        </section>
      </div>

      <div className="bg-pink-100 rounded-xl p-6 mt-12 text-center shadow-sm">
        <p className="text-sm text-gray-700">
          Última actualización: {new Date().toLocaleDateString("es-CO")} <br />
          Estas políticas pueden actualizarse sin previo aviso. 
        </p>
      </div>
    </section>
  );
}
