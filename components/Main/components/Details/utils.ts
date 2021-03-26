import { CurrentStatus, Status, Item } from "types/items";

export const getMarkAsPaidPayload = (status?: CurrentStatus): Partial<Item> => {
  const payload: Partial<Status> = {};

  if (!status) return payload;

  if (status === CurrentStatus.PAID) {
    payload.is_paid = false;
  } else {
    payload.is_paid = true;
    payload.date = new Date();
  }

  return { status: payload };
};
