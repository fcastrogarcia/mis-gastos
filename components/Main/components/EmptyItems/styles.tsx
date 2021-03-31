import styled from "styled-components";
import MuiPaper from "@material-ui/core/Paper";
import { getColor } from "styles/utils";

const Message = styled.h3`
  font-size: 24px;
  color: ${getColor("gray", 800)};
  font-weight: 500;
`;

const Paper = styled(MuiPaper)`
  padding: 40px;
`;

const Container = styled.div`
  border-radius: 8px;
  padding: 32px;
  border: 1px solid ${getColor("gray", 300)};
`;

export default { Message, Container, Paper };
