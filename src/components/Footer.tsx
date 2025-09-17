"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-50">
      <div className="container max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-pink-500">Macramé</span> Shop
          </h2>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Accesorios artesanales hechos a mano con dedicación y amor.  
            Lleva contigo un detalle único.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorías</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/products" className="hover:text-pink-500 transition-colors duration-300">Collares</Link></li>
            <li><Link href="/products/earrings" className="hover:text-pink-500 transition-colors duration-300">Aretes</Link></li>
            <li><Link href="/products/bracelets" className="hover:text-pink-500 transition-colors duration-300">Pulseras</Link></li>
            <li><Link href="/products/keychains" className="hover:text-pink-500 transition-colors duration-300">Llaveros</Link></li>
            <li><Link href="/products" className="hover:text-pink-500 transition-colors duration-300">Accesorios</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Información</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/about-us" className="hover:text-pink-500 transition-colors duration-300">Sobre nosotros</Link></li>
            <li><Link href="/shipping-policies" className="hover:text-pink-500 transition-colors duration-300">Políticas de envío</Link></li>
            <li><Link href="/faq" className="hover:text-pink-500 transition-colors duration-300">Preguntas frecuentes</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-pink-500 transition-colors duration-300">Términos y condiciones</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-500" />
              soporte@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-500" />
              +57 300 123 4567
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <Link href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-pink-500 
              hover:bg-pink-100 transition-colors duration-300">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-pink-500 
              hover:bg-pink-100 transition-colors duration-300">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-pink-500 
              hover:bg-pink-100 transition-colors duration-300">
              <FaWhatsapp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500/10 to-pink-500/0 h-px"></div>
      <div className="py-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Macramé Shop. Todos los derechos reservados.
      </div>
    </footer>
  );
}
