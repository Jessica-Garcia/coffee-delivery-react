import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export const ProductsQuantitySum = () => {
  const { productsQuantitySum } = useContext(ProductsContext);
  return <span>{productsQuantitySum}</span>;
};
