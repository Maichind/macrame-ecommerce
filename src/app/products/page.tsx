"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/context/cartContext";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";

const products: Product[] = [
  { id: 1, name: "Pulsera Macramé Rosa", price: 35000, image: "/hero-macrame.jpg", category: "bracelets" },
  { id: 2, name: "Aretes Macramé Blanco", price: 42000, image: "/hero-macrame.jpg", category: "earrings" },
  { id: 3, name: "Llavero Macramé Beige", price: 15000, image: "/hero-macrame.jpg", category: "keychains" },
  { id: 4, name: "Collar Macramé Azul", price: 52000, image: "/hero-macrame.jpg", category: "necklaces" },
];

const categories = [
  { key: "all", label: "Todos" },
  { key: "necklaces", label: "Collares" },
  { key: "earrings", label: "Aretes" },
  { key: "bracelets", label: "Pulseras" },
  { key: "keychains", label: "Llaveros" },
  { key: "accessories", label: "Accesorios" },
];

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);

    if (cat === "all") {
      router.replace("/products");
    } else {
      router.replace(`/products?category=${cat}`);
    }
  };
  
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-8 max-w-[1400px] mx-auto px-4">
      <nav className="flex flex-wrap justify-center gap-3 bg-pink-50 py-3 px-4 rounded-lg mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 cursor-pointer
              ${
                activeCategory === cat.key
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {filteredProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <Card
                key={p.id}
                className="py-0 gap-0 cursor-pointer hover:shadow-xl transition overflow-hidden rounded-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="object-cover h-64 w-full rounded-t-2xl transform hover:scale-105 transition duration-500"
                  />
                </div>
                <CardContent className="p-4 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
                  <p className="text-pink-600 font-bold text-base">
                    ${p.price.toLocaleString("es-CO")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No hay productos en esta categoría.
        </p>
      )}
    </section>
  );
}
