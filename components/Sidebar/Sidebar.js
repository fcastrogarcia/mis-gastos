import { shape } from "prop-types";
import styles from "./styles";

const Sidebar = ({ user }) => {
  console.log(user);
  return <styles.Sidebar>Sidebar</styles.Sidebar>;
};

Sidebar.propTypes = {
  user: shape({}),
};

Sidebar.defaultProps = {
  user: {},
};

export default Sidebar;
