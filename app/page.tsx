import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import BestSellersSection from "@/components/BestSellersSection";
import CatalogSection from "@/components/CatalogSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  const featured = PRODUCTS.filter((product) => product.featured);
  const bestSellers = PRODUCTS.filter((product) => product.bestSeller);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedSection products={featured} />
        <BestSellersSection products={bestSellers} />
        <CatalogSection products={PRODUCTS} />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
