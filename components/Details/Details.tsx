import { useState } from "react";
import Sideover from "components/Sideover";
import { CurrentStatus, Item } from "types/items";
import { getMarkAsPaidPayload } from "./utils";
import { updateItems, deleteItems, api } from "lib/api";
import { mutate } from "swr";
import Form from "./components/Form";
import { useEditItemStateContext, useEditItemDispatchContext } from "context/sideovers";
import { useItemsState } from "context/items";

type Operation = () => Promise<any>;

const Details = () => {
  const [loading, setLoading] = useState(false);

  const { selectedItem, isEditOpen } = useEditItemStateContext();
  const { closeDetails } = useEditItemDispatchContext();

  const { getSelectedItem } = useItemsState();

  const item = getSelectedItem(selectedItem) || {};

  const { id, current_status, type } = item;

  const handleOperation = (operation: Operation) => () => {
    setLoading(true);
    operation().finally(() => {
      setLoading(false);
      closeDetails();
      mutate(api.GET_ITEMS);
    });
  };

  const handleDelete = handleOperation(() => deleteItems(id));

  const handleUpdateItems = (values: Partial<Item>) =>
    handleOperation(() => updateItems(id, values));

  const handleMarkAsPaid = handleUpdateItems(getMarkAsPaidPayload(current_status));

  return (
    <Sideover
      title="Details"
      handleClose={closeDetails}
      open={isEditOpen}
      loading={loading}
    >
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
