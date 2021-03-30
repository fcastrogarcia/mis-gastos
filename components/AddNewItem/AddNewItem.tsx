import Sideover from "components/Sideover";
import useSideoverOperation from "hooks/useSideoverOperation";
import Form from "components/Form";
import {
  useCreateItemDispatchContext,
  useCreateItemStateContext,
} from "context/sideovers";

const AddNewItem = () => {
  const { closeCreate } = useCreateItemDispatchContext();
  const isOpen = useCreateItemStateContext();

  const { loading } = useSideoverOperation();

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
