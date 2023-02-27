import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Product } from "../@types/Product";
import { api } from "../lib/axios";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  productsQuantity: number | undefined;
  products: Product[];
  product: Product;
  // productInfos: Product | undefined;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({} as Product);

  const [productsQuantity, setProductsQuantity] = useState<number>(0);

  const increaseQuantity = useCallback(() => {
    setProductsQuantity((currentValue) => currentValue + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    productsQuantity > 0 &&
      setProductsQuantity((currentValue) => currentValue - 1);
  }, [productsQuantity]);

  const loadProducts = useCallback(async () => {
    const { data } = await api.get("products");
    data && setProducts(data);
  }, [setProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        productsQuantity,
        setProducts,
        setProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
