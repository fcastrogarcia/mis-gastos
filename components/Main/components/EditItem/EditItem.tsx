import styles from "./styles";
import { Item } from "types/items";
import axios from "axios";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import { useFormik } from "formik";
import pick from "lodash/pick";
import { validate } from "lib/validations";
import { useCallback } from "react";

interface Props {
  item: Item;
  handleOperation: (operation: () => {}) => () => Promise<void>;
}

const keys = [
  "name",
  "date",
  "provider",
  "amount",
  "due_date",
  "comment",
  "type",
  "current_status",
];

const EditItem = ({ item, handleOperation }: Props) => {
  console.log({ item });
  const initialValues = pick(item, keys);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { values, handleChange, setFieldValue } = formik;
  const { type, name, date, amount, current_status, provider, details } = values;

  function onSubmit(values: any) {
    alert(JSON.stringify(values));
  }

  const handleDateChange = (date: string) => setFieldValue("date", date);
  const getError = (field: string) => formik.touched[field] && formik.errors[field];
  const handleAmountChange = ({ floatValue }: NumberFormatValues) =>
    setFieldValue("amount", floatValue);
  const isPayment = type === "payment";

  return (
    <styles.Container>
      <styles.DatePicker
        value={date}
        handleChange={handleDateChange}
        label={isPayment ? "Due Date" : "Date"}
        clearable
        error={Boolean(getError("date"))}
        helperText={getError("date")}
      />
      <styles.StatusField>
        <styles.Status value={current_status} />
      </styles.StatusField>
      <styles.TextField
        value={name}
        label={`${type} name`}
        onChange={handleChange}
        name="name"
        error={Boolean(getError("name"))}
        helperText={getError("name")}
      />
      <styles.TextField
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
      <styles.TextField
        label="Details"
        value={details}
        onChange={handleChange}
        type="text"
        name="details"
        error={Boolean(getError("details"))}
        helperText={getError("details")}
        multiline
      />
    </styles.Container>
  );
};

export default EditItem;
