import { Minus, Plus } from "phosphor-react";
import { useCallback, useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductQuantityContainer } from "./styles";

export interface ProductQuantityProps {
  decrease: () => void;
  increase: () => void;
  quantity: number | undefined;
}

export const ProductQuantity = (/* {
  decrease,
  increase,
  quantity,
}: ProductQuantityProps */) => {
  const {
    productsQuantity,
    increaseQuantity,
    decreaseQuantity,
    increaseQuantitySum,
    decreaseQuantitySum,
    setProductsQuantitySum,
    productsQuantitySum,
  } = useContext(ProductsContext);

  return (
    <ProductQuantityContainer>
      <button onClick={decreaseQuantity}>
        <Minus weight="bold" />
      </button>
      <span>{productsQuantity}</span>
      <button onClick={increaseQuantity}>
        <Plus weight="bold" />
      </button>
    </ProductQuantityContainer>
  );
};
