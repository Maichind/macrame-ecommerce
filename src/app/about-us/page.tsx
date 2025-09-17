export default function AboutUsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative mb-12">
        <img
          src="/hero-macrame.jpg"
          alt="Macramé artesanal"
          className="w-full h-64 object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-pink-900/30 rounded-2xl flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Sobre <span className="text-pink-300">Nosotros</span>
          </h1>
        </div>
      </div>

      <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
        <p>
          Somos una marca dedicada a crear accesorios artesanales de macramé, 
          hechos a mano con dedicación, amor y detalle. 
        </p>
        <p>
          Nuestro propósito es ofrecer piezas únicas que transmiten autenticidad 
          y acompañan a quienes buscan algo más que un simple accesorio: 
          un recuerdo con valor artesanal.  
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 text-center mb-12">
        <div className="p-6 bg-pink-50 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Artesanía</h3>
          <p className="text-gray-600 text-sm">
            Cada pieza es creada manualmente, con técnicas tradicionales y un 
            toque único en cada diseño.
          </p>
        </div>
        <div className="p-6 bg-pink-50 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Calidad</h3>
          <p className="text-gray-600 text-sm">
            Usamos materiales seleccionados que garantizan durabilidad 
            sin perder el encanto artesanal.
          </p>
        </div>
        <div className="p-6 bg-pink-50 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">Autenticidad</h3>
          <p className="text-gray-600 text-sm">
            No hay dos piezas iguales, cada accesorio es tan único como la persona 
            que lo lleva.
          </p>
        </div>
      </div>

      <div className="bg-pink-100 rounded-xl p-8 text-center">
        <p className="text-xl italic text-gray-700">
          “El verdadero valor de lo artesanal está en cada nudo, en cada detalle, 
          en la historia que cuentas con lo que llevas.”
        </p>
      </div>
    </section>
  );
}
