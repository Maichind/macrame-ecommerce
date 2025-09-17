"use client";

import Image from "next/image";
import { APP_CONFIG } from "@/config";
import { FormEvent, useState } from "react";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart();
  const [form, setForm] = useState({
    nombre: "",
    ciudad: "",
    direccion: "",
    telefono: "",
  });
  const [error, setError] = useState("");
  const phoneRegex = /^[3]\d{9}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "telefono") {
      if (!phoneRegex.test(value)) {
        setError("El número de teléfono debe tener 10 dígitos y empezar con 3.");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (error) return;

    const productos = cart
      .map(
        (p) => `- ${p.name} (x${p.cantidad}) $${p.price.toLocaleString("es-CO")}`
      )
      .join("\n");

    const mensaje = `
      Hola, quiero confirmar mi pedido:
      \n *Detalles del Pedido*:\n${productos}
      \n *Total:* $${getTotal().toLocaleString("es-CO")}
      \n *Datos de envío*:\n- Nombre: ${form.nombre}\n- Ciudad: ${form.ciudad}\n- Dirección: ${form.direccion}\n- Teléfono: ${form.telefono}
    `.trim();

    const url = `https://wa.me/${APP_CONFIG.whatsappNumber.replace("+","")}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <section className="py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío 🛒</h1>
      </section>
    );
  }

  return (
    <section className="py-10 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Resumen de Compra
          </h2>
          <div className="divide-y">
            {cart.map((p) => (
              <div
                key={p.id}
                className="flex justify-between items-center py-2"
              >
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-500">
                    Cantidad: {p.cantidad}
                  </p>
                </div>
                <span className="font-semibold text-pink-600">
                  ${(p.price * (p.cantidad ?? 1)).toLocaleString("es-CO")}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center border-t pt-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold text-green-600">
              ${getTotal().toLocaleString("es-CO")}
            </span>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Paga con QR</h3>
            <div className="inline-block p-3 bg-gray-50 border rounded-lg shadow-sm">
              <Image
                src={APP_CONFIG.qrImage}
                alt="Código QR transferencia"
                width={180}
                height={180}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Datos de Envío</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              value={form.ciudad}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={form.direccion}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
            {error && <p className="text-red-500 px-3 text-[12px]">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            >
              Confirmar Pedido por WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
