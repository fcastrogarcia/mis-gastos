import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";
import { getColor } from "styles/utils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const Button = styled(MuiButton).attrs({ variant: "contained" })`
  width: 100%;
  border-radius: 0;
  height: 50px;
  font-weight: 500;
  color: ${getColor("basic", "white")};
  &,
  &:hover {
    border-left: none;
    border-right: none;
  }
`;

const MarkAsPaid = styled(Button)`
  background: ${getColor("green", 600)};
  &:hover {
    background: ${getColor("green", 700)};
  }
`;

const Delete = styled(Button)`
  background: ${getColor("red", 650)};
  &:hover {
    background: ${getColor("red", 700)};
  }
`;

const Content = styled.div``;

const Actions = styled.div``;

export default { Button, Container, Content, MarkAsPaid, Delete, Actions };
