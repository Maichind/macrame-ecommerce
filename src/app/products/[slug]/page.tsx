"use client";

import Image from "next/image";
import * as React from "react";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartContext";

export default function ProductDetail({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = React.use(params);
  const { products, addToCart } = useCart();

  const product = products.find((p) => p.id === Number(slug));
  if (!product) return notFound();

  return (
    <section className="py-12 max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2">
      <div className="relative w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-2xl object-cover w-full h-[450px] shadow-md hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
          {product.category}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-pink-600 text-3xl font-extrabold mb-4">
          ${product.price.toLocaleString("es-CO")}
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          {product.description}
        </p>

        <Button
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg 
            shadow-lg transition-all cursor-pointer"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="w-5 h-5" />
          Agregar al carrito
        </Button>
      </div>
    </section>
  );
}
