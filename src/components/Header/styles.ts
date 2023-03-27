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

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 401px) {
    padding: 10px;
    height: 80px;
    max-width: 390px;
    margin: 0 auto;
  }

  @media (max-width: 320px) {
    padding: 10px;
    height: 70px;
    max-width: 280px;
    margin: 0 auto;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 85%;
  position: relative;
  justify-content: space-between;

  div {
    height: 3rem;
    display: flex;

    a {
      text-decoration: none;
    }

    img {
      max-width: 5.621875rem;
      width: 7.8vw;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme["yellow-dark"]};
    font-size: clamp(8px, 1vw, 11px);
    color: ${(props) => props.theme.white};
    font-weight: 700;
    position: absolute;
    top: -2px;
    right: -2px;
    z-index: 10;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 401px) {
    width: 100%;
    padding: 0 5px;
    div {
      width: 40%;
      margin-top: 10px;
      gap: 2px;
      a {
        width: 80%;
      }

      img {
        width: 60%;
      }
    }

    span {
      width: 10px;
      height: 10px;
      top: 6px;
      right: 5px;
    }
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 5px;
    div {
      width: 40%;
      margin-top: 10px;
      gap: 2px;
      a {
        width: 80%;
      }

      img {
        width: 100%;
      }
    }

    span {
      width: 10px;
      height: 10px;
      top: 8px;
      right: 2px;
    }
  }
`;

export const LocationAndCartContainer = styled.article`
  display: flex;
  max-width: 12.0625rem;
  gap: 0.75rem;
  align-items: center;
  overflow: hidden;
  //border: solid red 3px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 401px) {
    margin: 10px 0;
    width: 100%;
    position: relative;
  }

  @media (max-width: 320px) {
    margin: 10px 0;
    width: 100%;
    position: relative;
  }
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
  border-radius: 4px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: clamp(0.7rem, 1.1vw, 0.875rem);
  cursor: pointer;

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 401px) {
    width: 60%;
    padding: 0;
    margin-top: 0;
    height: 30px;
    position: relative;
    top: -6px;
    left: 30px;
    font-size: 10px;
  }

  @media (max-width: 320px) {
    width: 60%;
    padding: 0;
    margin-top: 0;
    height: 20px;
    position: relative;
    top: -4px;
    left: 45px;
    font-size: 10px;
  }
`;

export const ButtonCartContainer = styled.button`
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["yellow-light"]};

  width: 20vw;
  max-width: 2.375rem;
  min-height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.9rem, 2vw, 1.2rem);

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    cursor: pointer;
  }

  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 401px) {
    position: relative;
    //background: transparent;
    top: -6px;
    left: 30px;
    width: 30px;
    min-height: 10px;
    height: 30px;
  }

  @media (max-width: 320px) {
    position: relative;
    background: transparent;
    top: -3px;
    left: 36px;
    width: 30px;
    min-height: 25px;
    height: 30px;
  }
`;
