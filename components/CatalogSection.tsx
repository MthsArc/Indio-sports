"use client";

import { useMemo, useState } from "react";
import { Product, ProductCategory } from "@/types/product";
import SearchBar from "./SearchBar";
import CategoryFilters from "./CategoryFilters";
import ProductGrid from "./ProductGrid";
import { normalize } from "@/lib/utils";

interface CatalogSectionProps {
  products: Product[];
}

export default function CatalogSection({ products }: CatalogSectionProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "todos">("todos");

  const filtered = useMemo(() => {
    const term = normalize(search.trim());
    return products.filter((product) => {
      const matchesCategory = category === "todos" || product.category === category;
      const matchesSearch = term.length === 0 || normalize(product.name).includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  const counts = useMemo(() => {
    const base: Record<string, number> = {
      todos: products.length,
      clube: 0,
      selecao: 0,
      retro: 0,
    };
    for (const product of products) {
      base[product.category] += 1;
    }
    return base;
  }, [products]);

  return (
    <section id="catalogo" className="py-16 sm:py-20">
      <div className="container-x">
        <span className="eyebrow">Catálogo Completo</span>
        <h2 className="mt-2 font-display text-3xl italic text-marfim sm:text-4xl">
          Todas as Camisas
        </h2>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar value={search} onChange={setSearch} className="sm:max-w-xs" />
          <CategoryFilters active={category} onChange={setCategory} counts={counts} />
        </div>

        <p className="mt-4 font-sans text-xs text-marfim-dim">
          {filtered.length} {filtered.length === 1 ? "camisa encontrada" : "camisas encontradas"}
        </p>

        <div className="mt-6">
          <ProductGrid products={filtered} />
        </div>
      </div>
    </section>
  );
}
