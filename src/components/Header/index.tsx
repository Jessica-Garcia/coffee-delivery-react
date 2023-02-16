import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { defaultTheme } from "../../styles/theme/default";
import {
  ButtonCartContainer,
  ButtonLocationContainer,
  HeaderContainer,
  HeaderContent,
  LocationAndCartContainer,
} from "./styles";
export const Header = () => {
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
        <span>3</span>
      </HeaderContent>
    </HeaderContainer>
  );
};
