import Payment from "models/Payment";
import Expense from "models/Expense";

export async function getItemsData(userId = "", types = []) {
  const config = {
    user: userId,
  };

  const dbQueries = types.reduce((acc, curr) => {
    switch (curr) {
      case "payment":
        const paymentsPromise = Payment.find(config);
        return [...acc, paymentsPromise];
      case "expense":
        const expensesPromise = Expense.find(config);
        return [...acc, expensesPromise];
      default:
        return acc;
    }
  }, []);

  const data = await Promise.all(dbQueries);

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
