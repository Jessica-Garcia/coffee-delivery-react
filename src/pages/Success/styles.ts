import styled from "styled-components";

export const SuccessContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  height: 143.3125rem;
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

export const BannerContainer = styled.section`
  display: flex;
  gap: 100px;
  margin-top: 60px;
`;

export const OrderInfoContainer = styled.article`
  width: 60%;
`;

export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: clamp(22px, 1.5vw, 32px);
  line-height: 130%;
  color: #c47f17;
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
`;
export const ImgContainer = styled.article`
  width: 50%;
  display: flex;
  align-items: flex-end;
  margin-bottom: -10px;
  img {
    max-width: 492px;
    width: 100%;
  }
`;
