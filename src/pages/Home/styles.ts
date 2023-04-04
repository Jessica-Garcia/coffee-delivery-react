import styled from "styled-components";

export const HomeContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  height: max-content;
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
  //border: solid 2px black;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
    //border: solid blue 1px;

    padding: 5px;
    //height: 90px;
    max-width: 100%;
    margin: 0 auto;
    align-items: center;
  }

  @media (max-width: 769px) {
    top: 90px;
    width: 100%;
    padding: 10px;
    margin-bottom: 100px;
    padding-bottom: 200px;
    //min-height: max-content;
  }

  @media (max-width: 415px) {
    top: 80px;
    max-width: 100%;
    padding: 10px;
    margin-bottom: 100px;
    padding-bottom: 200px;
    //min-height: max-content;
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
    //border: solid blue 2px;
  }
  @media (max-width: 1025px) {
    // solid green 2px;
    width: 90%;
    padding: 0 5px;
    gap: 10px;
    //max-height: 30rem;
  }

  @media (max-width: 769px) {
    //flex-direction: column;
    width: 100%;
    padding: 0 15px;
    //border: solid red 2px;
    padding-bottom: 30px;
    //align-items: center;
    //justify-content: center;
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
  margin-top: 4.75rem;
  max-height: 22.5rem;
  height: max-content;
  position: absolute;
  right: 0;
  bottom: 0;
  //border: solid black 2px;
  img {
    max-width: 29.75rem;
    width: 100%;
  }

  @media (max-width: 1428px) {
    //border: solid red 2px;
    max-width: 35%;
    right: 0 img {
      //width: 100%;
    }
  }
  @media (max-width: 1025px) {
    position: static;
    margin: 35px 0;
    height: 100%;
    img {
      width: 100%;
      margin-top: 10px;
    }
  }

  @media (max-width: 769px) {
    //position: static;

    //bottom: 250px;
    //margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: sandybrown solid 2px;
    height: max-content;
    //flex-basis: 400px;
    width: 60%;
    max-width: 248px;
    min-width: 180px;
    position: relative;
    top: 10px;

    img {
      width: 100%;
      position: relative;
      //height: 200px;
      // max-width: 45%;
    }
  }

  @media (max-width: 550px) {
    top: -10px;
    bottom: 28px;
    position: absolute;
    margin: auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    img {
      width: 65%;
      max-width: 280px;
    }
  }

  @media (max-width: 320px) {
    //top: 0;
    //margin: 5px 5px;
    bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      width: 66%;
    }
  }
`;

export const TitleAndSubtitleContent = styled.article`
  //border: solid 2px gray;
  div {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    max-width: 36.75rem;
    max-height: 7.75rem;
    height: 100%;
    font-size: clamp(1.4rem, 3.2vw, 3rem);
    display: flex;
    margin-top: 4.875rem;
    line-height: 130%;
  }
  span {
    margin-top: 1rem;
    display: block;
    max-width: 36.75rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    width: 100%;
    max-height: 3.25rem;
    height: 100%;
    font-size: clamp(0.85rem, 1.4vw, 1.25rem);
  }
  @media (max-width: 1401px) {
    div {
      margin-top: 1rem;
    }
  }

  @media (max-width: 1025px) {
    //border: solid blueviolet 2px;
    //height: 15rem;
    div {
      font-size: 29px;
      position: relative;
      margin-top: 5rem;
      top: -75px;
    }
    span {
      font-size: 18px;
      position: relative;
      top: -75px;
    }
  }

  @media (max-width: 759px) {
    width: 100%;
    max-width: 395px;
    min-width: 320px;
    div {
      font-size: 25px;
      position: relative;
      top: -75px;
    }
    span {
      font-size: 16px;
      position: relative;
      top: -75px;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
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
      font-size: 19.5px;
      position: relative;
      top: -90px;
    }
    span {
      font-size: 14px;
      position: relative;
      top: -90px;
    }
  }

  @media (max-width: 268px) {
    div {
      font-size: 17px;
    }
    span {
      font-size: 13px;
    }
  }
`;

export const InfoContent = styled.article`
  font-family: "Roboto", sans-serif;
  margin-top: 3.125rem;
  font-weight: 400;
  max-width: 36rem;
  min-height: 5.25rem;
  //border: solid green 2px;
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
    //border: solid red 2px;
    margin-top: 0;
  }

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    //margin-top: 10rem;
    position: absolute;

    width: 100%;
    max-width: 368px;
    top: 220px;
    div {
      width: 100%;
      //border: solid yellow 2px;
      justify-content: space-between;
      gap: 10px;
      padding: 0;
      span {
        //border: solid purple 2px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        font-size: 13px;
      }
    }

    @media (max-width: 550px) {
      margin-top: 11rem;
      position: static;
      width: 100%;
      max-width: 100%;
      div {
        span {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: flex-start;
          font-size: 14px;
        }
      }
    }

    @media (max-width: 320px) {
      margin-top: 7rem;
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
    //border: solid blue 2px;
    width: 100%;
    padding: 3px 25px;
    margin-top: 5rem;
  }

  @media (max-width: 610px) {
    margin-top: 6.5rem;
  }

  @media (max-width: 550px) {
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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    font-size: 20px;
    margin-left: 20px;
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
    font-size: 17px;
  }
`;
export const ProductsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  gap: 1.8rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 5rem;

  @media (max-width: 1400px) {
  }

  @media (max-width: 914px) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 3rem;
    column-gap: 1rem;
  }

  @media (max-width: 645px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
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
