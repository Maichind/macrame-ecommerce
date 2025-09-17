"use client";

import Link from "next/link";
import { Gem, CircleDot, Star } from "lucide-react";

const categories = [
  { id: "necklaces", name: "Collares", icon: Gem },
  { id: "earrings", name: "Aretes", icon: Star },
  { id: "bracelets", name: "Pulseras", icon: CircleDot }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Categorías Populares
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map(({ id, name, icon: Icon }) => (
            <Link key={id} href={`/products?category=${id}`}>
              <div
                key={name}
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-lg 
                  hover:border-pink-400 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 
                  transition-colors duration-300 hover:bg-pink-500 hover:text-white">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  {name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
