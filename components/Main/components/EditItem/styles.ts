import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";
import DatePickerComponent from "components/DatePicker";
import StatusComponent from "components/Status";

const Container = styled.div`
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px 24px;
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

export default { StatusField, Container, TextField, DatePicker, AmountFieldset, Status };
