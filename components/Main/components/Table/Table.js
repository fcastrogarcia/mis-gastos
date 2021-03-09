import styles from "./styles";
import format from "date-fns/format";
import NumberFormat from "react-number-format";
import { array } from "prop-types";

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

const Table = ({ items }) => (
  <styles.Table>
    <Header />
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
            <styles.Cell className="table-cell--date">
              {format(new Date(type === "expense" ? created_at : due_date), "MMM d")}
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
            <styles.Cell className="table-cell--status" status={current_status}>
              <span>{current_status}</span>
            </styles.Cell>
          </styles.Row>
        );
      })}
    </styles.Body>
  </styles.Table>
);

export default Table;

Table.propTypes = {
  items: array,
};

Table.defaultProps = {
  items: [],
};
