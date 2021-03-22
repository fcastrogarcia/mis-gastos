import Sideover from "components/Sideover";
import { Item } from "types/items";
import styles from "./styles";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

const Details = ({ closeSideover, open, item }: Props) => {
  return (
    <Sideover title="Details" handleClose={closeSideover} open={open}>
      <styles.Container>
        <styles.MarkAsPaid>Mark As Paid</styles.MarkAsPaid>
        <styles.Delete>Delete</styles.Delete>
      </styles.Container>
    </Sideover>
  );
};

export default Details;
