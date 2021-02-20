import styles from "./Layout.module.scss";
import Header from "components/Header";

const Layout = ({ session, children }) => {
  return (
    <div className="layout">
      <Header user={session.user} />
      {children}
    </div>
  );
};

export default Layout;
