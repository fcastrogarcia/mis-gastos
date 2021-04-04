import styled, { css } from "styled-components";
import { getColor } from "styles/utils";

const Button = styled.button`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  font-size: 15px;
  height: 40px;
  transition: all 0.1s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case "contained":
        return css`
          color: ${getColor("basic", "white")};
          background: ${getColor("indigo", 700)};
          &:hover {
            background: ${getColor("indigo", 800)};
          }
        `;
      case "outlined":
        return css`
          color: ${getColor("indigo", 700)};
          border: 1px solid ${getColor("indigo", 700)};
          background: transparent;
          &:hover {
            background: ${getColor("indigo", 100)};
          }
        `;
    }
  }}

  &,
  &:hover {
    box-shadow: none;
  }

  &.danger {
    color: ${getColor("red", 600)};
    border-color: ${getColor("red", 600)};
    &:hover {
      background: ${getColor("red", 50)};
    }
  }

  &.mark-as-paid {
    color: ${getColor("green", 700)};
    border-color: ${getColor("green", 700)};
    &:hover {
      background: ${getColor("green", 50)};
    }
  }
`;

export default { Button };
