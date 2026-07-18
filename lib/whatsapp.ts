import { Product } from "@/types/product";

// Store WhatsApp number in international format, digits only.
export const WHATSAPP_NUMBER = "5534998683464";

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function buildProductWhatsAppLink(product: Product): string {
  const message =
    `Olá! Tenho interesse na camisa *${product.name}* ` +
    `(${formatPrice(product.price)}).\n` +
    `Poderia me passar mais informações sobre tamanhos disponíveis e formas de pagamento?`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildGeneralWhatsAppLink(): string {
  const message =
    "Olá! Vim pelo site da INDIO SPORTS e gostaria de saber mais sobre as camisas disponíveis.";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
