"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product, useCart } from "@/context/cartContext";

const products: Product[] = [
  { id: 1, name: "Pulsera Macramé Rosa", price: 35000, description: "Hecha a mano con hilo de algodón rosado.", image: "/hero-macrame.jpg", category: "bracelets" },
  { id: 2, name: "Aretes Macramé Blanco", price: 42000, description: "Aretes elegantes de macramé blanco.", image: "/hero-macrame.jpg", category: "earrings" },
  { id: 3, name: "Llavero Macramé Beige", price: 15000, description: "Llavero artesanal en color beige.", image: "/hero-macrame.jpg", category: "keychains" },
];

const availableCategories = ["bracelets", "earrings", "keychains"];

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const { addToCart } = useCart();

  if (availableCategories.includes(slug)) {
    const filtrados = products.filter((p) => p.category === slug);

    return (
      <section className="py-8 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          {slug === "bracelets" ? "Pulseras" : slug === "earrings" ? "Aretes" : "Llaveros"}
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtrados.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition py-0 gap-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={300}
                  height={300}
                  className="rounded-t-lg object-cover h-64 w-full"
                />
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-pink-600 font-bold">${p.price.toLocaleString("es-CO")}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    );
  };

  const product = products.find((p) => p.id === Number(slug));
  if (!product) return notFound();

  return (
    <section className="py-8 max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-[400px]"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-pink-600 text-2xl font-semibold mb-4">
          ${product.price.toLocaleString("es-CO")}
        </p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full cursor-pointer" 
          onClick={() => addToCart(product)}>
          Agregar al carrito
        </Button>
      </div>
    </section>
  );
}
