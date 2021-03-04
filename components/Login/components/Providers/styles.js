import styled from "styled-components";
import { Google as GoogleIcon } from "@styled-icons/boxicons-logos/Google";

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
  background: ${({ theme }) => theme.colors.gray[800]};
`;

const ProvidersTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray[300]};
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;

const Google = styled(GoogleIcon)`
  padding-left: 5px;
`;

export default { Container, Providers, ProvidersTitle, Google };
