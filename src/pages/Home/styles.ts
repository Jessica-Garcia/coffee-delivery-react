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

  //border: solid red 2px;

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    top: 70px;
    max-width: 280px;
    padding: 10px;
  }
`;

export const BannerContent = styled.section`
  width: 85%;
  display: flex;
  max-height: 34rem;
  gap: 3.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  //border: solid black 2px;
  position: relative;

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 5px;
    //margin: 0;
  }
`;

export const ImgContent = styled.article`
  margin-top: 5.75rem;
  max-height: 22.5rem;
  height: max-content;
  //border: solid blue 2px;
  position: absolute;
  right: 0;
  bottom: 0;
  img {
    max-width: 29.75rem;
    width: 100%;
  }

  @media (min-width: 1428px) {
    img {
      width: 100%;
    }
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    top: 100px;
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 50%;
    }
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
  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    div {
      // border: solid green 2px;
      font-size: 17px;
      position: relative;
      top: -90px;
      //position: absolute;
    }
    span {
      //border: solid green 2px;
      font-size: 13px;
      position: relative;
      top: -90px;
    }
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

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    //border: solid greenyellow 2px;
    margin-top: 3rem;
    div {
      display: flex;
      flex-direction: column;
      //gap: 0.5rem;
      margin-bottom: 1.05rem;
      span {
        display: flex;
        //max-width: 18.375rem;
        width: 100%;
        //min-height: 2rem;
        align-items: center;
        //gap: 0.5rem;
        justify-content: flex-start;
        font-size: 13px;
        //border: solid red 2px;
      }
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
  margin-top: 5rem;
  gap: 3.5rem;
  div {
    margin: 0 auto;
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
    //border: solid red 2px;
    margin: 1rem 0;
    width: 100%;
    padding: 5px;
    margin-bottom: 70px;
  }
`;

export const Title = styled.span`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: clamp(1rem, 2.3vw, 2rem);

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    font-size: 17px;
  }
`;
export const ProductsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 256px));
  grid-auto-rows: 310px;
  gap: 1.5rem;
  padding-top: 2rem;

  @media (min-width: 1201px) {
  }
  @media (min-width: 1025px) {
  }

  @media (min-width: 769px) {
  }

  @media (min-width: 401px) {
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
