import styled from "styled-components";

export const SuccessContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  //height: 143.3125rem;
  height: 100vh;

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
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    top: 5.55rem;
  }

  @media (max-width: 421px) {
    top: 35px;
    padding: 10px;
    max-width: 100%;
    //min-height: 100vh;
  }

  @media (max-width: 320px) {
    /* max-width: 280px;
    max-height: 1000px; */
  }
`;

export const BannerContainer = styled.section`
  display: flex;
  gap: 100px;
  margin-top: 60px;

  //border: solid purple 3px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 780px) {
    width: 100%;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  @media (max-width: 415px) {
  }

  @media (max-width: 320px) {
    /* flex-direction: column;
    gap: 20px;
    align-items: center; */
  }
`;

export const OrderInfoContainer = styled.article`
  width: 60%;
  //border: solid blue 2px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 780px) {
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 583px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 95%;
  }
`;

export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  //border: solid red 2px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 780px) {
    margin-top: 20px;
    width: 90%;
    text-align: center;
  }

  @media (max-width: 583px) {
    width: 100%;
    //border: solid red 2px;
  }

  @media (max-width: 320px) {
  }
`;

export const Title = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: clamp(22px, 1.5vw, 32px);
  line-height: 130%;
  color: #c47f17;
  margin: 0;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 583px) {
    font-size: 22px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 130%;
  color: #403937;
  font-stretch: 100;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 583px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 13.5px;
    margin-top: 5px;
  }
`;

export const OrderInfoContent = styled.div`
  border: solid 1px ${(props) => props.theme.purple};
  margin-top: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  max-width: 426px;
  min-height: 270px;
  border-radius: 6px 36px;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 780px) {
    width: 90%;
    align-items: center;
    height: 332px;
    justify-content: center;
  }

  @media (max-width: 583px) {
    padding: 0;
    width: 90%;
  }

  @media (max-width: 320px) {
    padding: 20px;
    min-height: max-content;
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
export const OderDetails = styled.div<IconsProps>`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 12px;
  max-width: 354px;
  min-height: 42px;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(12px, 1.1vw, 16px);
    line-height: 130%;
    color: #574f4d;
    strong {
      display: block;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    max-width: 32px;
    max-height: 32px;
    font-size: clamp(12px, 1.1vw, 16px);
    color: white;
    background: ${(props) => props.theme[ICONS_COLORS[props.iconsColor]]};
    border-radius: 1000px;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 780px) {
    //border: solid red 2px;
    width: 90%;
    span {
      strong {
        display: inline-block;
      }
    }
  }

  @media (max-width: 583px) {
    width: 100%;
    display: flex;
    justify-content: center;
    span {
      font-size: 13px;
    }
  }

  @media (max-width: 320px) {
    span {
      strong {
        display: inline;
      }
    }
  }
`;
export const ImgContainer = styled.article`
  width: 50%;
  display: flex;
  align-items: flex-end;
  //margin-bottom: -10px;
  img {
    //max-width: 492px;
    width: 100%;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 780px) {
    //border: solid yellow 2px;
    width: 80%;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }

  @media (max-width: 583px) {
    width: 90%;
    img {
      margin-top: 5px;
      width: 80%;
    }
  }

  @media (max-width: 320px) {
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
    }
  }
`;
