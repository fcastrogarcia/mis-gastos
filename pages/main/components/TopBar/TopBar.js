import styled from "styled-components";
import Period from "../Period";
import PeriodSelector from "../PeriodSelector";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[200]};
  padding-bottom: 16px;
`;

const TopBar = () => {
  return (
    <Container>
      <Period />
      <PeriodSelector />
    </Container>
  );
};

export default TopBar;
