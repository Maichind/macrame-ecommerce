"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-pink-50 py-16 md:py-24 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Arte en{" "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              Macramé
            </span>{" "}
            Hecho a Mano
          </h1>
          <p className="mt-6 text-gray-600 text-lg md:w-3/4">
            Accesorios únicos creados con dedicación, para que siempre lleves
            contigo un toque especial.
          </p>
          <Link href="/products">
            <button className="mt-8 px-8 py-4 bg-pink-500 text-white font-semibold rounded-full shadow-md 
              hover:shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
                Comprar ahora         
            </button>
          </Link> 
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
          <Image
            src="/hero-macrame.jpg"
            alt="Macramé Hero"
            width={500}
            height={500}
            className="relative rounded-3xl shadow-xl border border-gray-100 object-cover transform 
              hover:scale-105 transition duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}
