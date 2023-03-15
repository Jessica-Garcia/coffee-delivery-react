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
import { ProductsContext } from "../../contexts/ProductsContext";
import { priceFormatter } from "../../utils/formatter";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const checkoutFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
});

type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>;

export const Checkout = () => {
  const navigate = useNavigate();

  const {
    shoppingCart,
    setShoppingCart,
    addToShoppingCart,
    removeItemFromShoppingCart,
    removeAllItemsFromShoppingCart,
    getSubTotal,
    createNewOrder,
  } = useContext(ProductsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const deliveryValue = 10;

  const handleCreateNewOrder = (data: CheckoutFormInputs) => {
    const { cep, street, number, complement, neighborhood, city, uf } = data;

    createNewOrder({
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      uf,
    });
    reset();
    setShoppingCart([]);
    navigate("/success");
  };

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
            <FormContainer
              id="checkout"
              autoComplete="off"
              onSubmit={handleSubmit(handleCreateNewOrder)}
            >
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                placeholder="CEP"
                required
                type="text"
                autoComplete="off"
                {...register("cep")}
              />
              <FormInput
                inputSize="largeWidth"
                inputMaxSize="largeMaxWidth"
                type="text"
                required
                placeholder="Rua"
                autoComplete="off"
                {...register("street")}
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                type="number"
                placeholder="Número"
                required
                autoComplete="off"
                {...register("number", { valueAsNumber: true })}
              />
              <FormInput
                inputSize="largeWidth"
                inputMaxSize="mediumMaxWidth"
                type="text"
                placeholder="complemento (opcional)"
                required={false}
                autoComplete="off"
                {...register("complement")}
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="defaultMaxWidth"
                type="text"
                placeholder="Bairro"
                required
                autoComplete="off"
                {...register("neighborhood")}
              />
              <FormInput
                inputSize="defaultWidth"
                inputMaxSize="diffMaxWidth"
                type="text"
                placeholder="Cidade"
                required
                autoComplete="off"
                {...register("city")}
              />
              <FormInput
                inputSize="smallestWidth"
                inputMaxSize="smallestMaxWidth"
                type="text"
                placeholder="UF"
                required
                autoComplete="off"
                {...register("uf")}
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
                  <CreditCard size={16} color="#8047F8" />
                  CARTÃO CRÉDITO
                </Type>
                <Type>
                  <Bank size={16} color="#8047F8" />
                  CARTÃO DÉBITO
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
                                onClick={() =>
                                  removeItemFromShoppingCart(item.id)
                                }
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
                            <RemoveButton
                              onClick={() =>
                                removeAllItemsFromShoppingCart(item)
                              }
                            >
                              <Trash size={16} color="#8047f8" />
                              REMOVER
                            </RemoveButton>
                          </ProductOptions>
                        </ProductOptionsContainer>
                      </ProductInfo>

                      <ProductPrice>
                        <span>
                          {priceFormatter.format(
                            item.product.price * item.quantity
                          )}
                        </span>
                      </ProductPrice>
                    </Product>
                  );
                })
              )}
            </ProductsContainer>
            <TotalContainer>
              <Values>
                <span>Subtotal</span>
                <span>{priceFormatter.format(getSubTotal())}</span>
              </Values>
              <Values>
                <span>Entrega</span>
                <span>{priceFormatter.format(deliveryValue)}</span>
              </Values>

              <Values>
                <strong>Total</strong>
                <strong>
                  {priceFormatter.format(getSubTotal() + deliveryValue)}
                </strong>
              </Values>
            </TotalContainer>
            <Totalbutton type="submit" form="checkout">
              Confirmar Pedido
            </Totalbutton>
          </SelectedProductsContent>
        </SelectedProductsContainer>
      </CheckoutContent>
    </CheckoutContainer>
  );
};
