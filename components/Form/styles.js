import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";

const Form = styled.form`
  display: grid;
  grid-gap: 32px;
  max-width: 420px;
`;

const Fieldset = styled(MuiTextField).attrs({ variant: "outlined" })`
  max-width: 320px;
`;

export default { Fieldset, Form };
