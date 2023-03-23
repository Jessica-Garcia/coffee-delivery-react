import { ShoppingCart, MapPin, Cursor } from "phosphor-react";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ProductsContext } from "../../contexts/ProductsContext";
import { defaultTheme } from "../../styles/theme/default";
import {
  ButtonCartContainer,
  ButtonLocationContainer,
  HeaderContainer,
  HeaderContent,
  LocationAndCartContainer,
} from "./styles";
export const Header = () => {
  const { amountItemsInHeaderCart } = useContext(ProductsContext);
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <LocationAndCartContainer>
          <ButtonLocationContainer>
            <MapPin weight="fill" color={defaultTheme.purple} />
            Porto Alegre, RS
          </ButtonLocationContainer>
          <ButtonCartContainer
            disabled={!amountItemsInHeaderCart()}
            onClick={() => navigate("/checkout")}
          >
            <div>
              <ShoppingCart weight="fill" color={defaultTheme["yellow-dark"]} />
            </div>
          </ButtonCartContainer>
        </LocationAndCartContainer>
        <span>{amountItemsInHeaderCart()}</span>
      </HeaderContent>
    </HeaderContainer>
  );
};
