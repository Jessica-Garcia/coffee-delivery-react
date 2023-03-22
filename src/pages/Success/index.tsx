import {
  BannerContainer,
  ImgContainer,
  OderDetails,
  OrderInfoContainer,
  OrderInfoContent,
  Subtitle,
  SuccessContainer,
  Title,
  TitleAndSubtitleContainer,
} from "./styles";

import ImageSuccessPage from "../../assets/image-success-page.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export const Success = () => {
  const { newOrder } = useContext(ProductsContext);
  return (
    <SuccessContainer>
      <BannerContainer>
        <OrderInfoContainer>
          <TitleAndSubtitleContainer>
            <Title>
              <span>Uhu! Pedido confirmado</span>
            </Title>
            <Subtitle>
              <span> Agora é só aguardar que logo o café chegará até você</span>
            </Subtitle>
          </TitleAndSubtitleContainer>
          <OrderInfoContent>
            <OderDetails iconsColor="purple">
              <div>
                <MapPin weight="fill" />
              </div>
              <span>
                Entrega em{" "}
                <strong>
                  {newOrder?.street}, {newOrder?.number}{" "}
                </strong>
                {newOrder?.neighborhood} - {newOrder?.city}, {newOrder?.uf}
              </span>
            </OderDetails>
            <OderDetails iconsColor="yellow">
              <div>
                <Timer weight="fill" />
              </div>
              <span>
                Previsão de entrega <strong> 20 min - 30 min</strong>
              </span>
            </OderDetails>
            <OderDetails iconsColor="yellowDark">
              <div>
                <CurrencyDollar weight="fill" />
              </div>
              <span>
                Pagamento na entrega <strong>{newOrder?.paymentType}</strong>
              </span>
            </OderDetails>
          </OrderInfoContent>
        </OrderInfoContainer>
        <ImgContainer>
          <img src={ImageSuccessPage} alt="" />
        </ImgContainer>
      </BannerContainer>
    </SuccessContainer>
  );
};
