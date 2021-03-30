import styled from "styled-components";
import Period from "../Period";
import PeriodSelector from "../PeriodSelector";
import AddItem from "../AddItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 16px;
  padding: 32px 24px;
  border-radius: 8px;
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
