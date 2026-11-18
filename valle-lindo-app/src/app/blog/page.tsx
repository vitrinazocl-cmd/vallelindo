import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog Gastronómico Valle Lindo | Consejos para Pizzerías y Restaurantes",
  description: "Guías expertas sobre quesos para pizzerías, rendimiento de carnes por kilo, control de costos en cocina y técnicas de horneado.",
};

const articles = [
  {
    slug: "como-elegir-el-mejor-queso-mozzarella-para-pizza",
    title: "Cómo Elegir el Mejor Queso Mozzarella para tu Pizzería: Rendimiento, Elasticidad y Costo",
    summary: "Descubre los secretos técnicos del punto de fundido, porcentaje de humedad y cómo evitar el desprendimiento de grasa en hornos a leña o convección.",
    category: "Pizzerías",
    readTime: "5 min de lectura",
    date: "12 Nov 2026",
    image: "/assets/products/named/queso-mozzarella-barra-colun-3kg.jpeg"
  },
  {
    slug: "queso-palmita-rio-grande-en-chile",
    title: "El Fenómeno del Queso Palmita Río Grande en la Gastronomía Chilena",
    summary: "Por qué locales de comida rápida, cachaperas y pizzerías prefieren el corte cilíndrico de 10 kg para maximizar su ticket promedio.",
    category: "Tendencias",
    readTime: "4 min de lectura",
    date: "08 Nov 2026",
    image: "/assets/products/named/queso-palmita-rio-grande-10kg.jpeg"
  },
  {
    slug: "optimizacion-costos-carne-vacuno-restaurantes",
    title: "Estandarización del Lomo Vetado: Cómo Reducir la Merma a Menos del 3%",
    summary: "Guía práctica de porcionado para chefs y administradores de parrilladas y casinos corporativos.",
    category: "Carnes & Gestión",
    readTime: "6 min de lectura",
    date: "02 Nov 2026",
    image: "/assets/products/named/lomo-vetado-vacuno-premium.jpeg"
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-[#121212] text-white p-8 rounded-3xl border border-gray-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950 text-red-300 text-xs font-bold border border-red-800">
          <BookOpen className="w-3.5 h-3.5" /> Blog y Guías Técnicas
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          Centro de Conocimiento Gastronómico Valle Lindo
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
          Estrategias de rentabilidad, técnicas de cocción y recomendaciones de insumos para dueños y maestros pizzeros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art, idx) => (
          <article key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <Image src={art.image} alt={art.title} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#B71C1C] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow">
                  {art.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{art.readTime}</span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="font-extrabold text-sm text-gray-900 line-clamp-2 hover:text-[#B71C1C] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {art.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href="/catalogo"
                className="text-xs font-bold text-[#B71C1C] hover:underline flex items-center gap-1"
              >
                Ver productos recomendados <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
