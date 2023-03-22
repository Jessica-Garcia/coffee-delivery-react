import { Type } from "./ProductType";

export interface ProductsInfoProps {
  image: string;
  name: string;
  productTypes: Type[];
  description: string;
  price: number;
  id: number;
}
