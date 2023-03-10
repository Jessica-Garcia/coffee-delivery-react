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
  removeItemFromShoppingCart: (id: number) => void;
  amountItemsInHeaderCart: () => number;
  removeAllItemsFromShoppingCart: (item: ShoppingCartItem) => void;
  getSubTotal: () => number;
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

  const removeItemFromShoppingCart = async (id: number) => {
    const itemCartForRemove = shoppingCart.find((item) => item.id === id);

    if (!itemCartForRemove) {
      return;
    }

    if (itemCartForRemove && itemCartForRemove.quantity > 1) {
      await api.put<ShoppingCartItem>(`cart/${itemCartForRemove.id}`, {
        ...itemCartForRemove,
        quantity: (itemCartForRemove.quantity -= 1),
      });
    } else {
      await api.delete<ShoppingCartItem>(`cart/${itemCartForRemove?.id}`);
    }
    loadCartProducts();
  };

  const removeAllItemsFromShoppingCart = async (item: ShoppingCartItem) => {
    await api.delete<ShoppingCartItem>(`cart/${item.id}`);
    loadCartProducts();
  };

  const amountItemsInHeaderCart = () => {
    const amountItems = shoppingCart.reduce((acc, itemCart) => {
      return (acc += itemCart.quantity);
    }, 0);
    return amountItems;
  };

  const getSubTotal = () => {
    const subTotal = shoppingCart.reduce((acc, itemCart) => {
      return (acc += itemCart.quantity * itemCart.product.price);
    }, 0);
    return subTotal;
  };

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
        removeItemFromShoppingCart,
        removeAllItemsFromShoppingCart,
        amountItemsInHeaderCart,
        setItemQuantity,
        getSubTotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
