import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { defaultTheme } from "../../styles/theme/default";
import {
  ButtonCartContainer,
  ButtonLocationContainer,
  HeaderContainer,
  LocationAndCartContainer,
} from "./styles";
export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>
      <LocationAndCartContainer>
        <ButtonLocationContainer>
          <MapPin
            weight="fill"
            width={18}
            height={18}
            color={defaultTheme.purple}
          />
          Porto Alegre, RS
        </ButtonLocationContainer>
        <ButtonCartContainer>
          <ShoppingCart
            weight="fill"
            width={18}
            height={18}
            color={defaultTheme["yellow-dark"]}
          />
        </ButtonCartContainer>
      </LocationAndCartContainer>
    </HeaderContainer>
  );
};
