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
  id: number;
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
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductsContext = createContext({} as ProductsContextType);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [itemQuantity, setItemQuantity] = useState<number>(0);

  const addToShoppingCart = async (id: number) => {
    const productItem = products.find((item) => item.id === id);
    const productInShoppingCart = shoppingCart.find(
      (item) => item.id === productItem?.id
    );
    if (!productInShoppingCart) {
      await api.post<ShoppingCartItem>("cart", {
        id: productItem?.id,
        product: { ...productItem },
        quantity: 1,
      });
    } else {
      await api.put<ShoppingCartItem>(`cart/${productInShoppingCart.id}`, {
        ...productInShoppingCart,
        quantity: (productInShoppingCart.quantity += 1),
      });
    }

    loadCartProducts();
  };

  /* const updateProductQuantity = async (idProductInShoppingCart: number) => {

  }; */

  const removeFromShoppingCart = (id: number) => {
    // const itemForRemove = shoppingCart.find((item) => item === id);
  };

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
        setItemQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
