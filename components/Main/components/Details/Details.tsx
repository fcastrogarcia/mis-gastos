import { useState } from "react";
import Sideover from "components/Sideover";
import { Item } from "types/items";
import styles from "./styles";
import { updateItems, deleteItems, api } from "lib/api";
import { mutate } from "swr";
import EditItem from "../EditItem";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

const Details = ({ closeSideover, open, item }: Props) => {
  const [loading, setLoading] = useState(false);

  const { id } = item || {};

  const handleOperation = (operation: () => Promise<any>) => () => {
    setLoading(true);
    operation().finally(() => {
      setLoading(false);
      closeSideover();
      mutate(api.GET_ITEMS);
    });
  };

  const handleDelete = handleOperation(() => deleteItems(id));

  const handleUpdateItems = (values: any) =>
    handleOperation(() => updateItems(id, values));

  const handleMarkAsPaid = handleUpdateItems({
    status: { is_paid: true, date: new Date() },
  });

  return (
    <Sideover title="Details" handleClose={closeSideover} open={open} loading={loading}>
      <styles.Container>
        <EditItem
          item={item}
          handleMarkAsPaid={handleMarkAsPaid}
          handleDelete={handleDelete}
          handleUpdateItems={handleUpdateItems}
        />
      </styles.Container>
    </Sideover>
  );
};

export default Details;
