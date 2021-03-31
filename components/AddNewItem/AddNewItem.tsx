import { useState } from "react";
import Sideover from "components/Sideover";
import Form from "./components/Form";
import {
  useCreateItemDispatchContext,
  useCreateItemStateContext,
} from "context/sideovers";
import { mutate } from "swr";
import { api } from "lib/api";
import { Operation } from "types/atoms";
import { Item } from "types/items";

const initialValues: Partial<Item> = {
  type: "payment",
  name: "",
  provider: "",
  amount: undefined,
  date: undefined,
  comment: "",
  save_as_template: false,
};

const switchOptions = [
  { value: "payment", label: "payment" },
  { value: "expense", label: "expense" },
];

const AddNewItem = () => {
  const [loading, setLoading] = useState(false);

  const { closeCreate } = useCreateItemDispatchContext();
  const isOpen = useCreateItemStateContext();

  const handleOperation = (operation: Operation) => {
    setLoading(true);
    operation().finally(() => {
      setLoading(false);
      closeCreate();
      mutate(api.GET_ITEMS);
    });
  };

  return (
    <Sideover
      title="Create new item"
      handleClose={closeCreate}
      open={isOpen}
      loading={loading}
    >
      <Form
        handleOperation={handleOperation}
        initialValues={initialValues}
        switchOptions={switchOptions}
      />
    </Sideover>
  );
};

export default AddNewItem;
