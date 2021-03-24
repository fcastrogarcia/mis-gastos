import { useState } from "react";
import Sideover from "components/Sideover";
import { Item } from "types/items";
import styles from "./styles";
import { deleteItems, api } from "lib/api";
import { mutate } from "swr";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

const Details = ({ closeSideover, open, item }: Props) => {
  const [loading, setLoading] = useState(false);

  const { id } = item || {};

  const handleDelete = async () => {
    setLoading(true);
    await deleteItems(id);
    setLoading(false);
    closeSideover();
    mutate(api.GET_ITEMS);
    // faltaría la notificación toast
  };

  return (
    <Sideover title="Details" handleClose={closeSideover} open={open} loading={loading}>
      <styles.Container>
        <styles.MarkAsPaid>Mark As Paid</styles.MarkAsPaid>
        <styles.Delete disabled={loading} onClick={handleDelete}>
          Delete
        </styles.Delete>
      </styles.Container>
    </Sideover>
  );
};

export default Details;
