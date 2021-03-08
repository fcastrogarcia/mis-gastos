import { string, array, func } from "prop-types";
import styles from "./styles";

const Switch = ({ selected, options, handleClick }) => {
  if (options.length > 2) return null;

  const curreIndex = options.findIndex(({ value }) => value === selected);

  return (
    <styles.Switch index={curreIndex}>
      {options.map(({ value, label }, index) => (
        <styles.Option
          key={index.toString()}
          onClick={handleClick}
          name="type"
          type="button"
          value={value}
          selected={value === selected}
        >
          {label}
        </styles.Option>
      ))}
    </styles.Switch>
  );
};

export default Switch;

Switch.propTypes = {
  selected: string.isRequired,
  options: array.isRequired,
  handleClick: func.isRequired,
};
