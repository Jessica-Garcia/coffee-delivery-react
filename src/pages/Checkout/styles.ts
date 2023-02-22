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
  border: solid red 5px;
`;

export const CheckoutContent = styled.section`
  width: 85%;
  height: 100%;
  display: flex;
  border: solid blue 5px;
  justify-content: space-between;
  gap: 3.5rem;
  /* position: absolute;
  top: 0;
  bottom: 0; */
`;

export const CompleteOrderContainer = styled.section`
  border: solid lightblue 5px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 100%;

  max-width: 640px;
  height: 100%;
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
  border: solid yellow 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 12px;
  width: 100%;
  max-width: 640px;
  height: max-content;
  background: #f3f2f2;
  border-radius: 6px;
`;

export const TitleContainer = styled.div`
  border: solid black 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Title = styled.div`
  border: solid darkgreen 5px;
  max-width: 530px;
  width: 100%;
  height: 21px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  font-size: clamp(12px, 1.45vw, 16px);

  line-height: 130%;
  gap: 8px;
  display: flex;
  align-items: center;

  color: #403937;
`;

export const SubTitle = styled.div`
  border: solid darkgoldenrod 5px;

  max-width: 530px;
  height: 21px;
  margin-bottom: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(10px, 1.2vw, 14px);
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #574f4d;
`;

export const FormContainer = styled.form`
  border: solid blueviolet 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  max-width: 560px;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 200px, 276px));
  grid-template-rows: repeat(4, 42px);
  gap: 16px;
  width: 100%; */
  // 200px, 348px, 276px, 60px
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
  border: solid red 2px;

  width: ${(props) => props.theme[INPUT_SIZE[props.inputSize]]}%;
  max-width: ${(props) => props.theme[INPUT_SIZE[props.inputMaxSize]]}px;
  height: 42px;
`;

export const PaymentTypeContainer = styled.div`
  border: solid blue 5px;
`;

export const SelectedProductsContainer = styled.section`
  border: solid pink 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: flex-end;
  gap: 24px;
  max-width: 448px;
  width: 80%;
  height: 498px;
  background: #f3f2f2;
  border-radius: 6px 44px;
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
export const SelectedProductsContent = styled.article`
  border: solid green 5px;
`;

export const ProductsContainer = styled.div`
  border: solid blueviolet 5px;
`;

export const TotalContainer = styled.div`
  border: solid yellowgreen 5px;
`;
