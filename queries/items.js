import Payment from "models/Payment";
import Expense from "models/Expense";

export async function getItems(userId = "", types = []) {
  const parameters = {
    user: userId,
  };

  const queries = types.reduce((acc, curr) => {
    switch (curr) {
      case "payment":
        const payments = Payment.find(parameters);
        return [...acc, payments];
      case "expense":
        const expenses = Expense.find(parameters);
        return [...acc, expenses];
      default:
        return acc;
    }
  }, []);

  const data = await Promise.all(queries);

  return [].concat(...data);
}

export async function createItem(body = {}, type = "") {
  const { type } = body;

  if (!type) throw new Error("Type property is required in request body");

  switch (type) {
    case "payment":
      return await Payment.create({ ...body });
    case "expense":
      return await Expense.create({ ...body });
    default:
      throw new Error("Type property must be either 'expense' or 'payment'");
  }
}
