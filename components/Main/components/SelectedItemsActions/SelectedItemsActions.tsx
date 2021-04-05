import styles from "./styles";
import { useSelectedItemsState } from "context/items";
import useUpdateAndDelete from "hooks/useUpdateAndDelete";

const Actions = () => {
  const { quantity, selectedItems } = useSelectedItemsState();
  const { handleDelete } = useUpdateAndDelete(selectedItems);

  if (!quantity) return null;

  return (
    <styles.Container>
      <styles.Text>{quantity} items selected</styles.Text>
      <styles.Buttons>
        <styles.Button onClick={handleDelete} className="danger">
          Delete All
        </styles.Button>
        {/* <styles.Button onClick={handleMarkAsPaid} className="mark-as-paid">
          Mark As Paid
        </styles.Button> */}
      </styles.Buttons>
    </styles.Container>
  );
};

export default Actions;
