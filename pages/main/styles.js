import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 32px;
`;

export default { Container };
