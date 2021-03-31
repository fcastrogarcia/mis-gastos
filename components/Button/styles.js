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
`;

export default { Button };
