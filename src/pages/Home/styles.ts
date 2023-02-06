import styled from "styled-components";

export const HomeContainer = styled.main`
  background: ${(props) => props.theme.background};
  max-width: 90rem;
  margin: 0 auto;
  height: 143.3125rem;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 2rem;
  top: 6.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const BannerContent = styled.section`
  width: 85%;
  display: flex;
  height: 34rem;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const TextContent = styled.article``;

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
  margin-top: 5.875rem;

  div {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    max-width: 36.75rem;
    width: 100%;
    max-height: 7.75rem;
    height: 100%;
    font-size: clamp(1.2rem, 2vw, 3rem);
    display: flex;
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
    font-size: clamp(0.75rem, 1.1vw, 1.25rem);
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
      font-size: clamp(0.6rem, 1vw, 0.9rem);
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
