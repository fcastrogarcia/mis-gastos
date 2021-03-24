import { useState } from "react";
import Sideover from "components/Sideover";
import { Item } from "types/items";
import styles from "./styles";
import { updateItems, deleteItems, api } from "lib/api";
import { mutate } from "swr";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

const Details = ({ closeSideover, open, item }: Props) => {
  const [loading, setLoading] = useState(false);

  const { id } = item || {};

  const handleOperation = (operation: () => {}) => async () => {
    setLoading(true);
    await operation();
    setLoading(false);
    closeSideover();
    mutate(api.GET_ITEMS);
  };

  const handleDelete = handleOperation(() => deleteItems(id));

  const handleMarkAsPaid = handleOperation(() =>
    updateItems(id, { status: { is_paid: true, date: new Date() } })
  );

  return (
    <Sideover title="Details" handleClose={closeSideover} open={open} loading={loading}>
      <styles.Container>
        <styles.MarkAsPaid disabled={loading} onClick={handleMarkAsPaid}>
          Mark As Paid
        </styles.MarkAsPaid>
        <styles.Delete disabled={loading} onClick={handleDelete}>
          Delete
        </styles.Delete>
      </styles.Container>
    </Sideover>
  );
};

export default Details;
