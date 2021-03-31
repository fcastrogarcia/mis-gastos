import styles from "./styles";
import NumberFormat from "react-number-format";
import { useItemsState } from "context/items";
import { Item, CurrentStatus } from "types/items";

const Summary = () => {
  const { items } = useItemsState();

  const total: number = items?.reduce((acc: number, curr: Item) => curr.amount + acc, 0);
  const alreadyPaid: number = items?.reduce((acc: number, curr: Item) => {
    if (curr.current_status === CurrentStatus.PAID) return curr.amount + acc;
    return acc;
  }, 0);
  const owed = total - alreadyPaid;

  return (
    <>
      <styles.Title text="Summary" />
      <styles.Content>
        <styles.Block>
          <styles.Subtitle>Month Total</styles.Subtitle>
          <styles.Amount>
            <NumberFormat
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </styles.Amount>
        </styles.Block>
        <styles.Block>
          <styles.Subtitle>Already Paid</styles.Subtitle>
          <styles.Amount>
            {" "}
            <NumberFormat
              value={alreadyPaid}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </styles.Amount>
        </styles.Block>
        <styles.Block>
          <styles.Subtitle>Owed</styles.Subtitle>
          <styles.Amount>
            {" "}
            <NumberFormat
              value={owed}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </styles.Amount>
        </styles.Block>
      </styles.Content>
    </>
  );
};

export default Summary;
