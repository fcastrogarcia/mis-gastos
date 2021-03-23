import { useState } from "react";
import Sideover from "components/Sideover";
import { Item } from "types/items";
import styles from "./styles";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

const Details = ({ closeSideover, open, item }: Props) => {
  const [loading, setLoading] = useState(false);

  const { id } = item || {};

  console.log({ id });

  const handleDelete = () => {
    setLoading(true);
  };

  return (
    <Sideover title="Details" handleClose={closeSideover} open={open} loading={loading}>
      <styles.Container>
        <styles.MarkAsPaid>Mark As Paid</styles.MarkAsPaid>
        <styles.Delete onClick={handleDelete}>Delete</styles.Delete>
      </styles.Container>
    </Sideover>
  );
};

export default Details;
