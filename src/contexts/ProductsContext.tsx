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
  productsQuantitySum: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  increaseQuantitySum: () => void;
  decreaseQuantitySum: () => void;
  setProductsQuantitySum: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsQuantity, setProductsQuantity] = useState<number>(0);
  const [productsQuantitySum, setProductsQuantitySum] = useState<number>(0);

  const increaseQuantity = () => {
    setProductsQuantity((currentValue) => currentValue + 1);
  };

  const decreaseQuantity = () => {
    productsQuantity > 0 &&
      setProductsQuantity((currentValue) => currentValue - 1);
  };

  const increaseQuantitySum = () => {
    /* setProductsQuantitySum(); */
    console.log(productsQuantitySum);
  };

  const decreaseQuantitySum = () => {
    /*  productsQuantitySum > 0 && setProductsQuantitySum(); */
    console.log(productsQuantitySum);
  };

  return (
    <ProductsContext.Provider
      value={{
        productsQuantity,
        productsQuantitySum,
        increaseQuantity,
        decreaseQuantity,
        increaseQuantitySum,
        decreaseQuantitySum,
        setProductsQuantitySum,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
