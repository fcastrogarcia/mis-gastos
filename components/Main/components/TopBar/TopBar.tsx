import styled from "styled-components";
import Period from "../Period";
import PeriodSelector from "../PeriodSelector";
import AddItem from "../AddItem";
import { getColor } from "styles/utils";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 16px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.basic};
  padding: 16px 24px;
  border-collapse: collapse;
  background: ${getColor("basic", "white")};
  margin-bottom: 24px;
`;

const TopBar = () => {
  return (
    <Container>
      <Period />
      <PeriodSelector />
      <AddItem />
    </Container>
  );
};

export default TopBar;
