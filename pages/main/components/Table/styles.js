import styled, { css } from "styled-components";
const getColor = (color, variant) => ({ theme }) => theme.colors[color][variant];

const Table = styled.table`
  width: 100%;
  border-radius: 6px;
  margin-top: 32px;
  box-shadow: ${({ theme }) => theme.shadows.basic};
  padding: 16px;
  border-collapse: collapse;
  /* overflow: hidden; */
`;

const Row = styled.tr`
  /* transition: all 0.15s ease-in-out;
  border: 1px solid transparent;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border: 1px solid ${getColor("indigo", 700)};
  } */
  /* &:nth-child(even) {
    background: ${getColor("gray", 100)};
  } */
  border: 1px solid ${getColor("gray", 200)};
`;

const Header = styled.thead`
  color: ${({ theme }) => theme.colors.gray[600]};
  padding: 16px;
  font-size: 15px;
  /* font-size: 13px; */
  /* letter-spacing: 0.05em; */
  /* text-transform: uppercase; */
  text-transform: capitalize;
  background: ${getColor("gray", 100)};
  border-bottom: 1px solid ${getColor("gray", 300)};
`;

const HeaderCell = styled.th`
  height: 50px;
  text-align: left;
  background: ${getColor("gray", 100)};
  padding-left: 16px;
`;

const Cell = styled.td`
  height: 70px;
  padding-left: 16px;
  color: ${getColor("gray", 800)};
  font-weight: 500;

  &.table-cell {
    &--name {
      font-weight: 500;
    }
    &--status {
      text-transform: capitalize;
      font-size: 14px;

      & p {
        border-radius: 50px;
        width: min-content;
        padding: 4px 8px;

        ${({ status }) => {
          switch (status) {
            case "due":
              return css`
                color: ${getColor("red", 600)};
                background: ${getColor("red", 100)};
              `;
            case "paid":
              return css`
                color: ${getColor("green", 600)};
                background: ${getColor("green", 100)};
              `;
            case "pending":
              return css`
                color: ${getColor("yellow", 600)};
                background: ${getColor("yellow", 100)};
              `;
            case "aboutToLapse":
              return css`
                color: ${getColor("orange", 600)};
                background: ${getColor("orange", 100)};
              `;
            default:
              return css`
                color: ${getColor("blue", 600)};
                background: ${getColor("blue", 100)};
              `;
          }
        }};
      }
    }
  }
`;

const Body = styled.tbody``;

export default {
  Table,
  Header,
  HeaderCell,
  Row,
  Cell,
  Body,
};
