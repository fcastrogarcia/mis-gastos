import styles from "./styles";
import { useItemsState } from "context/items";
import format from "date-fns/format";
import NumberFormat from "react-number-format";
import EmptyItems from "../EmptyItems";

const table = {
  header: ["name", "amount", "date", "status"],
};

const Table = () => {
  const { currentItems: items = [], loading } = useItemsState();

  if (loading)
    return (
      <styles.Container>
        <styles.Loader />
      </styles.Container>
    );

  if (!loading && !items.length)
    return (
      <styles.Container>
        <EmptyItems />
      </styles.Container>
    );

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
          const {
            current_status = "expense",
            name,
            provider,
            due_date,
            amount,
            created_at,
            type,
          } = item;

          return (
            <styles.Row key={index.toString()}>
              <styles.Cell>
                <p className="table-text--name">{name}</p>
                <p className="table-text--provider">{provider}</p>
              </styles.Cell>
              <styles.Cell className="table-cell--amount">
                <NumberFormat
                  value={amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </styles.Cell>
              <styles.Cell>
                {format(
                  new Date(type === "expense" ? created_at : due_date),
                  "MM-dd-yyyy"
                )}
              </styles.Cell>
              <styles.Cell className="table-cell--status" status={current_status}>
                <span>{current_status}</span>
              </styles.Cell>
            </styles.Row>
          );
        })}
      </styles.Body>
    </styles.Table>
  );
};

export default Table;
