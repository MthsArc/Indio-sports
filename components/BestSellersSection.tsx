import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface BestSellersSectionProps {
  products: Product[];
}

export default function BestSellersSection({ products }: BestSellersSectionProps) {
  if (products.length === 0) return null;

  const sorted = [...products].sort(
    (a, b) => (a.bestSellerRank ?? 99) - (b.bestSellerRank ?? 99)
  );

  return (
    <section id="mais-vendidos" className="border-b border-carvao-border bg-carvao/40 py-16 sm:py-20">
      <div className="container-x">
        <span className="eyebrow">Ranking da Torcida</span>
        <h2 className="mt-2 font-display text-3xl italic text-marfim sm:text-4xl">
          Mais Vendidos
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-6">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} rankBadge={product.bestSellerRank} />
          ))}
        </div>
      </div>
    </section>
  );
}
