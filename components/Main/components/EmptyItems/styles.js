import styled from "styled-components";

const Message = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray[800]};
  font-weight: 500;
`;

const Container = styled.div``;

export default { Message, Container };
