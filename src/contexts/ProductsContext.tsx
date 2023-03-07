import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Product } from "../@types/Product";
import { api } from "../lib/axios";

interface ShoppingCartItem {
  product: Product;
  quantity: number;
}
interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: Product[];
  shoppingCart: ShoppingCartItem[];
  itemQuantity: number;
  addToShoppingCart: (id: number) => void;
  removeFromShoppingCart: (id: number) => void;
  clearShoppingCart: () => void;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [itemQuantity, setItemQuantity] = useState<number>(0);

  const addToShoppingCart = async (id: number) => {
    const productItem = products.find((item) => item.id === id);
    const itemCart = shoppingCart.find((item) => item.product === productItem);

    if (!itemCart) {
      const { data } = await api.post<ShoppingCartItem>("cart", {
        product: { ...productItem },
        quantity: 1,
      });
    } else {
      const { data } = await api.put<ShoppingCartItem>(`cart/${id}`, {
        product: { ...productItem },
        quantity: (itemCart.quantity += 1),
      });
    }
  };

  const removeFromShoppingCart = (id: number) => {};

  const clearShoppingCart = () => {};

  const loadProducts = useCallback(async () => {
    const { data } = await api.get<Product[]>("products");
    data && setProducts(data);
  }, [setProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const loadCartProducts = useCallback(async () => {
    const { data } = await api.get<ShoppingCartItem[]>("cart");
    data && setShoppingCart(data);
  }, [setShoppingCart]);

  useEffect(() => {
    loadCartProducts();
  }, [loadCartProducts]);

  return (
    <ProductsContext.Provider
      value={{
        shoppingCart,
        itemQuantity,
        products,
        addToShoppingCart,
        removeFromShoppingCart,
        clearShoppingCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
