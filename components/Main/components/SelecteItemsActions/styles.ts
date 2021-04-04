import styled from "styled-components";
import MuiButton from "components/Button";
import { getColor } from "styles/utils";

const Container = styled.div`
  border-top: 1px solid ${getColor("gray", 300)};
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  width: 100%;
  box-sizing: border-box;
`;

const Text = styled.p`
  color: ${getColor("gray", 800)};
  line-height: 40px;
`;

const Button = styled(MuiButton).attrs({ variant: "outlined", color: "primary" })`
  width: 120px;
`;

const Buttons = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: column;
`;

export default { Container, Button, Text, Buttons };
