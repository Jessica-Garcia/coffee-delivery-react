import { ShoppingCart, MapPin } from "phosphor-react";
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
          <img src={logo} alt="" />
        </div>
        <LocationAndCartContainer>
          <ButtonLocationContainer>
            <MapPin weight="fill" color={defaultTheme.purple} />
            Porto Alegre, RS
          </ButtonLocationContainer>
          <ButtonCartContainer>
            <div>
              <ShoppingCart weight="fill" color={defaultTheme["yellow-dark"]} />
            </div>
          </ButtonCartContainer>
        </LocationAndCartContainer>
        <span>3</span>
      </HeaderContent>
    </HeaderContainer>
  );
};
