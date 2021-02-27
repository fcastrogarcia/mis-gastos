import styled from "styled-components";
import { ArrowBackIosNew } from "@styled-icons/material-rounded/ArrowBackIosNew";
import { ArrowForwardIos } from "@styled-icons/material-rounded/ArrowForwardIos";

const Container = styled.div`
  display: grid;
  grid-template-columns: 48px 80px 48px;
  grid-gap: 8px;
`;

const BaseButton = styled.button`
  padding: 10px 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.indigo[100]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.indigo[800]};
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.indigo[200]};
  }
`;

const Today = styled(BaseButton)``;

const Next = styled(BaseButton)``;

const Back = styled(BaseButton)``;

const ArrowBack = styled(ArrowBackIosNew)``;

const ArrowForward = styled(ArrowForwardIos)``;

export default { Container, Next, Back, Today, ArrowBack, ArrowForward };
