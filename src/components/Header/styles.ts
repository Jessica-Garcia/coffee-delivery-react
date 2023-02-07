import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  max-width: 90rem;
  height: 6.5rem;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.background};
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 85%;

  justify-content: space-between;
  span {
    height: 3rem;
    display: flex;
    img {
      max-width: 5.621875rem;
      width: 7.8vw;
    }
  }
`;

export const LocationAndCartContainer = styled.div`
  display: flex;
  max-width: 12.0625rem;

  gap: 0.75rem;
  align-items: center;
  overflow: hidden;
`;

export const ButtonLocationContainer = styled.button`
  width: 24vw;
  max-width: 8.9375rem;
  height: 2.375rem;
  padding: 0.5rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: clamp(0.7rem, 1.1vw, 0.875rem);
`;

export const ButtonCartContainer = styled.button`
  width: 20vw;
  height: 5vh;
  max-width: 2.375rem;
  min-height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["yellow-light"]};
  font-size: clamp(0.8rem, 1.1vw, 0.875rem);
`;
