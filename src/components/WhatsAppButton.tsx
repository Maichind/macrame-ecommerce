"use client";

import Link from "next/link";
import { APP_CONFIG } from "@/config";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${APP_CONFIG.whatsappNumber.replace("+","")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
