import styled from "styled-components";
import Period from "../Period";
import PeriodSelector from "../PeriodSelector";
import AddItem from "../AddItem";
import { getColor } from "styles/utils";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 16px;
  padding: 24px;
  border-bottom: 1px solid ${getColor("gray", 200)};
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
