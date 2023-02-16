import { MapPinLine } from "phosphor-react";
import {
  CheckoutContainer,
  CheckoutContent,
  CompleteOrderContainer,
  CompleteOrderContent,
  FormContainer,
  PaymentTypeContainer,
  ProductsContainer,
  SelectedProductsContainer,
  SelectedProductsContent,
  SubTitleForm,
  TitleForm,
  TitleFormContainer,
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CompleteOrderContainer>
          <span>Complete seu pedido</span>
          <CompleteOrderContent>
            <TitleFormContainer>
              <TitleForm>
                <MapPinLine color="#C47F17" />
                Endereço de Entrega
              </TitleForm>
              <SubTitleForm>
                Informe o endereço onde deseja receber seu pedido
              </SubTitleForm>
            </TitleFormContainer>
            <FormContainer></FormContainer>
            <PaymentTypeContainer></PaymentTypeContainer>
          </CompleteOrderContent>
        </CompleteOrderContainer>
        <SelectedProductsContainer>
          <span>Cafés selecionados</span>
          <SelectedProductsContent>
            <ProductsContainer></ProductsContainer>
          </SelectedProductsContent>
        </SelectedProductsContainer>
      </CheckoutContent>
    </CheckoutContainer>
  );
};
