import { MessageCircle, Instagram, ShieldCheck, Truck } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline-gold bg-noir pb-28 pt-16 sm:pb-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl italic text-marfim">Indio</span>
              <span className="font-cond text-xl font-semibold uppercase tracking-widest2 text-ouro-bright">
                Sports
              </span>
            </div>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-marfim-dim">
              Camisas de futebol tailandesas premium — times, seleções e clássicos retrô,
              com atendimento pessoal via WhatsApp.
            </p>
            <div className="mt-5 flex items-center gap-2 text-marfim-dim">
              <ShieldCheck size={16} className="text-ouro-bright" />
              <span className="font-sans text-xs">Qualidade verificada peça a peça</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-marfim-dim">
              <Truck size={16} className="text-ouro-bright" />
              <span className="font-sans text-xs">Envio para todo o Brasil</span>
            </div>
          </div>

          <div>
            <span className="eyebrow">Categorias</span>
            <ul className="mt-4 space-y-2 font-sans text-sm text-marfim-dim">
              <li>
                <a href="#catalogo" className="transition-colors hover:text-ouro-bright">
                  Times
                </a>
              </li>
              <li>
                <a href="#catalogo" className="transition-colors hover:text-ouro-bright">
                  Seleções
                </a>
              </li>
              <li>
                <a href="#catalogo" className="transition-colors hover:text-ouro-bright">
                  Retrô
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="eyebrow">Atendimento</span>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={buildGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-marfim-dim transition-colors hover:text-ouro-bright"
              >
                <MessageCircle size={16} />
                Falar via WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2 font-sans text-sm text-marfim-dim transition-colors hover:text-ouro-bright"
              >
                <Instagram size={16} />
                @indiosports
              </a>
            </div>
            <p className="mt-5 font-sans text-xs text-marfim-dim/70">
              Vendas exclusivamente pelo WhatsApp. Sem checkout online.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-carvao-border pt-6 font-sans text-xs text-marfim-dim/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} INDIO SPORTS. Todos os direitos reservados.</span>
          <span>Produto não oficial · réplica tailandesa premium</span>
        </div>
      </div>
    </footer>
  );
}
