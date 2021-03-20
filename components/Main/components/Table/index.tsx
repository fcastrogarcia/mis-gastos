import { useState } from "react";
import Table from "./Table";
import { useItemsState } from "context/items";
import styles from "./styles";
import EmptyItems from "../EmptyItems";
import Details from "../Details";
import { Item } from "types/items";

const TableContainer = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, selectItem] = useState("");

  const { items } = useItemsState();

  const handleClose = () => setOpen(false);
  const handleOpen = (id: string) => () => {
    selectItem(id);
    setOpen(true);
  };

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

  return (
    <>
      <Table items={items} openSideover={handleOpen} />
      <Details
        closeSideover={handleClose}
        open={open}
        item={items.find((item: Item) => item._id === selectedItem)}
      />
    </>
  );
};

export default TableContainer;
