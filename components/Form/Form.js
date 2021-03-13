import Switch from "components/Switch";
import { array, shape } from "prop-types";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import { validate, onSubmit } from "./utils";
import DatePicker from "components/DatePicker";
import SplitButton from "./components/SplitButton";
import styles from "./styles";

const Form = ({ switchOptions, initialValues }) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { touched, values, handleChange, handleSubmit, setFieldValue, errors } = formik;
  const { type, name, date, amount, provider, details, save_as_template } = values;

  const handleDateChange = date => setFieldValue("date", date);

  const handleAmountChange = ({ floatValue }) => setFieldValue("amount", floatValue);

  const getError = field => touched[field] && errors[field];

  const isPayment = type === "payment";

  return (
    <styles.Form id="new-item" onSubmit={handleSubmit}>
      {switchOptions && (
        <fieldset>
          <Switch options={switchOptions} handleClick={handleChange} selected={type} />
        </fieldset>
      )}
      <styles.Fields>
        <styles.Fieldset
          label={`${type} name`}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          error={Boolean(getError("name"))}
          helperText={getError("name")}
        />
        <styles.Fieldset
          label="Business"
          value={provider}
          onChange={handleChange}
          type="text"
          name="provider"
          error={Boolean(getError("provider"))}
          helperText={Boolean(getError("provider"))}
        />
        <NumberFormat
          value={amount}
          thousandSeparator={true}
          onValueChange={handleAmountChange}
          prefix={"$"}
          customInput={styles.AmountFieldset}
          error={Boolean(getError("amount"))}
          helperText={getError("amount")}
        />
        <DatePicker
          value={date}
          handleChange={handleDateChange}
          label={isPayment ? "Due Date" : "Date"}
          clearable
          error={Boolean(getError("date"))}
          helperText={getError("date")}
        />
        <styles.Fieldset
          label="Details"
          value={details}
          onChange={handleChange}
          type="text"
          name="details"
          error={Boolean(getError("details"))}
          helperText={getError("details")}
          multiline
        />
        <styles.Submit>
          <SplitButton handleCheckbox={handleChange} checked={save_as_template} />
        </styles.Submit>
      </styles.Fields>
    </styles.Form>
  );
};

export default Form;

Form.propTypes = {
  switchOptions: array,
  initialValues: shape({}),
};

Form.defaultProps = {
  switchOptions: [
    { value: "payment", label: "payment" },
    { value: "expense", label: "expense" },
  ],
  initialValues: {
    type: "payment",
    name: "",
    provider: "",
    amount: null,
    date: null,
    details: "",
    save_as_template: false,
  },
};
