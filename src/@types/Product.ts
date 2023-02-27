export interface Type {
  id: number;
  name: string;
}
export interface Product {
  id?: number;
  image: string;
  name: string;
  productTypes: Type[];
  description: string;
  price: number;
  quantity?: number;
}
