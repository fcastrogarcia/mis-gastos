import Switch from "components/Switch";
import { array, shape, func } from "prop-types";
import styles from "./styles";

const Form = ({ switchOptions, values, handleChange, handleSubmit }) => {
  const { type, name } = values;
  return (
    <styles.Form id="new-item" onSubmit={handleSubmit}>
      {switchOptions && (
        <fieldset>
          <Switch options={switchOptions} handleClick={handleChange} selected={type} />
        </fieldset>
      )}
      <styles.Fieldset
        label={`${type} name`}
        value={name}
        onChange={handleChange}
        type="text"
      />
      <styles.Fieldset
        label={`Business`}
        value={name}
        onChange={handleChange}
        type="text"
      />
    </styles.Form>
  );
};

export default Form;

Form.propTypes = {
  switchOptions: array,
  values: shape({}).isRequired,
  handleSubmit: func,
  handleChange: func,
};

Form.defaultProps = {
  switchOptions: [
    { value: "payment", label: "payment" },
    { value: "expense", label: "expense" },
  ],
  handleSubmit: () => {},
  handleChange: () => {},
};
