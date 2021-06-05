import styles from "./styles";
import { useSelectedItemsState } from "context/items";
import useUpdateAndDelete from "hooks/useUpdateAndDelete";
import NumberFormat from "react-number-format";

const Actions = () => {
  const { quantity, selectedItems, selectedItemsAmount } = useSelectedItemsState();
  const { handleDelete } = useUpdateAndDelete(selectedItems);

  if (!quantity) return null;

  return (
    <styles.Container>
      <div style={{ display: "flex" }}>
        <styles.LightText>{quantity} items selected</styles.LightText>
        <styles.Text style={{ padding: "0 20px" }}>|</styles.Text>
        <styles.Text>
          <NumberFormat
            value={selectedItemsAmount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </styles.Text>
      </div>
      <styles.Buttons>
        <styles.Button onClick={handleDelete} className="danger">
          Delete All
        </styles.Button>
      </styles.Buttons>
    </styles.Container>
  );
};

export default Actions;
