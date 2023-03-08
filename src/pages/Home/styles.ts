import styled from "styled-components";

export const HomeContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  min-height: max-content;
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

export const BannerContent = styled.section`
  width: 85%;
  display: flex;
  max-height: 34rem;
  gap: 3.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ImgContent = styled.article`
  margin-top: 5.75rem;
  max-height: 22.5rem;
  height: max-content;

  img {
    max-width: 29.75rem;
    width: 100%;
  }
`;

export const TitleAndSubtitleContent = styled.article`
  div {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    max-width: 36.75rem;
    max-height: 7.75rem;
    height: 100%;
    font-size: clamp(1.4rem, 3.2vw, 3rem);
    display: flex;
    margin-top: 5.875rem;
    line-height: 130%;
  }
  span {
    margin-top: 1rem;
    display: block;
    max-width: 36.75rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    max-width: 36.75rem;
    width: 100%;
    max-height: 3.25rem;
    height: 100%;
    font-size: clamp(0.85rem, 1.4vw, 1.25rem);
  }
`;

export const InfoContent = styled.article`
  font-family: "Roboto", sans-serif;
  margin-top: 3.125rem;
  font-weight: 400;
  max-width: 36rem;
  min-height: 5.25rem;
  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
    span {
      display: flex;
      max-width: 18.375rem;
      width: 100%;
      min-height: 2rem;
      align-items: center;
      gap: 0.75rem;
      justify-content: flex-start;
      font-size: clamp(0.73rem, 1.2vw, 0.9rem);
    }
  }
`;

const ICONS_COLORS = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  base: "base-text",
  purple: "purple",
} as const;

interface IconsProps {
  iconsColor: keyof typeof ICONS_COLORS;
}

export const Icons = styled.h6<IconsProps>`
  background: ${(props) => props.theme[ICONS_COLORS[props.iconsColor]]};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2rem;
  max-height: 2rem;
  padding: 0.5rem;
  font-size: clamp(0.7rem, 1vw, 1rem);
  border-radius: 50%;
  flex-grow: 0;
`;

export const ProductsContainer = styled.section`
  width: 85%;
  //  border: solid red 2px;
  margin-top: 5rem;
  gap: 3.5rem;
  div {
    margin: 0 auto;
  }
`;

export const Title = styled.span`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: clamp(1rem, 2.3vw, 2rem);
  // border: solid black 5px;
`;
export const ProductsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 256px));
  grid-auto-rows: 310px;
  gap: 1.5rem;
  padding-top: 2rem;

  //border: solid blue 5px;
`;

/* export const ProductInfo = styled.div`
  display: flex;
  //border: solid green 5px;
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
`;
export const PurchaseInfo = styled.div`
  border-top: solid transparent 10px;

  max-width: 208px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const ProductImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;
  width: 40%;
  //border: solid magenta 5px;
`;
export const ProductType = styled.span`
  //border: solid darkgoldenrod 5px;
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
`;
export const ProductName = styled.span`
  //border: solid brown 5px;
  font-size: clamp(0.95rem, 1.3vw, 1.25rem);
  font-family: "Baloo 2", cursive;
  font-weight: 700;
`;
export const ProductDescription = styled.span`
  //border: solid yellow 5px;
  text-align: center;
  font-size: clamp(0.78rem, 1.2vw, 0.975rem);
  line-height: 130%;
  margin: 0 1.25rem;
  color: ${(props) => props.theme["base-label"]};
`;

export const ProductPrice = styled.span`
  max-width: 70px;
  max-height: 41px;

  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: clamp(1.2rem, 1.2vw, 1.35rem);
  line-height: 130%;
  max-width: 67px;
  text-align: right;

  color: ${(props) => props.theme["base-text"]};
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
`;
export const ShoppingCartButton = styled.a`
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
  &:hover {
    background: ${(props) => props.theme.purple};
    transition: background 0.5s;
    cursor: pointer;
  }
`; */
