import { useState } from "react";
import Sideover from "components/Sideover";
import { CurrentStatus, Item } from "types/items";
import { getMarkAsPaidPayload } from "./utils";
import { updateItems, deleteItems, api } from "lib/api";
import { mutate } from "swr";
import Form from "./components/Form";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

type Operation = () => Promise<any>;

const Details = ({ closeSideover, open, item }: Props) => {
  const [loading, setLoading] = useState(false);

  const { id, current_status, type } = item || {};

  const handleOperation = (operation: Operation) => () => {
    setLoading(true);
    operation().finally(() => {
      setLoading(false);
      closeSideover();
      mutate(api.GET_ITEMS);
    });
  };

  const handleDelete = handleOperation(() => deleteItems(id));

  const handleUpdateItems = (values: Partial<Item>) =>
    handleOperation(() => updateItems(id, values));

  const handleMarkAsPaid = handleUpdateItems(getMarkAsPaidPayload(current_status));

  return (
    <Sideover title="Details" handleClose={closeSideover} open={open} loading={loading}>
      <Form
        item={item}
        handleMarkAsPaid={handleMarkAsPaid}
        handleDelete={handleDelete}
        handleUpdateItems={handleUpdateItems}
        isPayment={type === "payment"}
        isPaid={current_status === CurrentStatus.PAID}
      />
    </Sideover>
  );
};

export default Details;
