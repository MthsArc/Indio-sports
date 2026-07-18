import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a INDIO SPORTS no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 animate-pulseRing items-center
                 justify-center rounded-full border-2 border-ouro-bright bg-[#25D366]
                 shadow-card transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
        className="text-noir"
        aria-hidden
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.65 4.53 1.78 6.4L4 29l7.79-1.74A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.83 17.06c-.29.81-1.44 1.5-2.36 1.7-.63.13-1.45.24-4.22-.9-3.54-1.46-5.82-5.02-6-5.26-.17-.24-1.43-1.9-1.43-3.63s.9-2.57 1.22-2.92c.29-.31.63-.39.84-.39.21 0 .42.002.6.01.19.01.45-.07.7.54.29.71.98 2.44 1.06 2.62.08.18.14.4.03.64-.12.24-.18.39-.35.6-.18.21-.37.47-.53.63-.18.18-.36.37-.16.72.21.35.92 1.52 1.98 2.46 1.36 1.21 2.5 1.59 2.85 1.77.35.18.55.15.76-.09.21-.24.9-1.05 1.14-1.41.24-.35.47-.29.79-.17.32.12 2.03.96 2.38 1.13.35.18.58.26.66.41.09.15.09.85-.2 1.66Z" />
      </svg>
    </a>
  );
}
