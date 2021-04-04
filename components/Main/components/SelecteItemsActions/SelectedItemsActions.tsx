import styles from "./styles";
import { useSelectedItemsState } from "context/items";

const Actions = () => {
  const { quantity, selectedItems } = useSelectedItemsState();

  console.log({ quantity, selectedItems });

  if (!quantity) return null;

  return (
    <styles.Container>
      <styles.Text>{quantity} items selected</styles.Text>
      <styles.Buttons>
        <styles.Button className="danger">Delete All</styles.Button>
        <styles.Button className="mark-as-paid">Mark As Paid</styles.Button>
      </styles.Buttons>
    </styles.Container>
  );
};

export default Actions;
