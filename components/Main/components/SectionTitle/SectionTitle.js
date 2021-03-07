import styled from "styled-components";
import { getColor } from "styles/utils";

const Container = styled.div``;

const Title = styled.h1`
  color: ${getColor("gray", 700)};
  font-weight: 700;
  margin-bottom: 48px;
`;

const SectionTitle = () => {
  return (
    <Container>
      <Title>Payments & Expenses</Title>
    </Container>
  );
};

export default SectionTitle;
