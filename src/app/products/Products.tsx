"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductsClient({ category }: { category: string }) {
  const router = useRouter();
  const { products, categories } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setActiveCategory(category);
  }, [category]);

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
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
          {filteredProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="w-full">
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
