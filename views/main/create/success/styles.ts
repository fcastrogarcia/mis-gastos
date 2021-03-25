import styled from "styled-components";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { getColor } from "styles/utils";

const Container = styled.div.attrs({
  className: "container container--1280 flex flex--column",
})``;

const Buttons = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column;
  padding: 40px;
`;

const Check = styled(CheckCircle).attrs({ size: 120 })`
  color: white;
  margin-bottom: 32px;
`;

const Legend = styled.div.attrs({ className: "flex flex--column" })`
  & p {
    font-size: 20px;
    text-align: center;
    color: #fafafa;
  }
`;

const Card = styled.div`
  position: relative;
  bottom: 76px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.fuzzy};
`;

const Upper = styled.div`
  background: ${getColor("green", 600)};
  padding: 40px;
`;

export default { Container, Buttons, Check, Legend, Card, Upper };
