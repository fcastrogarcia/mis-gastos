import { authenticate } from "utils/auth";
import cx from "classnames";
import styles from "./Main.module.scss";

const Main = props => {
  return (
    <div className={cx("flex", styles.layout)}>
      <h1>Main</h1>
    </div>
  );
};

export default Main;

export const getServerSideProps = authenticate();
