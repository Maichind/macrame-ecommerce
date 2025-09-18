"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart, getTotal, increaseQuantity, decreaseQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <section className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío 🛒</h1>
        <Link href="/products" className="text-pink-500 font-medium hover:underline">
          Ir a la tienda
        </Link>
      </section>
    );
  }

  return (
    <section className="py-7 max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

      <div className="space-y-6">
        {cart.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between h-40 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex items-center gap-4">
              <Image
                src={p.image}
                alt={p.name}
                width={130}
                height={130}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg">{p.name}</h2>
                <p className="text-pink-600 font-bold">
                  ${p.price.toLocaleString("es-CO")}
                </p>
                <p className="text-gray-500 text-sm">
                  Subtotal: ${(p.price * (p.cantidad ?? 0)).toLocaleString("es-CO")}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-3 cursor-pointer"
                    onClick={() => decreaseQuantity(p.id)}
                  >
                    -
                  </Button>
                  <span className="px-2">{p.cantidad}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-3 cursor-pointer"
                    onClick={() => increaseQuantity(p.id)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(p.id)}
              className="text-red-500 hover:text-red-700 transition cursor-pointer"
            >
              <Trash2 className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-5 border rounded-lg shadow bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-2xl font-bold">
          Total: ${getTotal().toLocaleString("es-CO")}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={clearCart}
            className="bg-gray-400 hover:bg-gray-500 text-white rounded-md cursor-pointer"
          >
            Vaciar Carrito
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-md cursor-pointer">
            <Link href="/checkout">Finalizar Compra</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
