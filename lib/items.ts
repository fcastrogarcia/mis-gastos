import Payment from "models/Payment";
import Expense from "models/Expense";
import { Items, Item } from "types/items";

export async function getItems(userId: string, types: string[]): Promise<Items> {
  const parameters = {
    user: userId,
  };

  const queries = types.reduce((acc, curr) => {
    switch (curr) {
      case "payment": {
        const payments = Payment.find(parameters);
        return [...acc, payments];
      }
      case "expense": {
        const expenses = Expense.find(parameters);
        return [...acc, expenses];
      }
      default:
        return acc;
    }
  }, []);

  const [firstItems = [], secondItems = []] = await Promise.all(queries);

  return [...firstItems, ...secondItems];
}

export async function createItem(body: Item): Promise<Items> {
  const { type, user } = body;

  if (!type) throw new Error("Type property is required in request body");
  if (!user) throw new Error("UserId property is required in request body");

  switch (type) {
    case "payment":
      return await Payment.create({ ...body });
    case "expense":
      return await Expense.create({ ...body });
    default:
      throw new Error("Type property must be either 'expense' or 'payment'");
  }
}
