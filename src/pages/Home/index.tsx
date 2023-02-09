import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import { Product } from "../../@types/Product";
import bannerImage from "../../assets/section-image.svg";
import {
  BannerContent,
  HomeContainer,
  Icons,
  ImgContent,
  InfoContent,
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductsContainer,
  ProductsContent,
  ProductType,
  PurchaseInfo,
  ShoppingCartButton,
  Title,
  TitleAndSubtitleContent,
} from "./styles";

export const Home = () => {
  const [products, setproducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    const response = await fetch("http://localhost:3333/products");
    const data = await response.json();
    data && setproducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

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
                <ProductInfo key={product.id}>
                  <ProductImg src={product.image} alt="" />
                  <ProductType>{product.type}</ProductType>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                  <PurchaseInfo>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductQuantity>
                      <button>-</button>
                      <span>{product.quantity}</span>
                      <button>+</button>
                    </ProductQuantity>
                    <ShoppingCartButton>
                      <ShoppingCart />
                    </ShoppingCartButton>
                  </PurchaseInfo>
                </ProductInfo>
              );
            })}
          </ProductsContent>
        </div>
      </ProductsContainer>
    </HomeContainer>
  );
};
