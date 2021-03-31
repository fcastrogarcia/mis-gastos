import NumberFormat, { NumberFormatValues } from "react-number-format";
import { useFormik } from "formik";
import Switch from "components/Switch";
import { validate } from "lib/validations";
import DatePicker from "components/DatePicker";
import styles from "./styles";
import { Item } from "types/items";
import { Operation } from "types/atoms";
import { createItem } from "lib/api";

interface Option {
  label: string;
  value: string;
}

interface Props {
  switchOptions: Option[];
  initialValues: Partial<Item>;
  handleOperation: (operation: Operation) => void;
}

const Form = ({ switchOptions, initialValues, handleOperation }: Props) => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { values, handleChange, setFieldValue } = formik;
  const { type, name, date, amount, provider, comment } = values;

  function onSubmit(values: Item) {
    handleOperation(() => createItem(values));
  }

  const handleDateChange = (date: string) => setFieldValue("date", date);
  const handleAmountChange = ({ floatValue }: NumberFormatValues) =>
    setFieldValue("amount", floatValue);
  const getError = (field: keyof Item) => formik.touched[field] && formik.errors[field];
  const isPayment = type === "payment";

  return (
    <styles.Container>
      <styles.Form id="new-item" onSubmit={formik.handleSubmit}>
        {switchOptions && (
          <fieldset>
            <Switch
              options={switchOptions}
              handleClick={handleChange}
              selected={type || ""}
            />
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
            helperText={getError("provider")}
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
            error={Boolean(getError("date"))}
            helperText={getError("date")}
            clearable
          />
          <styles.Fieldset
            label="Notes"
            value={comment}
            onChange={handleChange}
            type="text"
            name="comment"
            error={Boolean(getError("comment"))}
            helperText={getError("comment")}
            multiline
          />
          {/* <styles.FormControlLabel
            control={
              <styles.Checkbox
                checked={save_as_template}
                onChange={handleChange}
                name="save_as_template"
                color="primary"
              />
            }
            label="Save As Template"
          /> */}
        </styles.Fields>
      </styles.Form>
      <styles.Submit>
        <styles.Button type="submit" form="new-item">
          Create
        </styles.Button>
      </styles.Submit>
    </styles.Container>
  );
};

export default Form;
