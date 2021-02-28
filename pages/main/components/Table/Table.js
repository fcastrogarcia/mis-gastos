import styles from "./styles";
import { useItemsStateContext } from "context/items";
import format from "date-fns/format";

const table = {
  header: ["name", "provider", "due date", "amount", "status"],
};

const Table = () => {
  const { items } = useItemsStateContext();

  console.log({ items });

  return (
    <styles.Table>
      <styles.Header>
        <tr>
          {table.header.map((cell, index) => (
            <styles.HeaderCell key={index.toString()}>{cell}</styles.HeaderCell>
          ))}
        </tr>
      </styles.Header>
      <styles.Body>
        {items.map((item, index) => {
          return (
            <styles.Row key={index.toString()}>
              <styles.Cell className="table-cell--name">{item.name}</styles.Cell>
              <styles.Cell>{item.provider}</styles.Cell>
              <styles.Cell>
                {item.due_date && format(new Date(item.due_date), "MM-dd-yyyy")}
              </styles.Cell>
              <styles.Cell>{item.amount}</styles.Cell>
              <styles.Cell className="table-cell--status" status={item.current_status}>
                <p>{item.current_status}</p>
              </styles.Cell>
            </styles.Row>
          );
        })}
      </styles.Body>
    </styles.Table>
  );
};

export default Table;
