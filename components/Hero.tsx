import { MessageCircle, ShieldCheck } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-ouro/20 bg-noir bg-noir-vignette"
    >
      {/* Signature: an oversized ghost jersey number, referencing the number 10 shirt */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none
                   font-cond text-[38vw] font-bold leading-none text-transparent sm:-right-10
                   sm:text-[26vw]"
        style={{ WebkitTextStroke: "1.5px rgba(184,146,61,0.25)" }}
      >
        10
      </span>

      <div className="container-x relative flex min-h-[78vh] flex-col justify-center py-20 sm:min-h-[85vh]">
        <span className="eyebrow mb-5 animate-fadeUp">Camisas Tailandesas Premium</span>

        <h1
          className="max-w-2xl animate-fadeUp font-display text-4xl italic leading-[1.05] text-marfim
                     sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          Vista a camisa
          <br />
          do seu <span className="text-ouro-bright">time.</span>
        </h1>

        <p
          className="mt-6 max-w-md animate-fadeUp font-sans text-sm leading-relaxed text-marfim-dim sm:text-base"
          style={{ animationDelay: "0.1s" }}
        >
          Qualidade tailandesa, acabamento profissional e curadoria dos maiores clubes,
          seleções e clássicos retrô do futebol mundial. Atendimento exclusivo, rápido
          e pessoal — direto pelo WhatsApp.
        </p>

        <div
          className="mt-10 flex flex-col gap-4 animate-fadeUp sm:flex-row sm:items-center"
          style={{ animationDelay: "0.15s" }}
        >
          <a
            href="#catalogo"
            className="rounded-sm bg-gold-fade px-8 py-4 text-center font-sans text-xs
                       font-bold uppercase tracking-widest2 text-noir shadow-gold
                       transition-transform hover:scale-[1.02]"
          >
            Ver Catálogo
          </a>
          <a
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm border border-ouro/40
                       px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest2
                       text-marfim transition-colors hover:border-ouro hover:text-ouro-bright"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>

        <div
          className="mt-14 flex items-center gap-2 text-marfim-dim animate-fadeUp"
          style={{ animationDelay: "0.2s" }}
        >
          <ShieldCheck size={16} className="text-ouro-bright" />
          <span className="font-sans text-xs">
            Peças selecionadas · qualidade verificada antes do envio
          </span>
        </div>
      </div>
    </section>
  );
}
