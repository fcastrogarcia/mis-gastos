import styles from "./styles";
import { useCreateItemDispatchContext } from "context/sideovers";

const AddItem = () => {
  const { openCreate } = useCreateItemDispatchContext();

  return (
    <styles.Container>
      <styles.Add onClick={openCreate}>
        <styles.Plus />
        New Item
      </styles.Add>
    </styles.Container>
  );
};

export default AddItem;
