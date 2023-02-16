export interface Type {
  id: number;
  type: string;
}
export interface Product {
  id: number;
  image: string;
  name: string;
  productTypes: Type[];
  description: String;
  price: number;
  quantity: number;
}
