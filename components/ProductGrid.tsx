import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-24 text-center">
        <p className="font-display text-2xl italic text-marfim">Nenhuma camisa encontrada</p>
        <p className="font-sans text-sm text-marfim-dim">
          Tente buscar por outro time ou remova os filtros ativos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
