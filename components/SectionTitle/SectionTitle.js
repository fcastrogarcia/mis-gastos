import styled from "styled-components";
import { getColor } from "styles/utils";
import { string } from "prop-types";

const Container = styled.div``;

const Title = styled.h1`
  color: ${getColor("gray", 700)};
  font-weight: 600;
  font-size: 22px;
  padding: 32px 0;
`;

const SectionTitle = ({ text }) => {
  if (!text) return null;

  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  text: string.isRequired,
};
