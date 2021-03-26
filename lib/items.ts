import { Item } from "types/items";
import startOfMonth from "date-fns/startOfMonth";

export const getTypes = (type: string | string[]): string[] => {
  if (typeof type === "string") return Array(type);
  else return type;
};

export const getDerivedBody = (body: Partial<Item>) => {
  const { date, due_date } = body;

  const computedDate = due_date || date;

  if (!computedDate) return body;

  const period = startOfMonth(new Date(computedDate).getTime());

  return { ...body, period };
};
