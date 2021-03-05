import styled from "styled-components";
import { getColor } from "styles/utils";

const FlexContainer = styled.div.attrs({ className: "flex" })``;

const Container = styled(FlexContainer)`
  position: relative;
  right: 250px;
`;

const Providers = styled(FlexContainer)`
  flex-direction: column;
  max-width: 380px;
  padding: 34px;
  box-shadow: ${({ theme }) => theme.shadows.vercel};
  border-radius: 6px;
  background: ${getColor("gray", 800)};
`;

const ProvidersTitle = styled.h2`
  color: ${getColor("basic", "fafafa")};
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.25px;
  margin-bottom: 30px;
  font-weight: 600;
`;

const Google = styled.div`
  padding-left: 10px;
`;

export default { Container, Providers, ProvidersTitle, Google };
