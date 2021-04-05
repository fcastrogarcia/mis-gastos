import { useState } from "react";
import { mutate } from "swr";
import { updateItems, deleteItems, api } from "lib/api";
import { CurrentStatus, Status, Item } from "types/items";

type Operation = () => Promise<any>;

const getMarkAsPaidPayload = (status?: CurrentStatus): Partial<Item> => {
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

function useUpdateAndDelete(
  id: string | string[],
  current_status?: CurrentStatus,
  callback?: any
) {
  const [loading, setLoading] = useState(false);

  const handleOperation = (operation: Operation) => () => {
    setLoading(true);

    return operation().then(() => {
      setLoading(false);
      mutate(api.GET_ITEMS);
      callback && callback();
    });
  };

  const handleUpdateItems = (values: Partial<Item>) =>
    handleOperation(() => updateItems(id, values));

  const handleDelete = handleOperation(() => deleteItems(id));

  const handleMarkAsPaid = handleUpdateItems(getMarkAsPaidPayload(current_status));

  return {
    handleDelete,
    handleMarkAsPaid,
    handleUpdateItems,
    loading,
  };
}

export default useUpdateAndDelete;
