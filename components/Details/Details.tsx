import Sideover from "components/Sideover";
import { CurrentStatus } from "types/items";
import Form from "./components/Form";
import { useEditItemStateContext, useEditItemDispatchContext } from "context/sideovers";
import useUpdateAndDelete from "hooks/useUpdateAndDelete";
import { useItemsState } from "context/items";

const Details = () => {
  const { selectedItem, isEditOpen } = useEditItemStateContext();
  const { closeDetails } = useEditItemDispatchContext();

  const { getSelectedItem } = useItemsState();

  const item = getSelectedItem(selectedItem) || {};

  const { id, current_status, type } = item;

  const {
    handleDelete,
    handleMarkAsPaid,
    handleUpdateItems,
    loading,
  } = useUpdateAndDelete(id, current_status, closeDetails);

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
