import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface FeaturedSectionProps {
  products: Product[];
}

export default function FeaturedSection({ products }: FeaturedSectionProps) {
  if (products.length === 0) return null;

  return (
    <section id="destaques" className="border-b border-carvao-border py-16 sm:py-20">
      <div className="container-x">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="eyebrow">Seleção da Casa</span>
            <h2 className="mt-2 font-display text-3xl italic text-marfim sm:text-4xl">
              Destaques
            </h2>
          </div>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="w-[70%] shrink-0 snap-start sm:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
