import styled from "styled-components";

export const ProductInfo = styled.div`
  display: flex;
  background: ${(props) => props.theme["base-card"]};
  max-width: 16rem;
  width: 25vw;
  max-height: 18.375rem;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  gap: 1rem;
  div {
    display: flex;
    gap: 0.3rem;
  }

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    width: 90%;
    height: max-content;
    //border: solid green 2px;
    padding-bottom: 10px;
  }
`;
export const PurchaseInfo = styled.div`
  border-top: solid transparent 10px;
  max-width: 208px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.3rem;
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    //    border: solid red 2px;
    font-size: 14px;
  }
`;

export const ProductImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  width: 40%;

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    width: 30%;
  }
`;
export const ProductType = styled.span`
  background: ${(props) => props.theme["yellow-light"]};
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  max-height: 1.3125rem;
  max-width: 5.0625rem;
  font-size: clamp(0.6rem, 1vw, 0.725rem);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["yellow-dark"]};

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (min-width: 320px) {
  }
`;
export const ProductName = styled.span`
  font-size: clamp(0.95rem, 1.3vw, 1.25rem);
  font-family: "Baloo 2", cursive;
  font-weight: 700;

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (min-width: 320px) {
  }
`;
export const ProductDescription = styled.span`
  text-align: center;
  font-size: clamp(0.78rem, 1.2vw, 0.975rem);
  line-height: 130%;
  margin: 0 1.25rem;
  color: ${(props) => props.theme["base-label"]};

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (min-width: 320px) {
  }
`;

export const ProductPrice = styled.span`
  max-width: 70px;
  max-height: 41px;

  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: clamp(1.1rem, 1.15vw, 1.3rem);
  line-height: 130%;
  max-width: 67px;
  text-align: right;

  color: ${(props) => props.theme["base-text"]};

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
export const ProductQuantity = styled.span`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 72px;
  max-height: 38px;
  border-radius: 6px;
  gap: 4px;
  color: ${(props) => props.theme["base-title"]};
  button {
    border: 0;
    background: ${(props) => props.theme["base-button"]};
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
      transition: color 0.5s;
      cursor: pointer;
    }
  }

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    max-height: 28px;
    //border: solid red 2px;
  }
`;
export const ShoppingCartButton = styled.button`
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  border: 0;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.purple};
    transition: background 0.5s;
    cursor: pointer;
  }

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    height: 26px;
    width: 26px;
    font-size: 14px;
  }
`;
