import { Item } from "types/items";

interface Errors {
  name?: string;
  amount?: string;
}

export const validate = (state: Partial<Item>) => {
  const { name, amount } = state;

  let errors: Errors = {};

  const REQUIRED_FIELD = "This field is required";

  if (!name || typeof name !== "string") {
    errors.name = REQUIRED_FIELD;
  }

  if (!amount || typeof amount !== "number") {
    errors.amount = REQUIRED_FIELD;
  }

  return errors;
};

const renameDateKey = (values: Item) => {
  const { date: due_date, ...rest } = values;
  return { ...rest, due_date };
};

export const getNextValues = (values: Item) => {
  try {
    const { type } = values;
    return type === "payment" ? renameDateKey(values) : values;
  } catch (err) {
    console.error(err);
    return {};
  }
};
