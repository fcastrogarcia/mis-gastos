import styled from "styled-components";
import MuiButton from "components/Button";
import { getColor } from "styles/utils";

const Container = styled.div`
  border-top: 1px solid ${getColor("gray", 300)};
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${getColor("basic", "white")};
  z-index: 1200;
  width: calc(100% - 400px);
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
