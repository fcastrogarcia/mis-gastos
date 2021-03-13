import axios from "axios";

export const validate = state => {
  const { name, amount } = state;

  let errors = {};

  const REQUIRED_FIELD = "This field is required";

  if (!name || typeof name !== "string") {
    errors.name = REQUIRED_FIELD;
  }

  if (!amount || typeof amount !== "number") {
    errors.amount = REQUIRED_FIELD;
  }

  return errors;
};

const renameDateKey = (values = {}) => {
  const { date: due_date, ...rest } = values;
  return { ...rest, due_date };
};

const getNextValues = values => {
  const { type } = values;
  return type === "payment" ? renameDateKey(values) : values;
};

export const onSubmit = values => {
  const data = getNextValues(values);
  axios
    .post("/api/items", data)
    .then(res => alert(JSON.stringify(res.data)))
    .catch(err => console.log(err));
};
