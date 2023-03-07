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
  const { itemQuantity, addToShoppingCart, removeFromShoppingCart } =
    useContext(ProductsContext);

  const handleAddToShoppingCart = () => {
    addToShoppingCart(id);
  };

  const handleRemoveFromShoppingCart = () => {
    removeFromShoppingCart(id);
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
          <button onClick={handleRemoveFromShoppingCart}>
            <Minus weight="bold" />
          </button>
          <span>{itemQuantity}</span>
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
