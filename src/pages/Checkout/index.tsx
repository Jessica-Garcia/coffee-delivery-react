import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import expresso from "../../assets/products/expresso.svg";

import {
  CheckoutContainer,
  CheckoutContent,
  CompleteOrderContainer,
  CompleteOrderContent,
  FormContainer,
  FormInput,
  PaymentTypeContainer,
  PaymentTypes,
  Product,
  ProductImg,
  ProductInfo,
  ProductName,
  ProductOptions,
  ProductOptionsContainer,
  ProductPrice,
  ProductQuantity,
  ProductsContainer,
  RemoveButton,
  SectionType,
  SelectedProductsContainer,
  SelectedProductsContent,
  SubTitle,
  Title,
  TitleContainer,
  TotalContainer,
  Type,
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <CompleteOrderContainer>
          <SectionType>Complete seu pedido</SectionType>
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
                placeholder="CEP"
                required
                type="text"
                autoComplete="off"
              />
              <FormInput
                inputSize="largeWidth"
                inputMaxSize="largeMaxWidth"
                type="text"
                required
                placeholder="Rua"
                autoComplete="off"
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                type="number"
                placeholder="Número"
                required
                autoComplete="off"
              />
              <FormInput
                inputSize="largeWidth"
                inputMaxSize="mediumMaxWidth"
                type="text"
                placeholder="complemento (opcional)"
                required={false}
                autoComplete="off"
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                type="text"
                placeholder="Bairro"
                required
                autoComplete="off"
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="diffMaxWidth"
                type="text"
                placeholder="Cidade"
                required
                autoComplete="off"
              />
              <FormInput
                inputSize="smallestWidth"
                inputMaxSize="smallestMaxWidth"
                type="text"
                placeholder="UF"
                required
                autoComplete="off"
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
              <PaymentTypes>
                <Type>
                  <CreditCard size={16} /> CARTÃO CRÉDITO
                </Type>
                <Type>
                  <Bank size={16} /> CARTÃO DÉBITO
                </Type>
                <Type>
                  <Money size={16} /> DINHEIRO
                </Type>
              </PaymentTypes>
            </PaymentTypeContainer>
          </CompleteOrderContent>
        </CompleteOrderContainer>
        <SelectedProductsContainer>
          <SectionType>Cafés selecionados</SectionType>
          <SelectedProductsContent>
            <ProductsContainer>
              <Product>
                <ProductInfo>
                  <ProductImg src={expresso} />
                  <ProductOptionsContainer>
                    <ProductName>Expresso Tradicional</ProductName>
                    <ProductOptions>
                      <ProductQuantity>
                        <button>
                          <Minus weight="bold" />
                        </button>
                        <span>1</span>
                        <button>
                          <Plus weight="bold" />
                        </button>
                      </ProductQuantity>
                      <RemoveButton>
                        <Trash />
                        REMOVER
                      </RemoveButton>
                    </ProductOptions>
                  </ProductOptionsContainer>
                </ProductInfo>
                <ProductPrice>R$ 9,90</ProductPrice>
              </Product>
              <Product>
                <ProductInfo>
                  <ProductImg src={expresso} />
                  <ProductOptionsContainer>
                    <ProductName>Expresso Tradicional</ProductName>
                    <ProductOptions>
                      <ProductQuantity>
                        <button>
                          <Minus weight="bold" />
                        </button>
                        <span>1</span>
                        <button>
                          <Plus weight="bold" />
                        </button>
                      </ProductQuantity>
                      <RemoveButton>
                        <Trash />
                        REMOVER
                      </RemoveButton>
                    </ProductOptions>
                  </ProductOptionsContainer>
                </ProductInfo>
                <ProductPrice>R$ 9,90</ProductPrice>
              </Product>
            </ProductsContainer>
            <TotalContainer></TotalContainer>
          </SelectedProductsContent>
        </SelectedProductsContainer>
      </CheckoutContent>
    </CheckoutContainer>
  );
};
