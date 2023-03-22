import { Product } from "./Product";

export interface ShoppingCartItem {
  id: number;
  product: Product;
  quantity: number;
}
