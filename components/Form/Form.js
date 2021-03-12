import Switch from "components/Switch";
import { array, shape, func, bool } from "prop-types";
import DatePicker from "components/DatePicker";
import styles from "./styles";
import NumberFormat from "react-number-format";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import SplitButton from "./components/SplitButton";

const Form = ({ switchOptions, values, handleChange, handleSubmit, isPayment }) => {
  const { type, name, date, amount, provider, details, save_as_template } = values;

  return (
    <styles.Form id="new-item" onSubmit={handleSubmit}>
      {switchOptions && (
        <fieldset>
          <Switch options={switchOptions} handleClick={handleChange()} selected={type} />
        </fieldset>
      )}
      <styles.Fields>
        <styles.Fieldset
          label={`${type} name`}
          value={name}
          onChange={handleChange()}
          type="text"
          name="name"
        />
        <styles.Fieldset
          label={`Business`}
          value={provider}
          onChange={handleChange()}
          type="text"
          name="provider"
        />
        <NumberFormat
          value={amount}
          thousandSeparator={true}
          onChange={handleChange()}
          prefix={"$"}
          customInput={styles.AmountFieldset}
        />
        <DatePicker
          value={date}
          handleChange={handleChange("date")}
          label={isPayment ? "Due Date" : "Date"}
        />
        <styles.Fieldset
          label="Details"
          value={details}
          onChange={handleChange()}
          type="text"
          name="details"
          multiline
        />
        <styles.Submit>
          <SplitButton
            handleCheckbox={handleChange("save_as_template")}
            checked={save_as_template}
          />
        </styles.Submit>
      </styles.Fields>
    </styles.Form>
  );
};

export default Form;

Form.propTypes = {
  switchOptions: array,
  values: shape({}).isRequired,
  handleSubmit: func,
  handleChange: func,
  isPayment: bool.isRequired,
};

Form.defaultProps = {
  switchOptions: [
    { value: "payment", label: "payment" },
    { value: "expense", label: "expense" },
  ],
  handleSubmit: () => {},
  handleChange: () => {},
};
