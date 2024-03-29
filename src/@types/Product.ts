import { Type } from "./ProductType";
export interface Product {
  id: number;
  image: string;
  name: string;
  productTypes: Type[];
  description: string;
  price: number;
}
