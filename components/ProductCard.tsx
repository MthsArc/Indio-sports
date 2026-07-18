import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Product, CATEGORY_LABELS } from "@/types/product";
import { buildProductWhatsAppLink, formatPrice } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  rankBadge?: number;
}

export default function ProductCard({ product, rankBadge }: ProductCardProps) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-sm border border-carvao-border
                 bg-carvao transition-all duration-300 hover:-translate-y-1 hover:border-ouro/60
                 hover:shadow-card"
    >
      {rankBadge && (
        <div
          className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center
                     rounded-full border border-ouro/50 bg-noir/90 font-cond text-sm
                     font-semibold text-ouro-bright"
          aria-label={`Nº ${rankBadge} mais vendido`}
        >
          {String(rankBadge).padStart(2, "0")}
        </div>
      )}

      {/* Authenticity corner seal — the boutique signature */}
      <div
        className="pointer-events-none absolute -right-10 top-4 z-10 w-36 rotate-45
                   bg-gold-fade py-1 text-center font-cond text-[10px] font-semibold
                   uppercase tracking-widest2 text-noir shadow-md"
      >
        Premium
      </div>

      <div className="relative aspect-square w-full bg-marfim">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="eyebrow">{CATEGORY_LABELS[product.category]}</span>
        <h3 className="font-sans text-sm font-semibold leading-snug text-marfim">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-cond text-xl font-semibold text-ouro-bright">
            {formatPrice(product.price)}
          </span>
          <span className="text-[11px] text-marfim-dim">
            {product.sizes[0]}–{product.sizes[product.sizes.length - 1]}
          </span>
        </div>

        <a
          href={buildProductWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-sm border
                     border-ouro/50 bg-noir py-2.5 text-xs font-semibold uppercase
                     tracking-wide text-marfim transition-colors hover:bg-ouro
                     hover:text-noir"
        >
          <MessageCircle size={16} strokeWidth={2} />
          Comprar via WhatsApp
        </a>
      </div>
    </article>
  );
}
