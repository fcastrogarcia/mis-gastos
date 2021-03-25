import styled, { css } from "styled-components";
import { getColor } from "styles/utils";
import { CurrentStatus } from "types/items";

const Status = styled.span<{ status: string }>`
  border-radius: 50px;
  padding: 4px 8px;
  font-weight: 600;

  ${({ status }) => {
    switch (status) {
      case CurrentStatus.OVERDUE:
        return css`
          color: ${getColor("red", 800)};
          background: ${getColor("red", 100)};
        `;
      case CurrentStatus.PAID:
        return css`
          color: ${getColor("green", 800)};
          background: ${getColor("green", 100)};
        `;
      case CurrentStatus.PENDING:
        return css`
          color: ${getColor("yellow", 800)};
          background: ${getColor("yellow", 100)};
        `;
      case CurrentStatus.ABOUT_TO_LAPSE:
        return css`
          color: ${getColor("orange", 800)};
          background: ${getColor("orange", 100)};
        `;
      case CurrentStatus.EXPENSE:
        return css`
          color: ${getColor("blue", 800)};
          background: ${getColor("blue", 100)};
        `;
    }
  }};
`;

export default { Status };
