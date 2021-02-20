import { shape } from "prop-types";
import styles from "./Header.module.scss";
import Logo from "components/Logo";

const Header = ({ user }) => {
  console.log(user);
  return (
    <header className={styles.container}>
      <Logo className={styles.icon} width={32} height={32} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  user: shape({}),
};

Header.defaultProps = {
  user: {},
};
