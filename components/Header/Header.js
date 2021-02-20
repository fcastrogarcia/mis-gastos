import { shape } from "prop-types";
import styles from "./styles";

const Header = ({ user }) => {
  console.log(user);
  return (
    <styles.Header>
      <styles.Logo width={32} height={32} />
    </styles.Header>
  );
};

export default Header;

Header.propTypes = {
  user: shape({}),
};

Header.defaultProps = {
  user: {},
};
