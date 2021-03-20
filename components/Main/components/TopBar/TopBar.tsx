import styled from "styled-components";
import Period from "../Period";
import PeriodSelector from "../PeriodSelector";
import AddItem from "../AddItem";
import { getColor } from "styles/utils";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 16px;
  border-bottom: 2px solid ${getColor("gray", 200)};
  padding-bottom: 16px;
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
