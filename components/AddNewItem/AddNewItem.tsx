import Sideover from "components/Sideover";
import useSideoverOperation from "hooks/useSideoverOperation";
import Form from "components/Form";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
}

const AddNewItem = ({ open = true, closeSideover }: Props) => {
  const { loading } = useSideoverOperation();

  return (
    <Sideover
      title="Create new item"
      handleClose={closeSideover}
      open={open}
      loading={loading}
    >
      <Form />
    </Sideover>
  );
};

export default AddNewItem;
