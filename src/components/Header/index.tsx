import { ShoppingCart, MapPin } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
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
  const { productsQuantity } = useContext(ProductsContext);
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
          <ButtonCartContainer>
            <div>
              <NavLink to="/checkout">
                <ShoppingCart
                  weight="fill"
                  color={defaultTheme["yellow-dark"]}
                />
              </NavLink>
            </div>
          </ButtonCartContainer>
        </LocationAndCartContainer>
        <span>{productsQuantity}</span>
      </HeaderContent>
    </HeaderContainer>
  );
};
