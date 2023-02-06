import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import bannerImage from "../../assets/section-image.svg";
import {
  BannerContent,
  HomeContainer,
  Icons,
  ImgContent,
  InfoContent,
  TextContent,
  TitleAndSubtitleContent,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <BannerContent>
        <TextContent>
          <TitleAndSubtitleContent>
            <div>Encontre o café perfeito para qualquer hora do dia</div>
            <span>
              Com o Cofee Delivery você recebe seu café onde estiver, a qualquer
              hora
            </span>
          </TitleAndSubtitleContent>
          <InfoContent>
            <div>
              <span>
                <Icons iconsColor="yellowDark">
                  <ShoppingCart weight="fill" />
                </Icons>
                Compra simples e segura
              </span>
              <span>
                <Icons iconsColor="yellow">
                  <Package weight="fill" />
                </Icons>
                Embalagem mantém o café intacto
              </span>
            </div>
            <div>
              <span>
                <Icons iconsColor="base">
                  <Timer weight="fill" />
                </Icons>
                Entrega rápida e rastreada
              </span>
              <span>
                <Icons iconsColor="purple">
                  <Coffee weight="fill" />
                </Icons>
                O café chega fresquinho
              </span>
            </div>
          </InfoContent>
        </TextContent>
        <ImgContent>
          <img src={bannerImage} alt="" />
        </ImgContent>
      </BannerContent>
    </HomeContainer>
  );
};
