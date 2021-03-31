import styles from "./styles";

const Sidebar = ({ children, ...rest }: { children: JSX.Element }) => {
  return <styles.Sidebar {...rest}>{children}</styles.Sidebar>;
};

export default Sidebar;
