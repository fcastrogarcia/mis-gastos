import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";
import BaseButton from "components/Button";

const Form = styled.form`
  display: grid;
  grid-gap: 48px;
`;

const Fieldset = styled(MuiTextField).attrs({})`
  max-width: 320px;
`;

const Fields = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  max-width: 700px;
  grid-gap: 48px;
`;

const AmountFieldset = styled(Fieldset).attrs({ label: "Amount" })``;

const Submit = styled.div`
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(BaseButton)`
  width: 120px;
`;

export default { Fieldset, Fields, Form, AmountFieldset, Submit, Button };
