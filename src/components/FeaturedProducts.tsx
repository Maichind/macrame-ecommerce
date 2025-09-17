"use client";

import Image from "next/image";
import { Product, useCart } from "@/context/cartContext";

const products: Product[] = [
  { id: 1, name: "Pulsera Tejida Rosa", price: 25000, image: "/hero-macrame.jpg", category: "bracelets" },
  { id: 2, name: "Aretes en Macramé", price: 30000, image: "/hero-macrame.jpg", category: "earrings" },
  { id: 3, name: "Llavero Artesanal", price: 15000, image: "/hero-macrame.jpg", category: "keychains" },
  { id: 4, name: "Collar Bohemio", price: 40000, image: "/hero-macrame.jpg", category: "keychains" },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-pink-50">
      <div className="container max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Productos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-pink-600 font-bold mt-2">
                  ${product.price.toLocaleString("es-CO")}
                </p>

                <button
                  className="mt-4 w-full py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition cursor-pointer font-medium"
                  onClick={() => addToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
