import { shape } from "prop-types";
import styles from "./Header.module.scss";

const Header = ({ user }) => {
  return <header className={styles.header}></header>;
};

export default Header;

Header.propTypes = {
  user: shape({}),
};

Header.defaultProps = {
  user: {},
};
