export type ProductCategory = "clube" | "selecao" | "retro";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  sizes: string[];
  image: string;
  featured?: boolean;
  bestSeller?: boolean;
  bestSellerRank?: number;
  needsReview?: boolean;
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  clube: "Times",
  selecao: "Seleções",
  retro: "Retrô",
};
