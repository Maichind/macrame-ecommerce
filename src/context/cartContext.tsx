"use client";

import { Product, productsList } from "./products";
import { Category, categoriesList } from "./categories";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CartContextType = {
  cart: Product[];
  products: Product[];
  categories: Category[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>(productsList);
  const [categories, setCategories] = useState<Category[]>(categoriesList);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, cantidad: (p.cantidad ?? 1) + 1 } : p
        );
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: (p.cantidad ?? 1) + 1 } : p
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: Math.max((p.cantidad ?? 1) - 1, 1) } : p
        )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotal = () =>
    cart.reduce((acc, p) => acc + p.price * (p.cantidad ?? 1), 0);

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        products,  
        categories,
        setProducts, 
        setCategories,
        addToCart, 
        removeFromCart, 
        clearCart, 
        getTotal, 
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
