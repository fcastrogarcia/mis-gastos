import { string } from "prop-types";
import styles from "./styles";

const Button = ({ variant, ...rest }) => {
  return <styles.Button variant={variant} {...rest} />;
};

export default Button;

Button.propTypes = {
  variant: string,
};

Button.defaultProps = {
  variant: "contained",
};
