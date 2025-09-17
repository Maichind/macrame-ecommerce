export default function TermsConditionsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="bg-pink-50 rounded-2xl p-10 text-center shadow-sm">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">
            Por favor, lee atentamente estos términos antes de utilizar nuestro sitio web 
            y realizar tus compras.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            1. Uso del Sitio
          </h2>
          <p>
            Al acceder y navegar en este sitio, aceptas cumplir con los presentes 
            Términos y Condiciones. Te comprometes a hacer un uso responsable, 
            sin realizar actividades ilícitas que puedan afectar a la marca o a terceros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            2. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido, incluyendo imágenes, textos, logotipos y productos, 
            es propiedad exclusiva de <span className="font-semibold">Macramé Shop</span>. 
            Está prohibida su reproducción total o parcial sin autorización previa por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            3. Condiciones de Compra
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Los precios están expresados en pesos colombianos (COP).</li>
            <li>Las compras están sujetas a disponibilidad de stock.</li>
            <li>El envío se realiza a través de empresas de mensajería externas.</li>
            <li>Los tiempos de entrega pueden variar según la ubicación.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            4. Privacidad y Datos Personales
          </h2>
          <p>
            Respetamos tu privacidad y protegemos tus datos personales conforme a la ley 
            de protección de datos vigente en Colombia. No compartimos información con 
            terceros sin tu consentimiento expreso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            5. Limitación de Responsabilidad
          </h2>
          <p>
            <span className="font-semibold">Macramé Shop</span> no se hace responsable 
            por retrasos en los envíos, daños ocasionados por terceros o mal uso de los productos 
            adquiridos. Nuestra responsabilidad se limita al valor de la compra efectuada.
          </p>
        </section>
      </div>

      <div className="bg-pink-100 rounded-xl p-6 mt-12 text-center shadow-sm">
        <p className="text-sm text-gray-700">
          Última actualización: {new Date().toLocaleDateString("es-CO")} <br />
          El uso de este sitio implica la aceptación de estos términos.
        </p>
      </div>
    </section>
  );
}
