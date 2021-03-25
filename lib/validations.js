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

export const getNextValues = values => {
  try {
    const { type } = values;
    return type === "payment" ? renameDateKey(values) : values;
  } catch (err) {
    console.error(err);
    return {};
  }
};
