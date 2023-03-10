import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ReactNode, useCallback, useContext, useState } from "react";
import {
  ProductsContext,
  ProductsProvider,
} from "../../contexts/ProductsContext";
import {
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductPrice,
  PurchaseInfo,
  ShoppingCartButton,
  ProductType,
  ProductQuantity,
} from "./styles";
import { Product, Type } from "../../@types/Product";
// import { ProductQuantityContainer } from "../ProductQuantity/styles";

interface ProductsInfoProps {
  image: string;
  name: string;
  productTypes: Type[];
  description: string;
  price: number;
  id: number;
  // quantity: number;
}

export const ProductInfos = ({
  image,
  name,
  productTypes,
  description,
  price,
  id,
}: ProductsInfoProps) => {
  const {
    shoppingCart,
    itemQuantity,
    setItemQuantity,
    addToShoppingCart,
    removeItemFromShoppingCart,
  } = useContext(ProductsContext);

  const handleAddToShoppingCart = () => {
    addToShoppingCart(id);
  };

  const loadItemQuantityInShoppingCart = (id: number) => {
    const itemShoppingCart = shoppingCart.find((item) => item.id === id);
    if (itemShoppingCart) {
      return itemShoppingCart.quantity;
    }
    return 0;
  };

  const handleRemoveItemFromShoppingCart = () => {
    removeItemFromShoppingCart(id);
  };

  return (
    <ProductInfo>
      <ProductImg src={image} alt="" />
      <div>
        {productTypes.map((type) => {
          return <ProductType key={type.id}>{type.name}</ProductType>;
        })}
      </div>
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <PurchaseInfo>
        <ProductPrice>{price}</ProductPrice>

        <ProductQuantity>
          <button onClick={handleRemoveItemFromShoppingCart}>
            <Minus weight="bold" />
          </button>
          <span>{loadItemQuantityInShoppingCart(id)}</span>
          <button onClick={handleAddToShoppingCart}>
            <Plus weight="bold" />
          </button>
        </ProductQuantity>

        <ShoppingCartButton href="/checkout">
          <ShoppingCart weight="fill" size={20} />
        </ShoppingCartButton>
      </PurchaseInfo>
    </ProductInfo>
  );
};
