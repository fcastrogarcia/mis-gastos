import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";
import DatePickerComponent from "components/DatePicker";
import StatusComponent from "components/Status";
import MuiButton from "@material-ui/core/Button";
import { getColor } from "styles/utils";

const Container = styled.div`
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px 24px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const TextField = styled(MuiTextField)`
  grid-column: 1 / 3;
`;

const DatePicker = styled(DatePickerComponent)``;

const AmountFieldset = styled(MuiTextField).attrs({
  label: "Amount",
  name: "amount",
})`
  grid-column: 1 / 3;
`;

const StatusField = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Status = styled(StatusComponent)`
  padding: 6px 15px;
`;

const Buttons = styled.div`
  display: grid;
  grid-gap: 8px;
  padding: 24px;
`;

const Button = styled(MuiButton).attrs({ variant: "outlined", color: "primary" })`
  &,
  &:hover {
    box-shadow: none;
  }

  &.danger {
    color: ${getColor("red", 600)};
    border-color: ${getColor("red", 600)};
    &:hover {
      background: ${getColor("red", 50)};
    }
  }

  &.mark-as-paid {
    color: ${getColor("green", 700)};
    border-color: ${getColor("green", 700)};
    &:hover {
      background: ${getColor("green", 50)};
    }
  }
`;

export default {
  StatusField,
  Container,
  TextField,
  DatePicker,
  AmountFieldset,
  Status,
  Button,
  Buttons,
  Form,
};
