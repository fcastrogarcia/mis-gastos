import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";
import BaseButton from "components/Button";

const Container = styled.div`
  padding: 32px 24px;
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

const Button = styled(BaseButton).attrs({ variant: "outlined" })`
  width: 100%;
`;

export default {
  Fieldset,
  Fields,
  Form,
  AmountFieldset,
  Submit,
  Button,
  Container,
};
