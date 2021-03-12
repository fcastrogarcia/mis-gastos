import Switch from "components/Switch";
import { array, shape, func } from "prop-types";
import DatePicker from "components/DatePicker";
import styles from "./styles";
import NumberFormat from "react-number-format";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Form = ({ switchOptions, values, handleChange, handleSubmit }) => {
  const { type, name, date, amount, provider, details, save_as_template } = values;
  const isPayment = type === "payment";

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
        <styles.CheckboxContainer>
          <FormControlLabel
            control={
              <styles.Checkbox
                checked={save_as_template}
                value={save_as_template}
                onChange={handleChange("save_as_template")}
                name="save_as_template"
                color="primary"
              />
            }
            label="Save As Template"
          />
        </styles.CheckboxContainer>
        <styles.Fieldset
          label="Details"
          value={details}
          onChange={handleChange()}
          type="text"
          name="details"
          multiline
        />
        <styles.Submit>
          <styles.Button>Save</styles.Button>
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
  setValues: func,
};

Form.defaultProps = {
  switchOptions: [
    { value: "payment", label: "payment" },
    { value: "expense", label: "expense" },
  ],
  handleSubmit: () => {},
  handleChange: () => {},
  setValues: () => {},
};
