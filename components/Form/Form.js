import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { array, shape } from "prop-types";
import axios from "axios";
import NumberFormat from "react-number-format";
import { useFormik } from "formik";
import Switch from "components/Switch";
import { validate, getNextValues } from "lib/validations";
import DatePicker from "components/DatePicker";
import SplitButton from "./components/SplitButton";
import styles from "./styles";
import Card from "@material-ui/core/Card";

const DEV_MODE = true;

const Form = ({ switchOptions, initialValues }) => {
  const [error, setError] = useState({ status: false, message: "" });

  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { values, handleChange, setFieldValue } = formik;
  const { type, name, date, amount, provider, details, save_as_template } = values;

  function onSubmit(values) {
    if (DEV_MODE) {
      return new Promise(resolve => {
        setTimeout(() => {
          router.push(`/main/create/success/${type}`);
          resolve();
        }, 500);
      });
    }

    axios
      .post("/api/items", getNextValues(values))
      .then(() => {
        router.push(`/main/create/success/${type}`);
      })
      .catch(err => {
        setError({ status: true, message: err.message });
      });
  }

  const handleDateChange = date => setFieldValue("date", date);

  const handleAmountChange = ({ floatValue }) => setFieldValue("amount", floatValue);

  const getError = field => formik.touched[field] && formik.errors[field];

  const isPayment = type === "payment";

  useEffect(() => {
    if (error.status) {
      alert(JSON.stringify(error.message));
    }
  }, [error.status]);

  return (
    <>
      <Card style={{ padding: 32 }} variant="outlined">
        <styles.Form id="new-item" onSubmit={formik.handleSubmit}>
          {switchOptions && (
            <fieldset>
              <Switch
                options={switchOptions}
                handleClick={handleChange}
                selected={type}
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
              value={details}
              onChange={handleChange}
              type="text"
              name="comment"
              error={Boolean(getError("comment"))}
              helperText={getError("comment")}
              multiline
            />
          </styles.Fields>
        </styles.Form>
        <styles.Submit>
          <SplitButton
            handleCheckbox={handleChange}
            checked={save_as_template}
            disabled={formik.isSubmitting}
          />
        </styles.Submit>
      </Card>
    </>
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
    name: DEV_MODE ? "Test item" : "",
    provider: "",
    amount: DEV_MODE ? 12 : null,
    date: null,
    comment: "",
    save_as_template: false,
  },
};
