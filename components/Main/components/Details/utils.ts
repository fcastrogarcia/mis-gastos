import { CurrentStatus, Status } from "types/items";

export const getMarkAsPaidPayload = (status?: CurrentStatus) => {
  const payload: Partial<Status> = {};

  if (!status) return payload;

  if (status === "paid") {
    payload.is_paid = false;
  } else {
    payload.is_paid = true;
    payload.date = new Date();
  }

  return { status: payload };
};
