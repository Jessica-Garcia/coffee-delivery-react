import styled from "styled-components";

export const CheckoutContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.8rem;
  position: absolute;
  top: 6.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const CheckoutContent = styled.section`
  width: 85%;
  height: 100%;
  display: flex;
  gap: 32px;
  margin-top: 50px;
  height: max-content;
`;

export const CompleteOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 90%;

  max-width: 640px;
  min-height: 100%;
  span {
    font-family: "Baloo 2", cursive;
    width: 170px;
    height: 23px;

    font-style: normal;
    font-weight: 700;
    font-size: clamp(14px, 1.5vw, 18px);

    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CompleteOrderContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  background: #f3f2f2;
  gap: 12px;
  width: 100%;
  max-width: 640px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Title = styled.div`
  max-width: 530px;
  width: 100%;
  height: max-content;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  font-size: clamp(12px, 1.3vw, 16px);

  line-height: 130%;
  gap: 8px;
  display: flex;
  align-items: center;

  color: #403937;
`;

export const SubTitle = styled.div`
  max-width: 530px;
  height: max-content;
  margin-bottom: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(10px, 1.2vw, 14px);
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #574f4d;
  padding-left: 24px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 560px;
  padding-bottom: 30px;
  border-bottom: solid 5px ${(props) => props.theme.background};
`;

const INPUT_SIZE = {
  defaultWidth: "default-Width",
  defaultMaxWidth: "default-Max-Width",
  largeMaxWidth: "large-Max-Width",
  mediumMaxWidth: "medium-Max-Width",
  diffMaxWidth: "diff-Max-Width",
  smallestMaxWidth: "smallest-Max-Width",
  largeWidth: "large-Width",
  // mediumWidth: "medium-Width",
  diffWidth: "diff-Width",
  smallestWidth: "smallest-Width",
} as const;

interface FormInputSizeProps {
  inputSize: keyof typeof INPUT_SIZE;
}

interface FormInputMaxSizeProps {
  inputMaxSize: keyof typeof INPUT_SIZE;
}

export const FormInput = styled.input<
  FormInputSizeProps & FormInputMaxSizeProps
>`
  width: ${(props) => props.theme[INPUT_SIZE[props.inputSize]]}%;
  max-width: ${(props) => props.theme[INPUT_SIZE[props.inputMaxSize]]}px;
  height: 42px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  background: #eeeded;

  border: 1px solid #e6e5e5;
  border-radius: 4px;
  font-size: clamp(10px, 1.2vw, 14px);

  &:focus {
    background: #eeeded;
    border: 1px solid #c47f17;
  }

  &::placeholder {
    font-size: clamp(10px, 1.1vw, 14px);
  }
`;

export const PaymentTypeContainer = styled.div`
  padding-top: 30px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 640px;
  min-height: 110px;
  width: 100%;
  background: #f3f2f2;
  border-radius: 6px;
`;

export const PaymentTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: max-content;

  input:checked + label {
    background: #ebe5f9;
    border: 1px solid #8047f8;
  }

  label {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 5px;
    max-width: 178.67px;
    width: 30%;
    flex-grow: 1;
    max-height: 51px;
    height: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(9px, 0.57vw, 10px);
    line-height: 160%;
    text-transform: uppercase;
    color: #574f4d;
    background: #e6e5e5;
    border-radius: 6px;

    &:hover {
      background: #d7d5d5;
      transition: background 0.3s;
    }
  }

  input[type="radio"] {
    visibility: hidden;
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
  }
`;

export const Type = styled.input`
  &:focus {
    background: #ebe5f9;
    border: 1px solid #8047f8;
  }
`;

export const SelectedProductsContainer = styled.section`
  max-width: 448px;
  width: 80%;
  height: 100%;
`;
export const SectionType = styled.span`
  font-family: "Baloo 2", cursive;
  width: 170px;
  height: 23px;
  font-style: normal;
  font-weight: 700;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 130%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SelectedProductsContent = styled.article`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  align-items: flex-start;
  justify-self: flex-end;
  gap: 24px;
  height: max-content;
  background: #f3f2f2;
  border-radius: 6px 44px;
  padding: 40px;
  padding-top: 28px;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  border: solid red 2px;
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 16px;
  margin-top: 16px;
`;

export const ProductInfo = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 20%;
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: clamp(12px, 1.3vw, 16px);
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color: #574f4d;
  }
`;

export const ProductImg = styled.img`
  display: flex;
  align-self: flex-start;
  max-width: 64px;
  width: 30%;
`;

export const ProductOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const ProductOptions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProductName = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(10px, 1.2vw, 16px);
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #403937;
`;

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 3px;
  max-width: 72px;
  height: 32px;
  background: #e6e5e5;
  border-radius: 6px;

  button {
    border: 0;
    background: #e6e5e5;
    color: #8047f8;
    padding: 1px 3px;
    &:hover {
      background: #d7d5d5;
      cursor: pointer;
    }
  }

  span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: clamp(10px, 1.05vw, 14px);
    line-height: 130%;
    text-align: center;
    color: #272221;
  }
`;

export const RemoveButton = styled.button`
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  font-size: clamp(8px, 1vw, 10px);
  max-width: 91px;
  max-height: 32px;
  background: #e6e5e5;
  border-radius: 6px;
  width: 100%;

  &:hover {
    background: #d7d5d5;
    cursor: pointer;
  }
`;
export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
`;

export const Values = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: clamp(10px, 1.2vw, 14px);
`;

export const Totalbutton = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  max-width: 387px;
  width: 100%;
  height: 46px;
  background: #dbac2c;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: clamp(10px, 1.2vw, 14px);
  line-height: 160%;
  text-transform: uppercase;
  color: #ffffff;
  font-stretch: 100;

  text-decoration: none;

  &:hover {
    background: #c47f17;
  }
`;

export const EmptyShoppingCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  color: #dbac2c;
  font-size: 30px;
  font-family: "Baloo 2", cursive;
`;
