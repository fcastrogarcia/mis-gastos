import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getColor } from "styles/utils";

const TableWrapper = styled.div`
  border: 1px solid ${getColor("gray", 300)};
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  padding: 16px;
  border-collapse: collapse;
  background: ${getColor("basic", "white")};
`;

const Row = styled.tr`
  border: 1px solid ${getColor("gray", 300)};
  border-left: none;
  border-right: none;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;

const Header = styled.thead`
  color: ${({ theme }) => theme.colors.gray[600]};
  padding: 16px;
  font-size: 15px;
  text-transform: capitalize;
  border-bottom: 1px solid ${getColor("gray", 300)};
`;

const HeaderCell = styled.th`
  height: 48px;
  text-align: left;
  /* background: ${getColor("gray", 100)}; */
  padding-left: 24px;
  font-weight: 500;
`;

const Cell = styled.td<{ status?: string }>`
  height: 70px;
  padding-left: 24px;
  color: ${getColor("gray", 700)};
  font-weight: 500;
  font-size: 15px;
  line-height: 1.25rem;

  & .table-text {
    &--name {
      font-weight: 500;
      color: ${getColor("gray", 800)};
    }
    &--provider {
      font-weight: 400;
      color: ${getColor("gray", 600)};
    }
  }

  &.table-cell {
    &--date {
      color: ${getColor("gray", 600)};
    }
    &--amount {
      font-size: 17px;
      font-weight: 500;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

const Loader = styled(CircularProgress)``;

const Body = styled.tbody``;

export default {
  Table,
  Header,
  HeaderCell,
  Row,
  Cell,
  Body,
  Loader,
  Container,
  TableWrapper,
};
