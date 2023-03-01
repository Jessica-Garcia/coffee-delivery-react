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
} from "./styles";
import { ProductQuantity } from "../ProductQuantity";
import { Product, Type } from "../../@types/Product";
import { ProductQuantityContainer } from "../ProductQuantity/styles";

interface ProductsInfoProps {
  image: string;
  name: string;
  productTypes: Type[];
  description: string;
  price: number;
  /* decrease: () => void;
  increase: () => void;
  quantity: number | undefined; */
}

export const ProductInfos = ({
  image,
  name,
  productTypes,
  description,
  price,
}: /* quantity,
  decrease,
  increase, */
ProductsInfoProps) => {
  /* const { productsQuantity, increaseQuantity, decreaseQuantity } =
    useContext(ProductsContext); */

  // const [productsQuantity, setProductsQuantity] = useState<number>(0);

  /* const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id);
  }; */

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
        <ProductsProvider>
          <ProductQuantity />
        </ProductsProvider>

        {/*  <ProductQuantityContainer>
          <button onClick={decrease}>
            <Minus weight="bold" />
          </button>
          <span>{quantity}</span>
          <button onClick={increase}>
            <Plus weight="bold" />
          </button>
        </ProductQuantityContainer> */}

        <ShoppingCartButton href="/checkout">
          <ShoppingCart weight="fill" size={20} />
        </ShoppingCartButton>
      </PurchaseInfo>
    </ProductInfo>
  );
};
