import "date-fns";
import { instanceOf, func, string } from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider as Provider } from "@material-ui/pickers";
import styles from "./styles";

const DatePicker = ({ label, handleChange, value, ...rest }) => {
  return (
    <Provider utils={DateFnsUtils}>
      <styles.DatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        id="date-picker"
        name="date"
        label={label}
        value={value}
        autoOk={true}
        onChange={handleChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        {...rest}
      />
    </Provider>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  handleChange: func,
  value: instanceOf(Date),
  label: string,
};

DatePicker.defaultProps = {
  label: "Date",
  value: null,
  handleChange: () => {},
};
