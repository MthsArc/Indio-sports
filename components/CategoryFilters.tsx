"use client";

import { ProductCategory, CATEGORY_LABELS } from "@/types/product";
import { cn } from "@/lib/utils";

interface CategoryFiltersProps {
  active: ProductCategory | "todos";
  onChange: (value: ProductCategory | "todos") => void;
  counts: Record<string, number>;
}

const OPTIONS: Array<ProductCategory | "todos"> = ["todos", "clube", "selecao", "retro"];

export default function CategoryFilters({ active, onChange, counts }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {OPTIONS.map((option) => {
        const label = option === "todos" ? "Todos" : CATEGORY_LABELS[option];
        const isActive = active === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide transition-colors",
              isActive
                ? "border-ouro bg-ouro text-noir"
                : "border-carvao-border bg-carvao text-marfim-dim hover:border-ouro/50 hover:text-marfim"
            )}
          >
            {label}
            <span className="ml-1.5 opacity-70">({counts[option] ?? 0})</span>
          </button>
        );
      })}
    </div>
  );
}
