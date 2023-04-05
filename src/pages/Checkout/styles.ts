import styled from "styled-components";

export const CheckoutContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.8rem;
  position: relative;
  top: 6.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border: solid red 2px;
  height: auto;
  min-height: 100vh;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    top: 40px;
    padding: 10px;
    max-width: 400px;
    height: max-content;
  }

  @media (max-width: 320px) {
    top: 35px;
    padding: 10px;
    max-width: 280px;
    height: max-content;
  }
`;

export const CheckoutContent = styled.section`
  width: 85%;
  display: flex;
  gap: 32px;
  margin-top: 50px;
  height: max-content;
  border: solid green 3px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    align-items: center;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    align-items: center;
  }
`;

export const CompleteOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 90%;
  //border: solid brown 3px;
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    width: 100%;
    margin-top: 30px;
    span {
      font-size: 17px;
    }
  }

  @media (max-width: 320px) {
    width: 100%;
    margin-top: 30px;
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
  //border: solid yellow 3px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    padding: 20px;
    margin-bottom: 3px;
  }

  @media (max-width: 320px) {
    padding: 0;
    margin-bottom: 3px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 14px;
    margin-top: 10px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    margin-top: 10px;
  }
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 560px;
  padding: 0 0 30px 0;
  border-bottom: solid 5px ${(props) => props.theme.background};
  border: solid black 5px;

  @media (max-width: 1385px) {
    display: inline;
  }

  @media (max-width: 1201px) {
  }

  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    padding: 15px;
  }

  @media (max-width: 320px) {
    padding: 15px;
  }
`;

const INPUT_SIZE = {
  defaultWidth: "default-Width",
  defaultMaxWidth: "default-Max-Width",
  largeMaxWidth: "large-Max-Width",
  mediumMaxWidth: "medium-Max-Width",
  diffMaxWidth: "diff-Max-Width",
  smallestMaxWidth: "smallest-Max-Width",
  largeWidth: "large-Width",
  diffWidth: "diff-Width",
  smallestWidth: "smallest-Width",
} as const;

interface FormInputSizeProps {
  inputSize: keyof typeof INPUT_SIZE;
}

interface FormInputMaxSizeProps {
  inputMaxSize: keyof typeof INPUT_SIZE;
}
/* 
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

  @media (max-width: 1385px) {

    
    
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    min-width: 100%;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    min-width: 100%;

    &::placeholder {
      font-size: 12px;
    }
  }
`; */

export const FormInput = styled.input`
  height: 42px;

  // display: flex;
  //flex-direction: row;
  //align-items: center;
  padding: 12px;
  //gap: 4px;
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

  @media (max-width: 1385px) {
    margin-bottom: 16px;
    :first-child {
      width: calc(40% - 10px);
    }
    :nth-child(2) {
      width: 100%;
    }
    :nth-child(3) {
      width: calc(40% - 10px);
      margin-right: 10px;
    }

    :nth-child(4) {
      width: 60%;
    }

    :nth-child(5) {
      margin-right: 10px;
      width: calc(40% - 10px);
    }
    :nth-child(6) {
      margin-right: 10px;
      width: calc(45% - 10px);
    }
    :nth-child(7) {
      width: 15%;
    }
  }

  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    min-width: 100%;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    min-width: 100%;

    &::placeholder {
      font-size: 12px;
    }
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    padding-top: 10px;
    padding-bottom: 20px;
    gap: 20px;
  }

  @media (max-width: 320px) {
    padding-top: 10px;
    padding-bottom: 20px;
    gap: 20px;
  }
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
      cursor: pointer;
    }
  }

  input[type="radio"] {
    visibility: hidden;
    opacity: 0;
    width: 0.01px;
    height: 0.01px;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    label {
      padding: 10px;

      max-width: 40%;
      width: 30%;
    }

    label:nth-of-type(3) {
      //border: solid red 2px;
      margin-left: 10px;
    }
  }

  @media (max-width: 320px) {
    //border: solid red 2px;

    label {
      padding: 10px;

      max-width: 40%;
      width: 30%;
    }

    label:nth-of-type(3) {
      //border: solid red 2px;
      margin-left: 10px;
    }
  }
`;

export const Type = styled.input`
  &:focus {
    background: #ebe5f9;
    border: 1px solid #8047f8;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
`;

export const SelectedProductsContainer = styled.section`
  max-width: 448px;
  width: 80%;
  height: 100%;
  //border: solid red 2px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    width: 100%;
    margin-bottom: 70px;
  }

  @media (max-width: 320px) {
    width: 100%;
    margin-bottom: 70px;
  }
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

  //border: solid 2px blue;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 17px;
  }

  @media (max-width: 320px) {
  }
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

  // border: solid red 2px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    padding: 20px;
  }

  @media (max-width: 320px) {
    padding: 20px;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e6e5e5;
  padding-bottom: 16px;
  margin-top: 16px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
`;

export const ProductInfo = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
  //border: solid blue 2px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
    gap: 8px;
  }
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
`;

export const ProductImg = styled.img`
  display: flex;
  align-self: flex-start;
  max-width: 64px;
  width: 30%;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
    width: 25%;
    //border: solid green 2px;
  }
`;

export const ProductOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
`;

export const ProductOptions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    span {
      font-size: 12px;
    }
  }
  @media (max-width: 320px) {
    padding: 2px;
    height: 20px;
  }
`;

export const RemoveButton = styled.button`
  border: 0;
  display: flex;
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 9px;
  }

  @media (max-width: 320px) {
    font-size: 8px;
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
  }
`;

export const Values = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: clamp(10px, 1.2vw, 14px);

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const ConfirmButton = styled.button`
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
    cursor: pointer;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
  }
`;

export const EmptyShoppingCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #dbac2c;
  font-size: 30px;
  margin-top: 20px;
  font-family: "Baloo 2", cursive;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const EmptyShoppingCartContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 13vh auto;
  width: max-content;
  //height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #dbac2c;
  font-size: 30px;
  position: relative;
  padding-top: 50px;
  //background: ${(props) => props.theme["base-card"]};

  font-family: "Baloo 2", cursive;
  //border: solid red 3px;
  a {
    text-decoration: none;
    display: flex;
    gap: 6px;
    color: #dbac2c;

    align-items: center;
    justify-content: center;
    width: max-content;
    font-size: 20px;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
    width: 260px;
    a {
      font-size: 15px;
    }
  }
`;
export const Coffee1 = styled.div`
  position: absolute;
  right: 45px;
`;
export const Coffee2 = styled.div`
  position: absolute;

  top: 0;
`;
export const Star1 = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
`;
export const Star2 = styled.div`
  position: absolute;
  right: 60px;
  top: 100px;
`;
export const Coffee3 = styled.div`
  position: absolute;
  bottom: 150px;
  left: 30px;
`;
export const Coffee4 = styled.div`
  position: absolute;
  bottom: 100px;
`;
export const Star3 = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
`;
export const Star4 = styled.div`
  position: absolute;
  left: 60px;
  bottom: 120px;
`;
export const Coffee5 = styled.div`
  position: absolute;
  left: 50px;
  top: 80px;
`;
