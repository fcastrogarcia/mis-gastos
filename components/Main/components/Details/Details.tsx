import Sideover from "components/Sideover";
import { Item } from "types/items";

interface Props {
  closeSideover: VoidFunction;
  open: boolean;
  item: Item;
}

const Details = ({ closeSideover, open, item }: Props) => {
  return (
    <Sideover title="Details" handleClose={closeSideover} open={open}>
      <p></p>
    </Sideover>
  );
};

export default Details;
