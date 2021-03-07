import styles from "./styles";
import User from "components/User";

const Header = () => {
  return (
    <styles.Header>
      <styles.Logo width={30} height={30} />
      <User />
    </styles.Header>
  );
};

export default Header;
