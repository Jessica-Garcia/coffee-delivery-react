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
import { useContext, useState } from "react";

import expresso from "../../assets/products/expresso.svg";
import { ProductsContext } from "../../contexts/ProductsContext";

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
  Totalbutton,
  TotalContainer,
  Type,
  Values,
} from "./styles";

export const Checkout = () => {
  const { shoppingCart, addToShoppingCart, removeFromShoppingCart } =
    useContext(ProductsContext);
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
                  <CreditCard size={16} color="#8047F8" /> CARTÃO CRÉDITO
                </Type>
                <Type>
                  <Bank size={16} color="#8047F8" /> CARTÃO DÉBITO
                </Type>
                <Type>
                  <Money size={16} color="#8047F8" /> DINHEIRO
                </Type>
              </PaymentTypes>
            </PaymentTypeContainer>
          </CompleteOrderContent>
        </CompleteOrderContainer>
        <SelectedProductsContainer>
          <SectionType>Cafés selecionados</SectionType>
          <SelectedProductsContent>
            <ProductsContainer>
              {shoppingCart.length < 1 ? (
                <h1>Carrinho Vazio</h1>
              ) : (
                shoppingCart.map((item) => {
                  return (
                    <Product key={item.id}>
                      <ProductInfo>
                        <ProductImg src={item.product.image} />
                        <ProductOptionsContainer>
                          <ProductName>{item.product.name}</ProductName>
                          <ProductOptions>
                            <ProductQuantity>
                              <button
                                onClick={() => removeFromShoppingCart(item.id)}
                              >
                                <Minus size={10} weight="bold" />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => addToShoppingCart(item.id)}
                              >
                                <Plus size={10} weight="bold" />
                              </button>
                            </ProductQuantity>
                            <RemoveButton>
                              <Trash size={16} color="#8047f8" />
                              REMOVER
                            </RemoveButton>
                          </ProductOptions>
                        </ProductOptionsContainer>
                      </ProductInfo>

                      <ProductPrice>
                        <span>R$ {item.product.price}</span>
                      </ProductPrice>
                    </Product>
                  );
                })
              )}
            </ProductsContainer>
            <TotalContainer>
              <Values>
                <span>Total de itens</span>
                <span>{0}</span>
              </Values>
              <Values>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </Values>

              <Values>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </Values>
            </TotalContainer>
            <Totalbutton href="/success">Confirmar Pedido</Totalbutton>
          </SelectedProductsContent>
        </SelectedProductsContainer>
      </CheckoutContent>
    </CheckoutContainer>
  );
};
