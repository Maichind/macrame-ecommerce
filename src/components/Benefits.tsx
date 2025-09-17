"use client";

import { Truck, ShieldCheck, HandHeart } from "lucide-react";

const benefits = [
  {
    title: "Envíos a todo el país",
    description: "Recibe tus productos en cualquier ciudad de Colombia.",
    icon: Truck,
  },
  {
    title: "Hecho a mano",
    description: "Cada pieza es única, elaborada con dedicación y detalle.",
    icon: HandHeart,
  },
  {
    title: "Pago seguro",
    description: "Tus transacciones están protegidas y garantizadas.",
    icon: ShieldCheck,
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-lg 
                hover:border-pink-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 
                transition-colors duration-300 hover:bg-pink-500 hover:text-white">
                <Icon className="w-8 h-8" />
              </div>
              <span className="text-lg font-semibold text-gray-700">
                {title}
              </span>
              <p className="mt-2 text-gray-600">{description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
