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

  @media (max-width: 770px) {
    padding: 30px;
    height: 90px;
    max-width: 100%;
    margin: 0 auto;
    align-items: center;
  }

  @media (max-width: 415px) {
    padding: 10px;
    height: 80px;
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 320px) {
    padding: 10px;
    height: 80px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 85%;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
  //border: solid red 2px;
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
    width: 100%;
    padding: 0 5px;
    div {
      width: 60%;
      margin-top: 10px;
      height: 35px;
      //border: solid blue 2px;
      a {
        width: 80%;
      }

      img {
        width: 70%;
        max-width: 70px;
      }
    }

    span {
      width: 10px;
      height: 10px;
      top: 8px;
      right: 3px;
    }
  }

  @media (max-width: 415px) {
    width: 100%;
    padding: 0 5px;
    div {
      width: 60%;
      margin-top: 10px;
      height: 35px;
      //border: solid blue 2px;
      a {
        width: 80%;
      }

      img {
        width: 70%;
        max-width: 70px;
      }
    }

    span {
      width: 10px;
      height: 10px;
      top: 8px;
      right: 3px;
    }
  }

  @media (max-width: 320px) {
    width: 100%;
    padding: 0 5px;
    div {
      width: 50%;
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
  justify-content: flex-end;
  align-items: center;
  //overflow: hidden;
  //border: solid red 3px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    width: 70%;
    margin-top: 10px;
  }

  @media (max-width: 415px) {
    width: 70%;
    margin-top: 10px;
    //border: solid blue 2px;
  }

  @media (max-width: 320px) {
    width: 70%;
    margin-top: 10px;
    //border: solid blue 2px;
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
  //border: solid red 2px;
  @media (max-width: 1201px) {
  }
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
    width: 70%;
    padding: 0;
    margin-top: 0;
    height: 30px;
    position: relative;
    top: 0;
    //left: 30px;
    font-size: 10px;
  }

  @media (max-width: 415px) {
    width: 70%;
    padding: 0;
    margin-top: 0;
    height: 30px;
    position: relative;
    top: 0;
    //left: 30px;
    font-size: 10px;
  }

  @media (max-width: 320px) {
    width: 70%;
    padding: 3px;
    margin-top: 0;
    height: 30px;
    position: relative;
    top: 0;
    //left: 30px;
    font-size: 9px;
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
    position: relative;
    //background: transparent;
    top: 0;
    // left: 30px;
    width: 30px;
    min-height: 10px;
    height: 30px;
  }

  @media (max-width: 415px) {
    position: relative;
    //background: transparent;
    top: 0;
    // left: 30px;
    width: 30px;
    min-height: 10px;
    height: 30px;
  }

  @media (max-width: 320px) {
    position: relative;
    //background: transparent;
    top: 0;
    // left: 30px;
    width: 30px;
    min-height: 10px;
    height: 30px;
    font-size: 15px;
  }
`;
