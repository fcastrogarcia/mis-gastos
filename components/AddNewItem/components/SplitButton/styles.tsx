import styled from "styled-components";
import MuiCheckbox from "@material-ui/core/Checkbox";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiButton from "@material-ui/core/Button";
import MuiPaper from "@material-ui/core/Paper";

const Checkbox = styled(MuiCheckbox)``;

const FormControlLabel = styled(MuiFormControlLabel)``;

const Button = styled(MuiButton)`
  height: 44px;
  &[type="submit"] {
    width: 110px;
  }
`;

const Paper = styled(MuiPaper)`
  box-shadow: ${({ theme }) => theme.shadows.vercel};
  position: relative;
  top: 6px;
`;

export default {
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
};
