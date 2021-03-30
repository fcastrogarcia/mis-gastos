import styled from "styled-components";
import MuiPaper from "@material-ui/core/Paper";

const Content = styled.div`
  max-width: 1280px;
  padding: 40px 28px 0;
  display: flex;
`;

const TemplatesContainer = styled.div`
  flex: 1;
`;

const Paper = styled(MuiPaper)`
  padding: 24px;
  margin-left: 24px;
  height: 100%;
  box-sizing: border-box;
`;

export default { Content, TemplatesContainer, Paper };
