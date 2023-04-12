import {
  ArrowFatLeft,
  Bank,
  Coffee,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  ShoppingCartSimple,
  Star,
  Trash,
} from "phosphor-react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { priceFormatter } from "../../utils/formatter";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CheckoutContainer,
  CheckoutContent,
  Coffee1,
  Coffee2,
  Coffee3,
  Coffee4,
  Coffee5,
  CompleteOrderContainer,
  CompleteOrderContent,
  ConfirmButton,
  EmptyShoppingCart,
  EmptyShoppingCartContainer,
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
  Star1,
  Star2,
  Star3,
  Star4,
  SubTitle,
  Title,
  TitleContainer,
  TotalContainer,
  Values,
} from "./styles";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

const checkoutFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentType: z.string(),
});

type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>;

export const Checkout = () => {
  const navigate = useNavigate();

  const {
    shoppingCart,
    clearShoppingCart,
    addToShoppingCart,
    removeItemFromShoppingCart,
    removeAllItemsFromShoppingCart,
    getSubTotal,
    createNewOrder,
    setItemQuantity,
  } = useContext(ProductsContext);

  const { register, handleSubmit, reset } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const deliveryValue = 10;

  const handleCreateNewOrder = (data: CheckoutFormInputs) => {
    const {
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      uf,
      paymentType,
    } = data;

    createNewOrder({
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      uf,
      paymentType,
    });
    reset();
    clearShoppingCart();
    setItemQuantity(0);
    navigate("/success");
  };

  return (
    <CheckoutContainer>
      <CheckoutContent>
        {shoppingCart.length >= 1 ? (
          <>
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
                    // inputSize="defaultWidth"
                    // inputMaxSize="defaultMaxWidth"
                    placeholder="CEP"
                    required
                    type="text"
                    autoComplete="off"
                    {...register("cep")}
                  />
                  <FormInput
                    // inputSize="largeWidth"
                    // inputMaxSize="largeMaxWidth"
                    type="text"
                    required
                    placeholder="Rua"
                    autoComplete="off"
                    {...register("street")}
                  />
                  <FormInput
                    // inputSize="defaultWidth"
                    // inputMaxSize="defaultMaxWidth"
                    type="number"
                    placeholder="Número"
                    required
                    autoComplete="off"
                    {...register("number", { valueAsNumber: true })}
                  />
                  <FormInput
                    // inputSize="largeWidth"
                    // inputMaxSize="mediumMaxWidth"
                    type="text"
                    placeholder="complemento (opcional)"
                    required={false}
                    autoComplete="off"
                    {...register("complement")}
                  />
                  <FormInput
                    // inputSize="defaultWidth"
                    // inputMaxSize="defaultMaxWidth"
                    type="text"
                    placeholder="Bairro"
                    required
                    autoComplete="off"
                    {...register("neighborhood")}
                  />
                  <FormInput
                    // inputSize="defaultWidth"
                    // inputMaxSize="diffMaxWidth"
                    type="text"
                    placeholder="Cidade"
                    required
                    autoComplete="off"
                    {...register("city")}
                  />
                  <FormInput
                    // inputSize="smallestWidth"
                    // inputMaxSize="smallestMaxWidth"
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
                    <input
                      form="checkout"
                      type="radio"
                      id="credit"
                      value="Cartão de crédito"
                      {...register("paymentType")}
                      defaultChecked
                    />
                    <label htmlFor="credit">
                      <div>
                        <CreditCard size={16} color="#8047F8" />
                      </div>
                      <div>Cartão de crédito</div>
                    </label>

                    <input
                      form="checkout"
                      type="radio"
                      id="debit"
                      value="Cartão de débito"
                      {...register("paymentType")}
                    />
                    <label htmlFor="debit">
                      <div>
                        <Bank size={16} color="#8047F8" />
                      </div>
                      <div>Cartão de Dédito</div>
                    </label>
                    <input
                      form="checkout"
                      type="radio"
                      id="money"
                      value="Dinheiro"
                      {...register("paymentType")}
                    />
                    <label htmlFor="money">
                      <div>
                        <Money size={16} color="#8047F8" />
                      </div>
                      <div>Dinheiro</div>
                    </label>
                  </PaymentTypes>
                </PaymentTypeContainer>
              </CompleteOrderContent>
            </CompleteOrderContainer>
            <SelectedProductsContainer>
              <SectionType>Cafés selecionados</SectionType>

              <SelectedProductsContent>
                <ProductsContainer>
                  {shoppingCart.map((item) => {
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
                  })}
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
                <ConfirmButton type="submit" form="checkout">
                  Confirmar Pedido
                </ConfirmButton>
              </SelectedProductsContent>
            </SelectedProductsContainer>
          </>
        ) : (
          <EmptyShoppingCartContainer>
            <Coffee2>
              <Coffee size={12} color={"#8047F8"} />
            </Coffee2>
            <Star1>
              <Star size={12} color={"#8047F8"} />
            </Star1>
            <Coffee3>
              <Coffee size={12} color={"#8047F8"} />
            </Coffee3>
            <Star3>
              <Star size={12} color={"#8047F8"} />
            </Star3>
            <ShoppingCartSimple size={150} />
            <Star2>
              <Star size={12} color={"#8047F8"} />
            </Star2>
            <Coffee1>
              <Coffee size={12} color={"#8047F8"} />
            </Coffee1>
            <Coffee5>
              <Coffee size={12} color={"#8047F8"} />
            </Coffee5>
            <Star4>
              <Star size={12} color={"#8047F8"} />
            </Star4>
            <Coffee4>
              <Coffee size={12} color={"#8047F8"} />
            </Coffee4>
            <EmptyShoppingCart>
              <p>Seu carrinho está vazio!</p>
            </EmptyShoppingCart>
            <NavLink to="/">
              <ArrowFatLeft /> Ir para página de produtos
            </NavLink>
          </EmptyShoppingCartContainer>
        )}
      </CheckoutContent>
    </CheckoutContainer>
  );
};
