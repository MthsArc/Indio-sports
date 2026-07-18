import { MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "#destaques", label: "Destaques" },
  { href: "#mais-vendidos", label: "Mais Vendidos" },
  { href: "#catalogo", label: "Catálogo" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ouro/20 bg-noir/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <a href="#topo" className="flex items-baseline gap-1">
          <span className="font-display text-xl italic tracking-wide text-marfim sm:text-2xl">
            Indio
          </span>
          <span className="font-cond text-xl font-semibold uppercase tracking-widest2 text-ouro-bright sm:text-2xl">
            Sports
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-semibold uppercase tracking-wide text-marfim-dim
                         transition-colors hover:text-ouro-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-ouro/50 bg-transparent
                     px-3 py-2 font-sans text-xs font-semibold uppercase tracking-wide text-marfim
                     transition-colors hover:bg-ouro hover:text-noir sm:px-4"
        >
          <MessageCircle size={16} strokeWidth={2} />
          <span className="hidden sm:inline">Fale Conosco</span>
        </a>
      </div>
    </header>
  );
}
