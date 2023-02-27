import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductQuantityContainer } from "./styles";

export interface ProductQuantityProps {
  decrease: () => void;
  increase: () => void;
  quantity: number | undefined;
}

export const ProductQuantity = ({
  decrease,
  increase,
  quantity,
}: ProductQuantityProps) => {
  /* const {
    products,
    productsQuantity,
    setProducts,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(ProductsContext); */
  return (
    <ProductQuantityContainer>
      <button onClick={decrease}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={increase}>
        <Plus weight="bold" />
      </button>
    </ProductQuantityContainer>
  );
};
