import styled from "styled-components";
import SectionTitle from "components/SectionTitle";
import { getColor } from "styles/utils";

const Title = styled(SectionTitle)`
  width: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  padding: 32px 24px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: ${getColor("gray", 600)};
  font-weight: 500;
  margin-bottom: 6px;
`;

const Amount = styled.p`
  color: ${getColor("gray", 800)};
  font-size: 20px;
  font-weight: 500;
`;

const Block = styled.div`
  margin-bottom: 24px;
`;

export default {
  Title,
  Content,
  Subtitle,
  Amount,
  Block,
};
