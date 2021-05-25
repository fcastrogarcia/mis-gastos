import styles from "./styles";
import NumberFormat from "react-number-format";
import { useItemsState } from "context/items";
import { Item, CurrentStatus } from "types/items";

const getTotalAmount = (items: Item[]) =>
  items?.reduce((acc: number, curr: Item) => curr.amount + acc, 0);

const getItemType = (items: Item[], type: "expense" | "payment") =>
  items?.filter((item: Item) => item.type === type);

const Summary = () => {
  const { items } = useItemsState();

  if (!items || !items.length) return null;

  const total: number = getTotalAmount(items);
  const alreadyPaid: number = items?.reduce((acc: number, curr: Item) => {
    if (curr.current_status === CurrentStatus.PAID) return curr.amount + acc;
    return acc;
  }, 0);
  const payments = getItemType(items, "payment");
  const totalExpenses = getTotalAmount(getItemType(items, "expense"));
  const owed = getTotalAmount(payments) - alreadyPaid;

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
          <styles.Subtitle>Expenses</styles.Subtitle>
          <styles.Amount>
            {" "}
            <NumberFormat
              value={totalExpenses}
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
