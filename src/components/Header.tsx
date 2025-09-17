"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const { cart } = useCart();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Tienda" },
    { href: "/about-us", label: "Nosotros" },
    { href: "/faq", label: "Preguntas Frecuentes" },
  ];
  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };
  const totalItems = cart.reduce((acc, p) => acc + (p.cantidad ?? 1), 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        <Link href="/" className="text-xl font-bold text-gray-800">
          <span className="text-pink-600">Macramé</span> Store
        </Link>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-pink-500 transition-colors duration-300 ${
                pathname === item.href ? "text-pink-600 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-pink-500 transition-colors duration-300" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 
              flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        <button
          className="md:hidden w-6 h-6 text-gray-700 hover:text-pink-500 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav
        className={`md:hidden flex flex-col px-6 gap-4 bg-pink-50 font-medium text-gray-700 transition-all 
          duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`hover:text-pink-500 transition-colors duration-300 ${
              pathname === item.href ? "text-pink-600 font-semibold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
