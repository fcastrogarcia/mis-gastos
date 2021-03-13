// import axios from "axios";

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

export const onSubmit = values => {
  alert(JSON.stringify(values, null, 2));
};
