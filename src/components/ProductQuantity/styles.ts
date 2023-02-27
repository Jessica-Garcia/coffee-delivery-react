import styled from "styled-components";

export const ProductQuantityContainer = styled.span`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 72px;
  max-height: 38px;
  border-radius: 6px;
  gap: 4px;
  color: ${(props) => props.theme["base-title"]};
  button {
    border: 0;
    background: ${(props) => props.theme["base-button"]};
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
      transition: color 0.5s;
      cursor: pointer;
    }
  }
`;
