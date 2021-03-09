import Table from "./Table";
import { useItemsState } from "context/items";
import styles from "./styles";
import EmptyItems from "../EmptyItems";

const TableContainer = () => {
  const { items } = useItemsState();

  if (!items)
    return (
      <styles.Container>
        <styles.Loader />
      </styles.Container>
    );

  if (!items?.length)
    return (
      <styles.Container>
        <EmptyItems />
      </styles.Container>
    );

  return <Table items={items} />;
};

export default TableContainer;
