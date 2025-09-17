import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
    </main>
  );
}
