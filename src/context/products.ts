export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  cantidad?: number;
  category: "bracelets" | "earrings" | "keychains" | "necklaces" | "accessories";
};

export const productsList: Product[] = [
  {
    id: 1, name: "Pulsera Macramé Rosa", price: 35000,
    description:
      "Pulsera tejida a mano con hilo de algodón rosado, diseñada con un patrón delicado y un dije metálico que resalta su estilo artesanal. Ideal para quienes buscan un accesorio sutil pero lleno de personalidad.",
    image: "/bracelets.jpg", category: "bracelets",
  },
  {
    id: 2, name: "Aretes Macramé Blanco", price: 42000,
    description:
      "Aretes elegantes elaborados en macramé blanco con un acabado ligero y versátil. Su diseño artesanal los convierte en la pieza perfecta para complementar tanto un look casual como uno más sofisticado.",
    image: "/earrings.png", category: "earrings",
  },
  {
    id: 3, name: "Llavero Macramé Beige", price: 15000,
    description:
      "Llavero artesanal tejido en macramé color beige, resistente y práctico para llevar tus llaves con un toque único. Un detalle especial que combina funcionalidad con estilo artesanal.",
    image: "/keychains.jpg", category: "keychains",
  },
  {
    id: 4, name: "Collar Macramé Azul", price: 52000,
    description:
      "Collar artesanal tejido en macramé azul, con un diseño llamativo que refleja creatividad y dedicación. Perfecto para destacar en cualquier ocasión y realzar tu estilo con un accesorio único.",
    image: "/necklaces.webp", category: "necklaces",
  },
  {
    id: 5, name: "Aretes Macramé Blanco", price: 42000,
    description:
      "Aretes artesanales de macramé blanco, trabajados cuidadosamente con un diseño ligero y femenino. Su estilo minimalista los hace ideales para quienes buscan un toque elegante y artesanal.",
    image: "/earrings2.jpg", category: "earrings",
  },
];
