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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    top: 90px;
    max-width: 100%;
    padding: 10px;
    margin-bottom: 100px;
    padding-bottom: 200px;
    min-height: max-content;
  }

  @media (max-width: 415px) {
    top: 80px;
    max-width: 100%;
    padding: 10px;
    margin-bottom: 100px;
    padding-bottom: 200px;
    min-height: max-content;
  }

  @media (max-width: 320px) {
    top: 80px;
    max-width: 100%;
    padding: 10px;
  }
`;

export const BannerContent = styled.section`
  width: 85%;
  display: flex;
  max-height: 34rem;
  gap: 3.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  position: relative;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    padding: 0 30px;
    border: solid red 2px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 415px) {
    width: 100%;
    padding: 0 5px;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 5px;
  }
`;

export const ImgContent = styled.article`
  margin-top: 5.75rem;
  max-height: 22.5rem;
  height: max-content;
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
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    top: 20px;
    margin: auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: sandybrown solid 2px;
    width: 100%;

    img {
      width: 270px;
      height: 200px;
      // max-width: 45%;
    }
  }

  @media (max-width: 415px) {
    top: 10px;
    // margin: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      max-width: 70%;
    }
  }

  @media (max-width: 320px) {
    //top: 0;
    //margin: 5px 5px;
    bottom: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      max-width: 70%;
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
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    div {
      font-size: 24px;
      position: relative;
      top: -75px;
    }
    span {
      font-size: 17px;
      position: relative;
      top: -75px;
    }
  }

  @media (max-width: 415px) {
    div {
      font-size: 24px;
      position: relative;
      top: -90px;
    }
    span {
      font-size: 17px;
      position: relative;
      top: -90px;
    }
  }

  @media (max-width: 320px) {
    div {
      font-size: 17px;
      position: relative;
      top: -90px;
    }
    span {
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    margin-top: 13rem;
    div {
      span {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        font-size: 15px;
      }
    }

    @media (max-width: 415px) {
      margin-top: 9rem;
      div {
        span {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: flex-start;
          font-size: 15px;
        }
      }
    }

    @media (max-width: 320px) {
      margin-top: 8rem;
      div {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.05rem;
        span {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: flex-start;
          font-size: 13px;
        }
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
  //border: solid red 3px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
  }
`;

export const ProductsContainer = styled.section`
  width: 85%;
  margin-top: 5rem;
  gap: 3.5rem;
  div {
    margin: 0 auto;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    margin: 1rem 0;
    width: 100%;
    padding: 5px;
    margin-bottom: 70px;
    // border: solid red 2px;
  }

  @media (max-width: 320px) {
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

  @media (min-width: 415px) {
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
