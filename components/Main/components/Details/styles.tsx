import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const Buttons = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-gap: 8px;
`;

const Button = styled(MuiButton).attrs({ variant: "contained", color: "primary" })`
  font-size: 14px;
  &,
  &:hover {
    box-shadow: none;
  }
`;

const Content = styled.div``;

const Actions = styled.div``;

export default { Button, Buttons, Container, Content, Actions };
