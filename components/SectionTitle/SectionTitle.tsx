import styled from "styled-components";
import { getColor } from "styles/utils";

const Header = styled.div`
  padding: 0 24px;
  border-bottom: 1px solid ${getColor("gray", 200)};
`;

const Title = styled.h1`
  color: ${getColor("gray", 700)};
  font-weight: 600;
  font-size: 22px;
  padding: 28px 0;
`;

const SectionTitle = ({ text, ...rest }: { text: string }) => {
  if (!text) return null;

  return (
    <Header {...rest}>
      <Title>{text}</Title>
    </Header>
  );
};

export default SectionTitle;
