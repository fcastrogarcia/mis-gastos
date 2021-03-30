import { useState } from "react";
import Sideover from "components/Sideover";
import Form from "components/Form";
import {
  useCreateItemDispatchContext,
  useCreateItemStateContext,
} from "context/sideovers";
import { mutate } from "swr";
import { api } from "lib/api";

type Operation = () => Promise<any>;

const AddNewItem = () => {
  const [loading, setLoading] = useState(false);

  const { closeCreate } = useCreateItemDispatchContext();
  const isOpen = useCreateItemStateContext();

  const handleOperation = (operation: Operation) => () => {
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
      <Form />
    </Sideover>
  );
};

export default AddNewItem;
