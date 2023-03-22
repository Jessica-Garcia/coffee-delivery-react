import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
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
  ProductQuantity,
} from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";
import { ProductsInfoProps } from "../../@types/ProductsInfoProps";

export const ProductInfos = ({
  image,
  name,
  productTypes,
  description,
  price,
  id,
}: ProductsInfoProps) => {
  const navigate = useNavigate();

  const { shoppingCart, addToShoppingCart, removeItemFromShoppingCart } =
    useContext(ProductsContext);

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
        <ProductPrice>{priceFormatter.format(price)}</ProductPrice>

        <ProductQuantity>
          <button onClick={handleRemoveItemFromShoppingCart}>
            <Minus weight="bold" />
          </button>
          <span>{loadItemQuantityInShoppingCart(id)}</span>
          <button onClick={handleAddToShoppingCart}>
            <Plus weight="bold" />
          </button>
        </ProductQuantity>

        <ShoppingCartButton
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <ShoppingCart weight="fill" size={20} />
        </ShoppingCartButton>
      </PurchaseInfo>
    </ProductInfo>
  );
};
