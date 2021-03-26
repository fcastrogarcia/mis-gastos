import styles from "./styles";
import { Item } from "types/items";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import { useFormik } from "formik";
import pick from "lodash/pick";
import { validate } from "lib/validations";

interface Props {
  item: Item;
  handleMarkAsPaid: VoidFunction;
  handleDelete: VoidFunction;
  handleUpdateItems: (values: any) => VoidFunction;
  isPayment: boolean;
  isPaid: boolean;
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

const EditItem = ({
  item,
  handleMarkAsPaid,
  handleDelete,
  handleUpdateItems,
  isPayment,
  isPaid,
}: Props) => {
  const initialValues = pick(item, keys);

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { values, handleChange, setFieldValue } = formik;
  const {
    type,
    name,
    date,
    amount,
    current_status,
    provider,
    comment,
    due_date,
  } = values;

  function onSubmit(values: any) {
    handleUpdateItems(values)();
  }

  const computedDate = isPayment ? due_date : date;
  const computedDateField = isPayment ? "due_date" : "date";
  const handleDateChange = (date: string) => setFieldValue(computedDateField, date);
  const getError = (field: string) => formik.touched[field] && formik.errors[field];
  const handleAmountChange = ({ floatValue }: NumberFormatValues) =>
    setFieldValue("amount", floatValue);

  return (
    <styles.Form onSubmit={formik.handleSubmit}>
      <styles.Container>
        <styles.DatePicker
          value={new Date(computedDate)}
          handleChange={handleDateChange}
          label={isPayment ? "Due Date" : "Date"}
          clearable={"true"}
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
          label="Notes"
          value={comment}
          onChange={handleChange}
          type="text"
          name="comment"
          error={Boolean(getError("details"))}
          helperText={getError("details")}
          multiline
        />
      </styles.Container>
      <styles.Buttons>
        <styles.Button type="submit">Save changes</styles.Button>
        {isPayment && (
          <styles.Button className="mark-as-paid" onClick={handleMarkAsPaid}>
            {isPaid ? "Undo Payment" : "Mark As Paid"}
          </styles.Button>
        )}
        <styles.Button className="danger" onClick={handleDelete}>
          Delete
        </styles.Button>
      </styles.Buttons>
    </styles.Form>
  );
};

export default EditItem;
