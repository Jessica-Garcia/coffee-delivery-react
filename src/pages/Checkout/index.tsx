import { CurrencyDollar, MapPinLine } from "phosphor-react";
import {
  CheckoutContainer,
  CheckoutContent,
  CompleteOrderContainer,
  CompleteOrderContent,
  FormContainer,
  FormInput,
  PaymentTypeContainer,
  ProductsContainer,
  SelectedProductsContainer,
  SelectedProductsContent,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CompleteOrderContainer>
          <span>Complete seu pedido</span>
          <CompleteOrderContent>
            <TitleContainer>
              <Title>
                <MapPinLine color="#C47F17" />
                Endereço de Entrega
              </Title>
              <SubTitle>
                Informe o endereço onde deseja receber seu pedido
              </SubTitle>
            </TitleContainer>
            <FormContainer autoComplete="off">
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                autoComplete="off"
                placeholder="CEP"
                required
                type="text"
              />
              <FormInput
                inputSize="largeWidth"
                inputMaxSize="largeMaxWidth"
                type="text"
                required
                placeholder="Rua"
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                type="number"
                placeholder="Número"
                required
              />
              <FormInput
                inputSize="largeWidth"
                inputMaxSize="mediumMaxWidth"
                type="text"
                placeholder="complemento (opcional)"
                required={false}
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                type="text"
                placeholder="Bairro"
                required
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="diffMaxWidth"
                type="text"
                placeholder="Cidade"
                required
              />
              <FormInput
                inputSize="smallestWidth"
                inputMaxSize="smallestMaxWidth"
                type="text"
                placeholder="UF"
                required
              />
            </FormContainer>
            <PaymentTypeContainer>
              <TitleContainer>
                <Title>
                  <CurrencyDollar color="#8047F8" />
                  Pagamento
                </Title>
                <SubTitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </SubTitle>
              </TitleContainer>
            </PaymentTypeContainer>
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
