import styled from "styled-components";

export const HeaderContainer = styled.header`
  border: solid red 2px;
  display: flex;
  justify-content: space-between;
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.background};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  span {
    margin-left: 10rem;
    width: 5.621875rem;
  }
`;

export const LocationAndCartContainer = styled.div`
  margin-right: 10rem;
  border: solid blue 2px;
  display: flex;
  width: 12.0625rem;
  gap: 0.75rem;
  align-items: center;
`;

export const ButtonLocationContainer = styled.button`
  width: 8.9375rem;
  height: 2.375rem;
  padding: 0.5rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  line-height: 1.1375rem;
`;

export const ButtonCartContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  //padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["yellow-light"]};
  font-size: 0.875rem;
  line-height: 1.1375rem;
`;
