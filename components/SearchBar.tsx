"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SearchBar({ value, onChange, className }: SearchBarProps) {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <Search
        size={18}
        strokeWidth={2}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-marfim-dim"
      />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por time, seleção ou modelo..."
        aria-label="Buscar produtos"
        className="w-full rounded-full border border-carvao-border bg-carvao py-3 pl-11 pr-4
                   font-sans text-sm text-marfim placeholder:text-marfim-dim/70
                   focus:border-ouro/60"
      />
    </div>
  );
}
