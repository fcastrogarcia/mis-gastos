import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiCheckbox from "@material-ui/core/Checkbox";
import MuiButton from "@material-ui/core/Button";

const Container = styled.div`
  padding: 32px 24px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 24px;
`;

const Fieldset = styled(MuiTextField).attrs({})``;

const Fields = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const AmountFieldset = styled(Fieldset).attrs({
  label: "Amount",
  name: "amount",
})``;

const Submit = styled.div`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(MuiButton).attrs({ variant: "outlined", color: "primary" })`
  width: 100%;
`;

const FormControlLabel = styled(MuiFormControlLabel)``;

const Checkbox = styled(MuiCheckbox)``;

export default {
  Fieldset,
  Fields,
  Form,
  AmountFieldset,
  Submit,
  Button,
  Container,
  FormControlLabel,
  Checkbox,
};
