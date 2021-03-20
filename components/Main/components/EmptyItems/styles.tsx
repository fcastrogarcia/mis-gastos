import styled from "styled-components";
import MuiPaper from "@material-ui/core/Paper";
import { getColor } from "styles/utils";

const Message = styled.h3`
  font-size: 24px;
  color: ${getColor("gray", 800)};
  font-weight: 500;
`;

const Paper = styled(MuiPaper)`
  padding: 32px;
`;

const Container = styled.div``;

export default { Message, Container, Paper };
