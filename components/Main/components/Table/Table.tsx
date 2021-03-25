import styles from "./styles";
import NumberFormat from "react-number-format";
import { getDate } from "utils/time";
import { useCalendarState } from "context/calendar";
import { Items } from "types/items";
import Status from "components/Status";

interface Props {
  items: Items;
  openSideover: (id: string) => () => void;
}

const table = {
  header: ["date", "name", "amount", "status"],
};

const Header = () => (
  <styles.Header>
    <tr>
      {table.header.map((cell, index) => (
        <styles.HeaderCell key={index.toString()}>{cell}</styles.HeaderCell>
      ))}
    </tr>
  </styles.Header>
);

const Table = ({ items, openSideover }: Props) => {
  const { selectedPeriod } = useCalendarState();

  return (
    <styles.Table>
      <Header />
      <styles.Body>
        {items.map((item, index) => {
          const {
            current_status,
            name,
            provider,
            due_date,
            date,
            amount,
            type,
            id,
          } = item;

          const isPayment = type === "payment";

          return (
            <styles.Row key={index.toString()} onClick={openSideover(id)}>
              <styles.Cell className="table-cell--date">
                {getDate(isPayment, due_date, date, selectedPeriod)}
              </styles.Cell>
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
              <styles.Cell className="table-cell--status">
                <Status value={current_status} />
              </styles.Cell>
            </styles.Row>
          );
        })}
      </styles.Body>
    </styles.Table>
  );
};

export default Table;
