import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext } from "react";
import bannerImage from "../../assets/section-image.svg";
import { ProductInfos } from "../../components/Product";
import { ProductsContext } from "../../contexts/ProductsContext";

import {
  BannerContent,
  HomeContainer,
  Icons,
  ImgContent,
  InfoContent,
  ProductsContainer,
  ProductsContent,
  Title,
  TitleAndSubtitleContent,
} from "./styles";

export const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <HomeContainer>
      <BannerContent>
        <article>
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
        </article>
        <ImgContent>
          <img src={bannerImage} alt="" />
        </ImgContent>
      </BannerContent>
      <ProductsContainer>
        <Title>Nossos cafés</Title>
        <div>
          <ProductsContent>
            {products.map((product) => {
              return (
                <ProductInfos
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  productTypes={product.productTypes}
                  id={product.id}
                />
              );
            })}
          </ProductsContent>
        </div>
      </ProductsContainer>
    </HomeContainer>
  );
};
