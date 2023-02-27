import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ReactNode, useCallback, useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import {
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductPrice,
  PurchaseInfo,
  ShoppingCartButton,
  ProductType,
} from "./styles";
import { ProductQuantity } from "../ProductQuantity";
import { Product, Type } from "../../@types/Product";

interface ProductsInfoProps {
  image: string;
  name: string;
  productTypes: Type[];
  description: string;
  price: number;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
  quantity: number | undefined;
}

export const ProductInfos = ({
  image,
  name,
  productTypes,
  description,
  price,
  quantity,
  decreaseQuantity,
  increaseQuantity,
}: ProductsInfoProps) => {
  /* const { productsQuantity, increaseQuantity, decreaseQuantity } =
    useContext(ProductsContext);

   const [productsQuantity, setProductsQuantity] = useState<number>(0);

  const handleIncreaseQuantity = () => {
    increaseQuantity();
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity();
  };
 */
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

        <ProductQuantity />

        <ShoppingCartButton href="/checkout">
          <ShoppingCart weight="fill" size={20} />
        </ShoppingCartButton>
      </PurchaseInfo>
    </ProductInfo>
  );
};
